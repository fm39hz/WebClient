import { Card, CardBody, Flex, Spacer } from '@chakra-ui/react';
import { Radio, Typography } from '@material-tailwind/react';
import { Divider } from '@mui/material';

const CartPage3 = () => {
	return (
		<Card className="w-50 bg-white rounded-xl">
			<CardBody className="justify-center m-2">
				<Flex className="flex-col mt-3 mb-3 gap-3">
					<Typography className="text-2xl">
						Thông tin đặt hàng
					</Typography>
					<Flex>
						<Typography>Khách hàng</Typography>
						<Spacer />
						<Flex>Ngô Tiến Long</Flex>
					</Flex>
					<Flex>
						<Typography>Số điện thoại</Typography>
						<Spacer />
						<Flex>0967981332</Flex>
					</Flex>
					<Flex>
						<Typography>Địa chỉ nhận hàng</Typography>
						<Spacer />
						<Flex>Hoàng Mai, Hà Nội</Flex>
					</Flex>
					<Flex>
						<Typography>Tạm tính</Typography>
						<Spacer />
						<Flex className="text-red-500">
							<Typography>3,290,000₫</Typography>
						</Flex>
					</Flex>
					<Flex>
						<Typography>Phí vận chuyển</Typography>
						<Spacer />
						<Flex className="text-red-500">
							<Typography>Miễn phí</Typography>
						</Flex>
					</Flex>
					<Flex>
						<Typography>Tổng tiền</Typography>
						<Spacer />
						<Flex className="text-red-500">
							<Typography>3,290,000₫</Typography>
						</Flex>
					</Flex>
					<Divider />
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
			</CardBody>
		</Card>
	);
};
export default CartPage3;
