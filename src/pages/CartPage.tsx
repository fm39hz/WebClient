import { Flex } from '@chakra-ui/react';
import { ProductProps } from 'components/Products/ProductCard';

type CartProps = {
	userUid: string;
	shoppingItems: [
		{
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
		},
	];
	id: number;
};

const CartPage = () => {
	return <Flex></Flex>;
};
export default CartPage;
