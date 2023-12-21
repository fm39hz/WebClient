import { Flex } from '@chakra-ui/react';
import MenuIcon from './Items/RoutingButton/MenuIcon';
import CategoryIcon from './Items/RoutingButton/CategoryIcon';
import SearchBar from './Items/SearchBar/SearchBar';
import SignInIcon from './Items/SignInButton/SignInIcon';
import CartIcon from './Items/RoutingButton/CartIcon';
import SignedInIcon from './Items/SignInButton/SignedInIcon';
import { GetItem } from 'utils/StorageUtils';
import { useEffect, useState } from 'react';

const MenuBar = () => {
	const [Icon, setIcon] = useState(<SignInIcon />);
	useEffect(() => {
		if (Boolean(GetItem('isSignedIn'))) {
			setIcon(<SignedInIcon />);
			console.log('in');
		} else {
			console.log('out');
			setIcon(<SignInIcon />);
		}
	}, [Boolean(GetItem('isSignedIn'))]);
	return (
		<Flex className="bg-[#ff3e3e] items-center justify-center gap-x-2">
			<MenuIcon />
			<CategoryIcon />
			<SearchBar />
			<CartIcon />
			{Boolean(GetItem('isSignedIn')) ? <SignedInIcon /> : <SignInIcon />}
		</Flex>
	);
};
export default MenuBar;
