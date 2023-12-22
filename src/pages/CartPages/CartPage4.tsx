import { Card, CardBody, Flex, Alert } from '@chakra-ui/react';
import { Typography } from '@material-tailwind/react';

const CartPage4 = () => {
	return (
		<Card>
			<CardBody className="bg-white justify-center rounded-md">
				<Flex className="flex-col m-3 gap-1 p-32">
					<Alert className="rounded-sm border-l-4 border-[#319440] bg-[#2ec946]/10 font-medium text-[#375e3d]">
						<Typography className="m-2">
							Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ sớm liên hệ lại
							với bạn để xác nhận đơn hàng
						</Typography>
					</Alert>
				</Flex>
			</CardBody>
		</Card>
	);
};
export default CartPage4;
