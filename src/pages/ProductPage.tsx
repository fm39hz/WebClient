import { Flex } from '@chakra-ui/react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { ProductProps } from 'components/Products/ProductCard';
import ProductPageBody from 'components/Products/ProductPageBody';
import ProductPageHeader from 'components/Products/ProductPageHeader';
import { useState, useEffect } from 'react';

type ProductPageProps = {
	id: number;
};

const ProductPage = (props: ProductPageProps) => {
	const [product, setProduct] = useState({} as ProductProps);
	const [promotedPrice, setPromotedPrice] = useState(0);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const _products = await fetch(
					GetApi(ServiceEndPoint.products).concat(
						'/',
						props.id.toString(),
					),
				);
				const _promotedPrice = await fetch(
					GetApi(ServiceEndPoint.promote).concat('/' + props.id),
				);
				setProduct(await _products.json());
				setPromotedPrice(await _promotedPrice.json());
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchProducts();
	}, []);
	return (
		<Flex className="m-8 flex-col gap-8">
			<ProductPageHeader
				product={product}
				promotedPrice={promotedPrice}
			/>
			<ProductPageBody
				type={product.type}
				specificationId={product.specificationId}
			/>
		</Flex>
	);
};
export default ProductPage;
