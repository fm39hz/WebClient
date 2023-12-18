import SignInPage from 'pages/SignInPage';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { ProductProps } from 'components/Products/ProductCard';
import { Flex } from '@chakra-ui/react';
import Footer from 'components/Footer/Footer';

type MainPageProps = {
	setSignIn: Dispatch<SetStateAction<boolean>>;
	isSignedIn: boolean;
	products: ProductProps[];
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
			path: '/SignIn',
			component: (
				<SignInPage
					setSignedIn={props.setSignIn}
					isSignedIn={props.isSignedIn}
				/>
			),
		},
	];
	return (
		<Flex className="flex-col bg-inherit">
			<Routes>
				{publicRoutes.map(({ path, component }) => (
					<Route
						caseSensitive={true}
						key={path}
						path={path}
						element={component}
					/>
				))}
			</Routes>
			<Footer />
		</Flex>
	);
};

export default MainPages;
