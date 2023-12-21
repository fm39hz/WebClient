import { Text } from '@chakra-ui/react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Badge } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

type CartIconProps = {
	inCart: number;
};

const CartIcon = (props: CartIconProps) => (
	<Link
		className="rounded-xl flex flex-row items-center my-0.5 bg-inherit"
		to="/Cart"
		// onClick={() => {}}
	>
		<Badge
			className="bg-[#FFC700]"
			content={props.inCart}
			overlap="circular"
			placement="top-end"
		>
			<ShoppingCartIcon className="w-8 h-8 mx-2" />
		</Badge>
		<Text className="mr-2">Giỏ hàng</Text>
	</Link>
);

export default CartIcon;
