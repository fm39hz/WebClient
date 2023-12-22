import { Text } from '@chakra-ui/react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { Badge } from '@material-tailwind/react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { CartProps } from 'Types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetItem } from 'utils/StorageUtils';

type CartIconProps = {
	isSignedIn: boolean;
};

const CartIcon = (props: CartIconProps) => {
	const [inCart, setInCart] = useState(0);
	useEffect(() => {
		const fetchCart = async () => {
			try {
				const _cart = await fetch(
					GetApi(ServiceEndPoint.cart).concat(GetItem('uid')),
				);
				var _inCart = ((await _cart.json()) as CartProps).shoppingItems;
				setInCart(Array.from(_inCart).length);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchCart();
	}, [props.isSignedIn]);
	return (
		<Link
			className="rounded-xl flex flex-row items-center my-0.5 bg-inherit"
			to={props.isSignedIn ? '/Cart' : '/SignIn'}
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
