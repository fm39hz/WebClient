import { Flex } from '@chakra-ui/react';
import { Card, CardBody, Radio, Typography } from '@material-tailwind/react';
import { Input } from '@mui/material';
import { ShippingInformationProps } from 'Types';
import { useEffect, useState } from 'react';
import { GetItem } from 'utils/StorageUtils';

type CartPage2Props = {
	shippingInfo: ShippingInformationProps;
	setShippingInfo: CallableFunction;
	price: number;
};

const CartPage2 = (props: CartPage2Props) => {
	const [gender, setGender] = useState('Nam');
	const [name, setName] = useState(props.shippingInfo.name);
	const [phone, setPhone] = useState(props.shippingInfo.phoneNumber);
	const [address, setAddress] = useState(props.shippingInfo.address);
	const [note, setNote] = useState('');
	useEffect(() => {
		const _shippingInfo = {
			userUid: GetItem('uid'),
			name: name,
			phoneNumber: phone,
			address: address,
			gender: gender,
		} as ShippingInformationProps;
		if (gender !== '' && name !== '' && phone !== '' && address !== '') {
			props.setShippingInfo(_shippingInfo);
		}
	}, [gender, name, phone, address, note]);
	return (
		<Card className="bg-white rounded-xl">
			<CardBody className="items-center justify-center">
				<Flex className="flex-col mt-3 mb-3 gap-1 items-center">
					<Typography>Thông tin mua hàng</Typography>
					<Flex className="gap-2">
						<Radio
							name="gender"
							label="Nam"
							onClick={() => {
								setGender('Nam');
							}}
							crossOrigin="gender"
							defaultChecked
						/>
						<Radio
							name="gender"
							label="Nữ"
							onClick={() => {
								setGender('Nữ');
							}}
							crossOrigin="gender"
						/>
					</Flex>
					<Flex className="flex-col gap-3">
						<Input
							placeholder="Nhập họ tên"
							onChange={(event) => {
								setName(event.target.value);
							}}
							required
							value={name}
						/>
						<Input
							placeholder="Nhập số điện thoại"
							type="tel"
							value={phone}
							required
							onChange={(event) => {
								setPhone(event.target.value);
							}}
						/>
					</Flex>
					Chọn cách giao hàng
					<Radio
						name="ship"
						label="Giao hàng tận nơi"
						defaultChecked
						crossOrigin="Ship"
					/>
					<Input
						placeholder="Địa chỉ"
						value={address}
						required
						onChange={(event) => {
							setAddress(event.target.value);
						}}
					/>
					<Input
						placeholder="Ghi chú (không bắt buộc)"
						value={note}
						onChange={(event) => {
							setNote(event.target.value);
						}}
					/>
					<Flex className="justify-between">
						Phí vận chuyển: Miễn phí
					</Flex>
					<Flex className="justify-between">
						Tổng tiền:
						<Typography className="text-red-500">
							{props.price.toLocaleString()}đ
						</Typography>
					</Flex>
				</Flex>
			</CardBody>
		</Card>
	);
};
export default CartPage2;
