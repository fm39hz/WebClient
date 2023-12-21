import { Flex, Text } from '@chakra-ui/react';
import ProductCard, { ProductProps } from './ProductCard';

type ProductContainerProps = {
	products: ProductProps[];
	title: string;
};

const ProductContainer = (props: ProductContainerProps) => {
	return (
		<Flex className="flex-col m-8 bg-white p-4 rounded-md w-fit">
			<Text className="text-2xl text-black font-bold mb-1 ml-6">
				{props.title}
			</Text>
			<Flex className="flex-wrap gap-4 justify-start m-4">
				{props.products.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</Flex>
		</Flex>
	);
};
export default ProductContainer;
