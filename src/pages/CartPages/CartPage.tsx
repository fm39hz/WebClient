import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Spacer, Text } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import CartProgressBar from 'components/Cart/CartProgressBar';
import CartPage1 from './CartPage1';
import CartPage2 from './CartPage2';
import CartPage3 from './CartPage3';
import CartPage4 from './CartPage4';
import { GetApi, ServiceEndPoint } from 'Constant';
import { CartProps } from 'Types';
import { GetItem } from 'utils/StorageUtils';

const CartPages = () => {
	const [cart, setCart] = useState({} as CartProps);
	const [cartPrice, setCartPrice] = useState(0);
	const [itemChanged, setitemChanged] = useState(false);
	useEffect(() => {
		const fetchCart = async () => {
			try {
				const _cart = await fetch(
					GetApi(ServiceEndPoint.cart).concat(GetItem('uid')),
				);
				const _cartPrice = await fetch(
					GetApi(ServiceEndPoint.cartPrice).concat(GetItem('uid')),
				);
				setCart(await _cart.json());
				setCartPrice(await _cartPrice.json());
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchCart();
		setitemChanged(false);
	}, [itemChanged]);
	const Steps = [
		<CartPage1 itemChanged={setitemChanged} />,
		<CartPage2 />,
		<CartPage3 />,
		<CartPage4 />,
	];
	const navigate = useNavigate();
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
				<Flex className="flex-col">
					<Flex className="flex-row text-xl my-8 gap-4 border rounded-md justify-end">
						<Text>Tổng tiền:</Text>
						<Text>{cartPrice.toLocaleString()}₫</Text>
					</Flex>
					<Flex className="flex-row">
						<Button
							className="flex bg-black text-white rounded-xl"
							onClick={() => {
								if (step > 0) {
									setStep(step - 1);
								} else {
									navigate('/Home');
								}
							}}
						>
							<Flex className="flex-row m-3 items-center gap-2">
								<ArrowLeftIcon className="h-4 w-4" />
								Quay lại
							</Flex>
						</Button>
						<Spacer />
						<Button
							className="flex items-center gap-2"
							onClick={() => {
								if (step < 3) setStep(step + 1);
							}}
						>
							Đặt hàng ngay
							<ArrowRightIcon className="h-4 w-4" />
						</Button>
					</Flex>
				</Flex>
			</CardFooter>
		</Card>
	);
};
export default CartPages;
