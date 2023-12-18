import { Flex, List, Spacer } from '@chakra-ui/react';
import ProductCard, { ProductProps } from 'components/Products/ProductCard';

type HomePageProps = {
	products: ProductProps[];
};

const HomePage = (props: HomePageProps) => {
	return (
		<Flex className="flex-col items-center gap-8 overflow-auto">
			<Spacer />
			<List className=" flex flex-col items-center gap-4">
				{props.products.map((item, index) => (
					<List key={index} className="flex flex-row gap-4">
						<ProductCard key={item.id} {...item}></ProductCard>
					</List>
				))}
			</List>
		</Flex>
	);
};

export default HomePage;
