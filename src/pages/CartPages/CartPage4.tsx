import { Card, CardBody, Flex, Alert } from '@chakra-ui/react';

const CartPage4 = () => {
	return (
		<Card>
			<CardBody className="justify-center">
				<Flex className="flex-col mt-3 mb-3 gap-1">
					<Alert className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]">
						Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ sớm liên hệ lại với
						bạn để xác nhận đơn hàng
					</Alert>
				</Flex>
			</CardBody>
		</Card>
	);
};
export default CartPage4;
