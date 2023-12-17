import { Flex } from '@chakra-ui/react';
import MenuIcon from './Items/MenuIcon';
import CategoryIcon from './Items/CategoryIcon';
import SearchBar from './Items/SearchBar';
import SignInIcon from './Items/SignInIcon';
import CartIcon from './Items/CartIcon';
import UserIcon from './Items/UserIcon';

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
			{props.isSignedIn ? <UserIcon /> : <SignInIcon />}
		</Flex>
	);
};
export default MenuBar;
