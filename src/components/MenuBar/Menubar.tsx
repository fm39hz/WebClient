import { Flex } from '@chakra-ui/react';
import MenuIcon from './Items/RoutingButton/MenuIcon';
import CategoryIcon from './Items/RoutingButton/CategoryIcon';
import SearchBar from './Items/SearchBar/SearchBar';
import SignInIcon from './Items/SignInButton/SignInIcon';
import CartIcon from './Items/RoutingButton/CartIcon';
import SignedInIcon from './Items/SignInButton/SignedInIcon';

type MenuBarProps = {
	isSignedIn: boolean;
	setSignIn: CallableFunction;
};

const MenuBar = (props: MenuBarProps) => {
	return (
		<Flex className="bg-[#ff3e3e] items-center justify-center gap-x-2">
			<MenuIcon />
			<CategoryIcon />
			<SearchBar />
			<CartIcon isSignedIn={props.isSignedIn} />
			{props.isSignedIn ? (
				<SignedInIcon setIsSignedIn={props.setSignIn} />
			) : (
				<SignInIcon />
			)}
		</Flex>
	);
};
export default MenuBar;
