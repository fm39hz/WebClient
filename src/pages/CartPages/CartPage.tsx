import { Flex, Spacer } from '@chakra-ui/react';
import { ProductProps } from 'components/Products/ProductCard';
import CartPage2 from './CartPage2';
import CartPage3 from './CartPage3';
import CartPage4 from './CartPage4';
import CartProgressBar from 'components/Cart/CartProgressBar';
import { useState } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from '@material-tailwind/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import CartPage1 from './CartPage1';
import { Link } from 'react-router-dom';

export type ShoppingItems = {
	appliedPromoteStrategy: {
		details: string;
	};
	promoteType: string;
	target: ProductProps;
	productId: number;
	cartId: number;
	quantity: number;
	isSelected: number;
	id: number;
};

export type CartProps = {
	userUid: string;
	shoppingItems: ShoppingItems[];
	id: number;
};
const CartPages = (props: CartProps) => {
	const Steps = [
		<CartPage1 {...props.shoppingItems} />,
		<CartPage2 />,
		<CartPage3 />,
		<CartPage4 />,
	];
	const [step, setStep] = useState(0);
	return (
		<Card className="flex-col m-8 bg-white p-4 rounded-md min-w-full">
			<CardHeader className="items-center gap-8 m-6 justify-center">
				<CartProgressBar step={step} />
			</CardHeader>
			<CardBody className="items-center gap-8 m-6 justify-center">
				<Flex className="flex-col items-center gap-8 m-6 min-w-full">
					{Steps[step]}
				</Flex>
			</CardBody>
			<CardFooter className="pt-0">
				<Flex className="flex-row">
					<Link
						className="flex  bg-black text-white rounded-xl"
						to={'/Home'}
						onClick={() => setStep(0)}
					>
						<Flex className="flex-row m-3 items-center gap-2">
							Về trang chủ <ArrowLeftIcon className="h-4 w-4" />
						</Flex>
					</Link>
					<Spacer />
					<Button
						className="flex items-center gap-2"
						onClick={() => setStep(step + 1)}
					>
						Đặt hàng ngay
						<ArrowRightIcon className="h-4 w-4" />
					</Button>
				</Flex>
			</CardFooter>
		</Card>
	);
};
export default CartPages;
