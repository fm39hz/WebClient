import { Flex, Image, Text } from '@chakra-ui/react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export type ProductProps = {
	name: string;
	specificationId: number;
	description: string;
	imageUrl: string;
	basePrice: number;
	inStock: number;
	manufacturer: string;
	reviewCount: number;
	rating: number;
	id: number;
};

const ProductCard = (props: ProductProps) => {
	const [promotedPrice, setPromotedPrice] = useState(0);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const _promotedPrice = await fetch(
					GetApi(ServiceEndPoint.promote).concat('/' + props.id),
				);
				setPromotedPrice(await _promotedPrice.json());
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);
	return (
		<Link
			className="flex flex-col bg-white w-60 h-80 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out border"
			to={'/Products/'.concat(props.name)}
		>
			<Image
				className="scale-75 object-cover overflow-hidden"
				src={props.imageUrl}
				alt={props.name}
			/>
			<Flex className="flex-col p-1">
				<Text className="text-xl text-black font-semibold mb-2">
					{props.name}
				</Text>
				<Flex className="flex-row mb-1">
					<Text className="ml-1 font-semibold text-gray-400 line-through">
						{props.basePrice} đ
					</Text>
				</Flex>
				<Flex className="flex-row mb-1">
					<Text className="ml-1 text-red-500 font-semibold">
						{promotedPrice} đ
					</Text>
				</Flex>
			</Flex>
			<Flex className="flex-col items-left bg-gray-100 p-2 mt-auto">
				<Text className="text-orange-600">{props.rating}★</Text>
				<Text className="text-gray-600">
					({props.reviewCount} đánh giá)
				</Text>
			</Flex>
		</Link>
	);
};
export default ProductCard;
