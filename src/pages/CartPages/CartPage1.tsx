import { Card, CardBody, Flex } from '@chakra-ui/react';
import { ShoppingItems } from './CartPage';
import CartItem from './CartItem';
import { Typography } from '@material-tailwind/react';
const CartPage1 = (props: ShoppingItems[]) => {
	console.log(props);
	return (
		<Card className="w-50 bg-white rounded-xl">
			<CardBody className="justify-center m-2">
				{props.length == 0 ? (
					<Flex className="w-80 h-52">
						<Typography>
							Không có sản phẩm trong giỏ hàng
						</Typography>
					</Flex>
				) : (
					Object.values(props).map((products) => (
						<Flex className=" w-96">
							<CartItem key={products.id} {...products} />
						</Flex>
					))
				)}
			</CardBody>
		</Card>
	);
};
export default CartPage1;
