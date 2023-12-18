import { Flex } from '@chakra-ui/react';
import { ProductProps } from 'components/Products/ProductCard';
import ProductContainer from 'components/Products/ProductContainer';

type HomePageProps = {
	products: ProductProps[];
};

const HomePage = (props: HomePageProps) => {
	return (
		<Flex className="flex-col items-center gap-8">
			<ProductContainer
				products={props.products}
				title="Sản phẩm bán chạy"
			></ProductContainer>
		</Flex>
	);
};

export default HomePage;
