import { Text } from '@chakra-ui/react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Badge, Button } from '@material-tailwind/react';

const CartIcon = () => (
	<Button
		className="rounded-xl flex flex-row items-center my-0.5 bg-inherit"
		onClick={() => {}}
	>
		<Badge
			className=" bg-[#8e1d2a]"
			content={5}
			overlap="circular"
			placement="top-end"
		>
			<ShoppingCartIcon className="w-8 h-8 mx-2" />
		</Badge>
		<Text className="mr-2">Giỏ hàng</Text>
	</Button>
);

export default CartIcon;
