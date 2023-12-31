import SignInPage from 'pages/SignInPage';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import ProfilePage from 'pages/ProfilePage';
import CartPages from 'pages/CartPages/CartPage';
import { useEffect, useState } from 'react';
import ProductPage from './ProductPage';
import { GetApi, ServiceEndPoint } from 'Constant';
import { ProductProps } from 'Types';

type MainPagesProps = {
	setIsSignedIn: CallableFunction;
};

const MainPages = (props: MainPagesProps) => {
	const [products, setProducts] = useState({} as ProductProps[]);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const _products = await fetch(GetApi(ServiceEndPoint.products));
				setProducts(await _products.json());
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchProducts();
	}, []);
	const publicRoutes = [
		{
			path: '/',
			component: <HomePage />,
		},
		{
			path: '/Home',
			component: <HomePage />,
		},
		{
			path: '/Profile',
			component: <ProfilePage />,
		},
		{
			path: '/SignIn',
			component: <SignInPage setIsSignedIn={props.setIsSignedIn} />,
		},
		{
			path: '/Cart',
			component: <CartPages />,
		},
	].concat(
		Array.from(products).map((product) => ({
			path: '/Product/'.concat(product.id.toString()),
			component: <ProductPage id={product.id} />,
		})),
	);
	return (
		<Flex className="flex-col bg-inherit">
			<Routes>
				{publicRoutes.map(({ path, component }, index) => (
					<Route
						caseSensitive={true}
						key={index}
						path={path}
						element={component}
					/>
				))}
			</Routes>
		</Flex>
	);
};

export default MainPages;
