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

const isChecked: boolean[] = [];

const CartProgressBar = (props: CartProgress) => {
	const checkOutStep = (step: number) => (isChecked[step] ? 'red' : '');
	useEffect(() => {
		isChecked[props.step] = true;
	}, [props.step]);
	return (
		<Flex className="flex-riw mx-4 bg-white p-4 rounded-md w-fit gap-10">
			<Flex className="flex-col items-center">
				<ShoppingBagIcon className="w-7 h-7" color={checkOutStep(0)} />
				<Typography className="text-center">Giỏ hàng</Typography>
			</Flex>
			<Flex className="flex-col items-center">
				<IdentificationIcon
					className="w-7 h-7"
					color={checkOutStep(1)}
				/>
				<Typography className="text-center">
					Thông tin đặt hàng
				</Typography>
			</Flex>
			<Flex className="flex-col items-center">
				<CheckBadgeIcon className="w-7 h-7" color={checkOutStep(2)} />
				<Typography className="text-center">Thanh toán</Typography>
			</Flex>
			<Flex className="flex-col items-center">
				<DocumentCheckIcon
					className="w-7 h-7"
					color={checkOutStep(3)}
				/>
				<Typography className="text-center">Hoàn tất</Typography>
			</Flex>
		</Flex>
	);
};
export default CartProgressBar;
