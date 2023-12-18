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
			id: 0,
			path: '/',
			component: <HomePage products={props.products} />,
		},
		{
			id: 1,
			path: '/Home',
			component: <HomePage products={props.products} />,
		},
		{
			id: 2,
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
			{publicRoutes.map(({ id, path, component }) => (
				<Route
					caseSensitive={true}
					key={id}
					path={path}
					element={component}
				/>
			))}
		</Routes>
	);
};

export default MainPages;
