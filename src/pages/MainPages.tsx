import SignInPage from 'pages/SignInPage';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import ProfilePage from 'pages/ProfilePage';
import CartPages from 'pages/CartPages/CartPage';
import { useEffect, useState } from 'react';
import { ProductProps } from 'components/Products/ProductCard';
import ProductPage from './ProductPage';
import { GetApi, ServiceEndPoint } from 'Constant';

type MainPagesProps = {
	setIsSignedIn: CallableFunction;
};

const MainPages = (props: MainPagesProps) => {
	const [products, setProducts] = useState({} as ProductProps[]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const _products = await fetch(GetApi(ServiceEndPoint.products));
				setProducts(await _products.json());
				setIsLoading(false);
			} catch (error) {
				console.error('Error fetching data:', error);
				setIsLoading(false);
			}
		};
		fetchProducts;
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
		Object.values(products).map((product) => {
			const productPath = {
				path: '/Product/'.concat(product.id.toString()),
				component: <ProductPage {...product} />,
			};
			return productPath;
		}),
	);
	if (isLoading) {
		console.log(publicRoutes);
	}
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
