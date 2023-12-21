import { Flex, Spacer } from '@chakra-ui/react';
import MenuBar from '../components/MenuBar/Menubar';
import MainPages from '../components/PageRouting/MainPages';
import { useEffect, useState } from 'react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { ProductProps } from 'components/Products/ProductCard';
import { UserProps } from './ProfilePage';
import { CartProps } from './CartPages/CartPage';
import Sidebar from 'components/Sidebar/Sidebar';
import Footer from 'components/Footer/Footer';

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([{} as ProductProps]);
	const [cart, setCart] = useState({} as CartProps);
	const [user, setUser] = useState({} as UserProps);
	const [isSingedIn, setIsSingedIn] = useState(false);
	const fetchData = async () => {
		try {
			const _products = await fetch(GetApi(ServiceEndPoint.products)!);
			const _cart = await fetch(
				GetApi(ServiceEndPoint.cart).concat(
					'/',
					localStorage.getItem('uid')!,
				),
			);
			const _user = await fetch(
				GetApi(ServiceEndPoint.users).concat(
					'/',
					localStorage.getItem('uid')!,
				),
			);
			const _isSignedIn = await fetch(
				GetApi(ServiceEndPoint.isLoggedIn).concat(
					'/',
					localStorage.getItem('uid')!,
				),
			);
			setProducts(await _products.json());
			setCart(await _cart.json());
			setUser(await _user.json());
			setIsSingedIn(await _isSignedIn.json());
			setIsLoading(false);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
	useEffect(() => {
		if (!isSingedIn) {
			setCart({} as CartProps);
			setUser({} as UserProps);
		} else {
			fetchData();
		}
	}, [isSingedIn]);
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<Flex className="flex-col bg-[#e2e2e2] text-black min-h-screen min-w-full">
			<MenuBar
				inCart={
					isLoading || !isSingedIn ? 0 : cart.shoppingItems.length
				}
				isSignedIn={isLoading ? false : isSingedIn}
				setSignIn={setIsSingedIn}
				products={isLoading ? ({} as ProductProps[]) : products}
			/>
			<Flex>
				<Sidebar />
				<MainPages
					cart={cart}
					products={products}
					user={user}
					isSignedIn={isSingedIn}
					setSignIn={setIsSingedIn}
				/>
			</Flex>
			<Spacer />
			<Footer />
		</Flex>
	);
};

export default App;
