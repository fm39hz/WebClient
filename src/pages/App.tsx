import { Flex } from '@chakra-ui/react';
import MenuBar from '../components/MenuBar/Menubar';
import MainPages from '../components/PageRouting/MainPages';
import { useEffect, useState } from 'react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { ProductProps } from 'components/Products/ProductCard';
import { UserProps } from './ProfilePage';

const App = () => {
	const [isSingedIn, setIsSingedIn] = useState(false);
	const [products, setProducts] = useState([{} as ProductProps]);
	const [user, setUser] = useState({} as UserProps);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const _products = await fetch(
					GetApi(ServiceEndPoint.products)!,
				);
				const _user = await fetch(
					GetApi(ServiceEndPoint.users).concat(
						'/' + localStorage.getItem('uid')!,
					),
				);
				const _isSignedIn = await fetch(
					GetApi(ServiceEndPoint.isLoggedIn).concat(
						'/' + localStorage.getItem('uid')!,
					),
				);
				setProducts(await _products.json());
				setUser(await _user.json());
				setIsSingedIn(await _isSignedIn.json());
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);
	return (
		<Flex className="flex-col bg-[#e2e2e2] text-black h-screen w-full">
			<MenuBar
				isSignedIn={isSingedIn}
				setSignIn={setIsSingedIn}
				products={products}
			/>
			<Flex className="flex-row">
				<MainPages
					products={products}
					user={user}
					isSignedIn={isSingedIn}
					setSignIn={setIsSingedIn}
				/>
			</Flex>
		</Flex>
	);
};

export default App;
