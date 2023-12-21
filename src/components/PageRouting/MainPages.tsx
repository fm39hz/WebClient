import SignInPage from 'pages/SignInPage';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import ProfilePage from 'pages/ProfilePage';
import CartPages from 'pages/CartPages/CartPage';

const MainPages = () => {
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
			component: <SignInPage />,
		},
		{
			path: '/Cart',
			component: <CartPages />,
		},
	];
	// 	.concat(
	// 	props.products.map((product) => {
	// 		const productPath = {
	// 			path: '/Product/'.concat(product.id.toString()),
	// 			component: <ProductPage {...product} />,
	// 		};
	// 		return productPath;
	// 	}),
	// )
	console.log(publicRoutes);
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
