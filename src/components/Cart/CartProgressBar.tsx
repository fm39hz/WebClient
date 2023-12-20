import { Flex } from '@chakra-ui/react';
import {
	CheckBadgeIcon,
	DocumentCheckIcon,
	IdentificationIcon,
	ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import { Typography } from '@material-tailwind/react';
import { useEffect } from 'react';

type CartProgress = {
	step: number;
};

const CartProgressBar = (props: CartProgress) => {
	const checkOutStep = (step: number, current: number) =>
		step >= current ? 'red' : 'black';
	useEffect(() => {}, [props.step]);
	return (
		<Flex className="flex-riw mx-4 bg-white p-4 rounded-md w-fit gap-10">
			<Flex className="flex-col items-center">
				<ShoppingBagIcon
					className="w-7 h-7"
					color={checkOutStep(props.step, 0)}
				/>
				<Typography className="text-center">Giỏ hàng</Typography>
			</Flex>
			<Flex className="flex-col items-center">
				<IdentificationIcon
					className="w-7 h-7"
					color={checkOutStep(props.step, 1)}
				/>
				<Typography className="text-center">
					Thông tin đặt hàng
				</Typography>
			</Flex>
			<Flex className="flex-col items-center">
				<CheckBadgeIcon
					className="w-7 h-7"
					color={checkOutStep(props.step, 2)}
				/>
				<Typography className="text-center">Thanh toán</Typography>
			</Flex>
			<Flex className="flex-col items-center">
				<DocumentCheckIcon
					className="w-7 h-7"
					color={checkOutStep(props.step, 3)}
				/>
				<Typography className="text-center">Hoàn tất</Typography>
			</Flex>
		</Flex>
	);
};
export default CartProgressBar;
