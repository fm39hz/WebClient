import { Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export type ProductProps = {
	name: string;
	concreateId: number;
	description: string;
	imageUrl: string;
	basePrice: number;
	quantity: number;
	manufacturer: string;
	id: number;
};

const ProductCard = (props: ProductProps) => {
	return (
		<Link
			className="flex flex-col bg-white w-60 h-64 rounded-xl justify-center text-black text-center"
			to={'/Products/'.concat(props.name)}
		>
			<Image
				className="scale-75 w-40 self-center"
				src={props.imageUrl}
			></Image>
			<Text className="">{props.name}</Text>
			<Text className="">{props.description}</Text>
			<Flex className="flex-row justify-center">
				<Text className="">Giá niêm yết:</Text>
				<Text className=" ml-1 text-[#E30019]">
					{props.basePrice} đ
				</Text>
			</Flex>
		</Link>
	);
};
export default ProductCard;
