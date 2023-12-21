import { Flex, Image, Text } from '@chakra-ui/react';
import { Card, CardBody } from '@material-tailwind/react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { ProductProps } from 'components/Products/ProductCard';
import { useState, useEffect } from 'react';

type ProductPageProps = {
	id: number;
};

const ProductPage = (props: ProductPageProps) => {
	const [product, setProduct] = useState({} as ProductProps);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const _products = await fetch(
					GetApi(ServiceEndPoint.products).concat(
						'/',
						props.id.toString(),
					),
				);
				setProduct(await _products.json());
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchProducts();
	}, []);
	return (
		<Flex className="m-8">
			<Card>
				<CardBody className="flex flex-row min-h-screen w-full">
					<Image className="w-64 h-64" src={product.imageUrl} />
					<Text className=" px-64">{product.name}</Text>
				</CardBody>
			</Card>
		</Flex>
	);
};
export default ProductPage;
