import { Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export type ProductProps = {
	name: string;
	specificationId: number;
	description: string;
	imageUrl: string;
	basePrice: number;
	actualPrice: number;
	quantity: number;
	rating: number;
	reviewCount: number;
	manufacturer: string;
	id: number;
};

const ProductCard = (props: ProductProps) => {
	return (
		<Link
			className="flex flex-col bg-white w-60 h-80 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out border"
			to={'/Products/'.concat(props.name)}
		>
			<div className="h-40 overflow-hidden">
				<Image
					className="w-full h-full object-cover"
					src="https://via.placeholder.com/214x155"
					alt={props.name}
				/>
			</div>
			<div className="flex flex-col p-4">
				<Text className="text-xl text-black font-semibold mb-2">{props.name}CPU i9900k</Text>
				<Flex className="flex-row mb-2">
					<Text className="ml-1 font-semibold">
						<s className="text-gray-400">{props.basePrice} đ</s>
					</Text>
				</Flex>
				<Flex className="flex-row mb-4">
					<Text className="ml-1 text-red-500 font-semibold">
						{props.actualPrice} đ
					</Text>
				</Flex>
			</div>
			<div className="flex items-center bg-gray-100 p-5 mt-auto">
				<Text className="text-orange-600">{props.rating}★</Text>
				<Text className="text-gray-600"> ({props.reviewCount} đánh giá)</Text>
			</div>
		</Link>

	);
};
export default ProductCard;
