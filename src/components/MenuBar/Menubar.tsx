import { Flex } from '@chakra-ui/react';
import MenuIcon from './Items/RoutingButton/MenuIcon';
import CategoryIcon from './Items/RoutingButton/CategoryIcon';
import SearchBar from './Items/SearchBar/SearchBar';
import SignInIcon from './Items/SignInButton/SignInIcon';
import CartIcon from './Items/RoutingButton/CartIcon';
import SignedInIcon from './Items/SignInButton/SignedInIcon';
import { GetItem } from 'utils/StorageUtils';

const MenuBar = () => {
	return (
		<Flex className="bg-[#ff3e3e] items-center justify-center gap-x-2">
			<MenuIcon />
			<CategoryIcon />
			<SearchBar />
			<CartIcon />
			{GetItem('uid') === null ? <SignedInIcon /> : <SignInIcon />}
		</Flex>
	);
};
export default MenuBar;
