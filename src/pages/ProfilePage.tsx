import { Flex, Image } from '@chakra-ui/react';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Typography,
} from '@material-tailwind/react';
import {
	Input,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import { GetApi, ServiceEndPoint } from 'Constant';
import { FireBaseUserProps, OrderProps } from 'Types';
import { useEffect, useState } from 'react';
import { GetItem } from 'utils/StorageUtils';

const button = (isViewing: boolean) => (isViewing ? 'inherit' : 'black');

const ProfilePage = () => {
	const [isViewing, setIsViewing] = useState(true);
	const [user, setUser] = useState({} as FireBaseUserProps);
	const [orders, setOrders] = useState({} as OrderProps[]);
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	useEffect(() => {
		const fetchData = async () => {
			try {
				const _user = await fetch(
					GetApi(ServiceEndPoint.users).concat(GetItem('uid')),
				);
				const _order = await fetch(
					GetApi(ServiceEndPoint.order).concat(GetItem('uid')),
				);
				setUser(await _user.json());
				setOrders(await _order.json());
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
		setName(user.displayName);
		setPhone(user.phoneNumber);
		setEmail(user.email);
	}, []);
	const BuildOption = (user: FireBaseUserProps) => {
		user.displayName = name;
		user.phoneNumber = phone;
		user.email = email;
		return {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		};
	};
	return (
		<Card className="flex flex-col h-fit w-full m-8 gap-4 bg-teal-50 ">
			<CardHeader className="flex flex-row m-8 justify-between">
				<Image
					className="w-32 m-2 h-32 rounded-xl border-separate"
					src={user.photoUrl}
				/>
				<Flex className="flex-col m-4">
					<Input
						disabled={isViewing}
						value={name}
						placeholder="Tên"
						defaultValue={user.displayName}
						onChange={(event) => setName(event.target.value)}
					/>
					<Input
						disabled={isViewing}
						value={phone}
						placeholder="Số điện thoại"
						onChange={(event) => setPhone(event.target.value)}
					/>
					<Input
						disabled={isViewing}
						value={email}
						placeholder="Email"
						onChange={(event) => setEmail(event.target.value)}
					/>
				</Flex>
				<Flex className="flex-col justify-between">
					<Flex className="justify-end">
						<Button
							className={'rounded-3xl p-2 m-2 bg-'.concat(
								button(!isViewing),
							)}
							onClick={() => setIsViewing(false)}
							disabled={!isViewing}
						>
							<PencilSquareIcon className="w-4 h-4" />
						</Button>
					</Flex>
					<Button
						className={'m-2 bg-'.concat(button(isViewing))}
						disabled={isViewing}
						onClick={async () => {
							const response = await fetch(
								GetApi(ServiceEndPoint.users).concat(
									GetItem('uid'),
								),
								BuildOption(user),
							);
							if (response.status == 200) {
								setIsViewing(true);
								return;
							}
							alert(response.statusText);
						}}
					>
						Xác nhận
					</Button>
				</Flex>
			</CardHeader>
			<CardBody className="">
				<Flex className="flex-col bg-white rounded-xl border-collapse">
					{Array.from(orders).filter((order) => {
						order.status = 'Paid';
					}).length > 0 ? (
						<Flex className="flex-col">
							<Typography className="text-xl font-bold m-2">
								Lịch sử mua hàng
							</Typography>
							<Flex>
								{Array.from(orders).map((order) => (
									<Table>
										<TableHead>
											<TableCell>
												<Typography>Tên</Typography>
											</TableCell>
											<TableCell>
												<Typography>Loại</Typography>
											</TableCell>
										</TableHead>
										<TableBody>
											<TableCell>
												{Array.from(order.items)
													.filter((item) => {
														item.orderStatus ==
															'Paid';
													})
													.map((item) => (
														<TableRow>
															<Typography>
																{
																	item.target
																		.name
																}
															</Typography>
														</TableRow>
													))}
											</TableCell>
											<TableCell>
												{Array.from(order.items)
													.filter((item) => {
														item.orderStatus ==
															'Paid';
													})
													.map((item) => (
														<TableRow>
															<Typography>
																{
																	item.target
																		.type
																}
															</Typography>
														</TableRow>
													))}
											</TableCell>
										</TableBody>
									</Table>
								))}
							</Flex>
						</Flex>
					) : (
						<Flex className="p-16 justify-center">
							<Typography>Không có lịch sử mua hàng</Typography>
						</Flex>
					)}
				</Flex>
			</CardBody>
		</Card>
	);
};
export default ProfilePage;
