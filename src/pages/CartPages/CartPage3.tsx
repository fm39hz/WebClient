import { Card, CardBody, Flex } from '@chakra-ui/react';
import { Radio, Typography } from '@material-tailwind/react';
import { Divider, Table, TableCell, TableRow } from '@mui/material';
import { ShippingInformationProps } from 'Types';

type CartPage3Props = {
	shippingInfo: ShippingInformationProps;
	finalPrice: number;
};

const CartPage3 = (props: CartPage3Props) => {
	return (
		<Card className="w-50 bg-white rounded-xl">
			<CardBody className="justify-center m-2">
				<Flex className="flex-col px-6 w-full">
					<Typography className="text-2xl mt-3 mb-3 ">
						Thông tin đặt hàng
					</Typography>
					<Flex className="flex-col gap-3">
						<Divider />
						<Table>
							<TableCell>
								<TableRow>
									<Typography>Khách hàng</Typography>
								</TableRow>
								<TableRow>
									<Typography>Số điện thoại</Typography>
								</TableRow>
								<TableRow>
									<Typography>Địa chỉ nhận hàng</Typography>
								</TableRow>
								<TableRow>
									<Typography>Tạm tính</Typography>
								</TableRow>
								<TableRow>
									<Typography>Phí vận chuyển</Typography>
								</TableRow>
								<TableRow>
									<Typography>Tổng tiền</Typography>
								</TableRow>
							</TableCell>
							<TableCell>
								<TableRow>
									<Typography>
										{props.shippingInfo.name}
									</Typography>
								</TableRow>
								<TableRow>
									<Typography>
										{props.shippingInfo.phoneNumber}
									</Typography>
								</TableRow>
								<TableRow>
									<Typography>
										{props.shippingInfo.address}
									</Typography>
								</TableRow>
								<TableRow>
									<Typography className="text-red-500">
										{props.finalPrice.toLocaleString()}₫
									</Typography>
								</TableRow>
								<TableRow>
									<Typography className="text-red-500">
										Miễn phí
									</Typography>
								</TableRow>
								<TableRow>
									<Typography className="text-red-500">
										{props.finalPrice.toLocaleString()}₫
									</Typography>
								</TableRow>
							</TableCell>
						</Table>
						<Typography className="text-2xl">
							Chọn hình thức thanh toán
						</Typography>
						<Radio
							name="type"
							label="Thanh toán COD"
							defaultChecked
							crossOrigin=""
						/>
					</Flex>
				</Flex>
			</CardBody>
		</Card>
	);
};
export default CartPage3;
