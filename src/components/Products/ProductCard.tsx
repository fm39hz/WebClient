import { Flex, Image, Text } from '@chakra-ui/react';
import { Card } from '@material-tailwind/react';
import { Divider } from '@mui/material';
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
		<Link to={'/Products/'.concat(props.name)}>
			<Card className="flex flex-col bg-[#ececec] w-60 h-80 rounded-md shadow-lg hover:shadow-lg transition duration-300 ease-in-out border">
				<Image
					className=" scale-90 object-cover overflow-hidden"
					src={props.imageUrl}
					alt={props.name}
				/>
				<Flex className="flex-col ml-4">
					<Divider />
					<Text className="text-xl text-black font-semibold ml-1">
						{props.name}
					</Text>
					<Text className="ml-1 font-semibold text-gray-400 line-through">
						{props.basePrice} đ
					</Text>
					<Text className="ml-1 text-red-500 font-semibold">
						{promotedPrice} đ
					</Text>
				</Flex>
				<Flex className="flex-row items-left bg-gray-100 p-2 mt-auto justify-between">
					<Flex className="flex-col">
						<Text className="text-orange-600">{props.rating}★</Text>
						<Text className="text-gray-600">
							({props.reviewCount} đánh giá)
						</Text>
					</Flex>
					<Flex className="flex-col justify-end">
						<Text className="text-gray-600 items-baseline">
							{props.inStock > 0
								? props.inStock + ' sản phẩm'
								: 'Liên hệ'}
						</Text>
					</Flex>
				</Flex>
			</Card>
		</Link>
	);
};
export default ProductCard;
