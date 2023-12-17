import { Flex } from '@chakra-ui/react';
import MenuIcon from './Items/RoutingButton/MenuIcon';
import CategoryIcon from './Items/RoutingButton/CategoryIcon';
import SearchBar from './Items/SearchBar/SearchBar';
import SignInIcon from './Items/SignInButton/SignInIcon';
import CartIcon from './Items/RoutingButton/CartIcon';
import SignedInIcon from './Items/SignInButton/SignedInIcon';

type MenuBarProps = {
	isSignedIn: boolean;
};

const MenuBar = (props: MenuBarProps) => {
	return (
		<Flex className="bg-[#E30019] items-center justify-center gap-x-2">
			<MenuIcon />
			<CategoryIcon />
			<SearchBar />
			<CartIcon />
			{props.isSignedIn ? <SignedInIcon /> : <SignInIcon />}
		</Flex>
	);
};
export default MenuBar;
