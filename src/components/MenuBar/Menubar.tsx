import { Flex } from '@chakra-ui/react';
import MenuIcon from './Items/RoutingButton/MenuIcon';
import CategoryIcon from './Items/RoutingButton/CategoryIcon';
import SearchBar from './Items/SearchBar/SearchBar';
import SignInIcon from './Items/SignInButton/SignInIcon';
import CartIcon from './Items/RoutingButton/CartIcon';
import SignedInIcon from './Items/SignInButton/SignedInIcon';
import { ProductProps } from 'components/Products/ProductCard';

type MenuBarProps = {
	isSignedIn: boolean;
	products: ProductProps[];
};

const MenuBar = (props: MenuBarProps) => {
	return (
		<Flex className="bg-[#612f35] items-center justify-center gap-x-2">
			<MenuIcon />
			<CategoryIcon />
			<SearchBar products={props.products} />
			<CartIcon />
			{props.isSignedIn ? <SignedInIcon /> : <SignInIcon />}
		</Flex>
	);
};
export default MenuBar;
