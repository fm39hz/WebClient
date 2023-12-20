import { Flex, Image } from '@chakra-ui/react';
import { Card, CardBody } from '@material-tailwind/react';
import { ProductProps } from 'components/Products/ProductCard';

const ProductPage = (props: ProductProps) => {
	return (
		<Flex className="m-8">
			<Card>
				<CardBody className="flex flex-row">
					<Image className="w-32" src={props.imageUrl} />
					{props.name}
				</CardBody>
			</Card>
		</Flex>
	);
};
export default ProductPage;
