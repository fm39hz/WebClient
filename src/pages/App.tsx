import { Flex } from '@chakra-ui/react';
import MenuBar from '../components/MenuBar/Menubar';
import MainPages from '../components/PageRouting/MainPages';
import { useEffect, useState } from 'react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { ProductProps } from 'components/Products/ProductCard';

const App = () => {
	const [isSingedIn, setIsSingedIn] = useState(false);
	const [products, setProducts] = useState([
		{
			name: '',
			specificationId: 0,
			description: '',
			imageUrl: '',
			basePrice: 0,
			quantity: 0,
			manufacturer: '',
			id: 0,
		} as ProductProps,
	]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const _isSignedIn = await fetch(
					GetApi(ServiceEndPoint.isLoggedIn).concat(
						'/' + localStorage.getItem('uid')!,
					),
				);
				const _products = await fetch(
					GetApi(ServiceEndPoint.products)!,
				);
				setProducts(await _products.json());
				const data = await _isSignedIn.json();
				setIsSingedIn(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);
	return (
		<Flex className="flex-col bg-black text-white h-screen w-full">
			<MenuBar isSignedIn={isSingedIn} products={products} />
			<MainPages
				setSignIn={setIsSingedIn}
				isSignedIn={isSingedIn}
				products={products}
			/>
		</Flex>
	);
};

export default App;
