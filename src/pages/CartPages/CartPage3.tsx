import { Card, CardBody, Flex } from '@chakra-ui/react';

const CartPage3 = () => {
	return (
		<Card className="w-50 bg-white rounded-xl">
			<CardBody className="justify-center m-2">
				<Flex className="flex-col mt-3 mb-3 gap-3">
					<p className="text-2xl">Thông tin đặt hàng</p>
					<Flex>
						<Flex minWidth={'200'}>
							<li>
								<b>Khách hàng</b>
							</li>
						</Flex>
						<Flex>Ngô Tiến Long</Flex>
					</Flex>
					<Flex>
						<Flex minWidth={'200'}>
							<li>
								<b>Số điện thoại</b>
							</li>
						</Flex>
						<Flex>0967981332</Flex>
					</Flex>
					<Flex>
						<Flex minWidth={'200'}>
							<li>
								<b>Địa chỉ nhận hàng</b>
							</li>
						</Flex>
						<Flex>Hoàng Mai, Hà Nội</Flex>
					</Flex>
					<Flex>
						<Flex minWidth={'200'}>
							<li>
								<b>Tạm tính</b>
							</li>
						</Flex>
						<Flex className="text-red-500">
							<b>3,290,000₫</b>
						</Flex>
					</Flex>
					<Flex>
						<Flex minWidth={'200'}>
							<li>
								<b>Phí vận chuyển</b>
							</li>
						</Flex>
						<Flex className="text-red-500">
							<b>Miễn phí</b>
						</Flex>
					</Flex>
					<Flex>
						<Flex minWidth={'200'}>
							<li>
								<b>Tổng tiền</b>
							</li>
						</Flex>
						<Flex className="text-red-500">
							<b>3,290,000₫</b>
						</Flex>
					</Flex>
					<hr></hr>
					<p className="text-2xl">Chọn hình thức thanh toán</p>
					{/* <Radio name="type" label="Thanh toán COD" defaultChecked /> */}
				</Flex>
			</CardBody>
		</Card>
	);
};
export default CartPage3;
