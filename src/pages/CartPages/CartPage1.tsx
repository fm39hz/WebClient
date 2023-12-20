import { Card, CardBody, Flex } from '@chakra-ui/react';
import { ShoppingItems } from './CartPage';
import CartItem from './CartItem';
import { Typography } from '@material-tailwind/react';
const CartPage1 = (props: ShoppingItems[]) => {
	console.log(props);
	return (
		<Card className="w-50 bg-white rounded-xl">
			<CardBody className="justify-center m-2">
				<Flex className=" h-52 gap-2 w-fit">
					{props.length == 0 ? (
						<Typography>
							Không có sản phẩm trong giỏ hàng
						</Typography>
					) : (
						Object.values(props).map((products) => (
							<CartItem key={products.id} {...products} />
						))
					)}
				</Flex>
			</CardBody>
		</Card>
	);
};
export default CartPage1;
