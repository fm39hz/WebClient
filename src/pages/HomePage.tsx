import { Flex } from '@chakra-ui/react';
import ProductContainer from 'components/Products/ProductContainer';

const HomePage = () => {
	return (
		<Flex className="flex-col items-center gap-8">
			<ProductContainer title="Sản phẩm bán chạy"></ProductContainer>
		</Flex>
	);
};

export default HomePage;
