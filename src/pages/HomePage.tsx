import { Flex } from '@chakra-ui/react';
import { ProductProps } from 'components/Products/ProductCard';
import ProductContainer from 'components/Products/ProductContainer';

type HomePageProps = {
	products: ProductProps[];
};

const HomePage = (props: HomePageProps) => {
	return (
		<Flex className="flex-col bg-brown-100 items-center gap-8 overflow-y-auto">
			<ProductContainer
				products={props.products}
				title="Sản phẩm bán chạy"
			></ProductContainer>
		</Flex>
	);
};

export default HomePage;
