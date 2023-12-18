import SignInPage from 'pages/SignInPage';
import HomePage from 'pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { ProductProps } from 'components/Products/ProductCard';

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
	);
};

export default MainPages;
