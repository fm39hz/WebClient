import { Flex, Text } from '@chakra-ui/react';
import ProductCard, { ProductProps } from './ProductCard';

type ProductContainerProps = {
	products: ProductProps[];
	title: string;
};

const ProductContainer = (props: ProductContainerProps) => {
	return (
		<Flex className="flex-col mb-8 bg-white p-4 rounded-md">
			<Text className="text-2xl text-black font-bold mb-4">
				{props.title}
			</Text>
			<Flex className="overflow-x-auto space-x-4">
				{props.products.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</Flex>
		</Flex>
	);
};
export default ProductContainer;
