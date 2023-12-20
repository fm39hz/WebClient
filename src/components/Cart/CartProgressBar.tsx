import { Flex } from '@chakra-ui/react';
import {
	CheckBadgeIcon,
	DocumentCheckIcon,
	IdentificationIcon,
	ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import { CardHeader, Typography } from '@material-tailwind/react';
import { useEffect } from 'react';

type CartProgress = {
	step: number;
};

const CartProgressBar = (props: CartProgress) => {
	const checkOutStep = (step: number, current: number) =>
		step >= current ? ' text-[#ff3e3e]' : ' text-black';
	useEffect(() => {}, [props.step]);
	return (
		<CardHeader className="flex flex-row mx-2 p-4 rounded-md px-64">
			<Flex className="h-fit w-full gap-10 justify-between mt-5">
				<Flex
					className={'flex-col items-center'.concat(
						checkOutStep(props.step, 0),
					)}
				>
					<ShoppingBagIcon className="w-7 h-7" />
					<Typography className="text-center">Giỏ hàng</Typography>
				</Flex>
				<Flex
					className={'flex-col items-center'.concat(
						checkOutStep(props.step, 1),
					)}
				>
					<IdentificationIcon className="w-7 h-7" />
					<Typography className="text-center">
						Thông tin đặt hàng
					</Typography>
				</Flex>
				<Flex
					className={'flex-col items-center'.concat(
						checkOutStep(props.step, 2),
					)}
				>
					<CheckBadgeIcon className="w-7 h-7" />
					<Typography className="text-center">Thanh toán</Typography>
				</Flex>
				<Flex
					className={'flex-col items-center'.concat(
						checkOutStep(props.step, 3),
					)}
				>
					<DocumentCheckIcon className="w-7 h-7" />
					<Typography className="text-center">Hoàn tất</Typography>
				</Flex>
			</Flex>
		</CardHeader>
	);
};
export default CartProgressBar;
