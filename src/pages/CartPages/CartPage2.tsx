import { Flex } from '@chakra-ui/react';
import { Card, CardBody, Radio, Typography } from '@material-tailwind/react';
import { Input } from '@mui/material';

const CartPage2 = () => {
	return (
		<Card className="bg-white rounded-xl">
			<CardBody className="items-center gap-8 m-6 justify-center">
				<Flex className="flex-col mt-3 mb-3 gap-1 items-center">
					<Typography>Thông tin mua hàng</Typography>
					<Flex className="gap-2">
						<Radio
							name="gender"
							label="Anh"
							crossOrigin="gender"
							defaultChecked
						/>
						<Radio name="gender" label="Chị" crossOrigin="gender" />
					</Flex>
					<Flex className="flex-col gap-3">
						<Input placeholder="Nhập họ tên"></Input>
						<Input placeholder="Nhập số điện thoại"></Input>
					</Flex>
					Chọn cách giao hàng
					<Radio
						name="ship"
						label="Giao hàng tận nơi"
						defaultChecked
						crossOrigin="Ship"
					/>
					<Input placeholder="Địa chỉ"></Input>
					<Input placeholder="Ghi chú (không bắt buộc)"></Input>
					<Flex className="justify-between">
						Phí vận chuyển: Miễn phí
					</Flex>
					<Flex className="justify-between">
						Tổng tiền:
						<Typography className="text-red-500">
							3,290,000đ
						</Typography>
					</Flex>
				</Flex>
			</CardBody>
		</Card>
	);
};
export default CartPage2;
