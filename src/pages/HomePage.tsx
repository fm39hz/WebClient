import { Flex, List, Spacer } from '@chakra-ui/react';
import { ProductProps } from 'components/Products/ProductCard';
import ProductContainer from 'components/Products/ProductContainer';

type HomePageProps = {
	products: ProductProps[];
};

const HomePage = (props: HomePageProps) => {
	return (
		<Flex className="flex-col items-center gap-8 overflow-auto">
			<Spacer />
			<List className=" flex flex-col items-center gap-4">
				<ProductContainer
					products={props.products}
					title="Sản phẩm"
				></ProductContainer>
			</List>
		</Flex>
	);
};

export default HomePage;
