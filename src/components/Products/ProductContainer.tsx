import { Flex, Text } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import { GetApi, ServiceEndPoint } from 'Constant';
import { useState, useEffect } from 'react';
import { ProductProps } from 'Types';

type ProductContainerProps = {
	title: string;
};

const ProductContainer = (props: ProductContainerProps) => {
	const [products, setProducts] = useState({} as ProductProps[]);
	const fetchData = async () => {
		try {
			const _products = await fetch(GetApi(ServiceEndPoint.products)!);
			setProducts(await _products.json());
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<Flex className="flex-col m-8 bg-white p-4 rounded-md w-fit">
			<Text className="text-2xl text-black font-bold mb-1 ml-6">
				{props.title}
			</Text>
			<Flex className="flex-wrap gap-4 justify-start m-4">
				{Object.values(products).map((product) => (
					<ProductCard key={product.id} id={product.id} />
				))}
			</Flex>
		</Flex>
	);
};
export default ProductContainer;
