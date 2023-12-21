import { Card, CardBody, Flex } from '@chakra-ui/react';
import { CartProps, ShoppingItems } from './CartPage';
import CartItem from '../../components/Cart/CartItem';
import { Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { GetApi, ServiceEndPoint } from 'Constant';

const CartPage1 = (props: ShoppingItems[]) => {
	console.log(props);
	const [items, setItems] = useState(props);
	useEffect(() => {
		const fetchData = async () => {
			const _cart = await fetch(
				GetApi(ServiceEndPoint.cart).concat(
					'/',
					localStorage.getItem('uid')!,
				),
			);
			setItems(((await _cart.json()) as CartProps).shoppingItems);
		};
		fetchData();
	}, [props]);
	return (
		<Card className="w-50 bg-white rounded-xl min-w-max w-fit border-spacing-3">
			<CardBody className="justify-center m-2">
				<Flex className="flex-col w-fit h-52 gap-2">
					{Array.from(props).length == 0 ? (
						<Typography>
							Không có sản phẩm trong giỏ hàng
						</Typography>
					) : (
						Array.from(items).map((products) => (
							<CartItem key={products.id} {...products} />
						))
					)}
				</Flex>
			</CardBody>
		</Card>
	);
};
export default CartPage1;
