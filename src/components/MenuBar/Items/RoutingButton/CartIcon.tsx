import { Text } from '@chakra-ui/react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Badge } from '@material-tailwind/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CartIcon = () => {
	const [inCart, setInCart] = useState(0);
	return (
		<Link
			className="rounded-xl flex flex-row items-center my-0.5 bg-inherit"
			to="/Cart"
		>
			<Badge
				className="bg-[#FFC700]"
				content={inCart}
				overlap="circular"
				placement="top-end"
			>
				<ShoppingCartIcon className="w-8 h-8 mx-2" />
			</Badge>
			<Text className="mr-2">Giỏ hàng</Text>
		</Link>
	);
};

export default CartIcon;
