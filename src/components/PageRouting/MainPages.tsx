import SignInPage from 'pages/SignInPage';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { ProductProps } from 'components/Products/ProductCard';
import { Flex } from '@chakra-ui/react';
import ProfilePage, { UserProps } from 'pages/ProfilePage';
import CartPages, { CartProps } from 'pages/CartPages/CartPage';
import ProductPage from 'pages/ProductPage';

type MainPageProps = {
	setSignIn: Dispatch<SetStateAction<boolean>>;
	isSignedIn: boolean;
	products: ProductProps[];
	user: UserProps;
	cart: CartProps;
};

const MainPages = (props: MainPageProps) => {
	const publicRoutes = [
		{
			path: '/',
			component: <HomePage products={props.products} />,
		},
		{
			path: '/Home',
			component: <HomePage products={props.products} />,
		},
		{
			path: '/Profile',
			component: <ProfilePage {...props.user} />,
		},
		{
			path: '/SignIn',
			component: (
				<SignInPage
					setSignedIn={props.setSignIn}
					isSignedIn={props.isSignedIn}
				/>
			),
		},
		{
			path: '/Cart',
			component: <CartPages {...props.cart} />,
		},
	].concat(
		props.products.map((product) => {
			const productPath = {
				path: '/Product/'.concat(product.id.toString()),
				component: <ProductPage {...product} />,
			};
			return productPath;
		}),
	);
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
