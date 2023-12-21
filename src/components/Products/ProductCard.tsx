import { Flex, Image } from '@chakra-ui/react';
import { Card, Typography } from '@material-tailwind/react';
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
		<Link to={'/Product/'.concat(props.id.toString())}>
			<Card className="flex flex-col bg-[#ececec] w-60 h-92 rounded-md shadow-lg hover:shadow-lg transition duration-300 ease-in-out border items-center">
				<Image
					className="object-cover overflow-hidden mb-1"
					src={props.imageUrl}
					alt={props.name}
				/>
				<Divider className="w-full" />
				<Flex className="flex-col mx-2 w-full">
					<Typography className="text-xl h-12 text-black font-semibold mx-1">
						{props.name}
					</Typography>
					<Typography className="mx-1 font-semibold text-gray-400 line-through">
						{Number(props.basePrice).toLocaleString()}₫
					</Typography>
					<Typography className="mx-1 text-red-500 font-semibold">
						{promotedPrice.toLocaleString()}₫
					</Typography>
				</Flex>
				<Flex className="flex-row items-left bg-gray-100 rounded-b-md w-full p-2 mt-1 justify-between gap-4">
					<Flex className="flex-col">
						<Typography className="text-orange-600">
							{props.rating}★
						</Typography>
						<Typography className="text-gray-600">
							({props.reviewCount} đánh giá)
						</Typography>
					</Flex>
					<Flex className="flex-col justify-end">
						<Typography className="text-gray-600 items-baseline">
							{props.inStock > 0
								? props.inStock + ' sản phẩm'
								: 'Liên hệ'}
						</Typography>
					</Flex>
				</Flex>
			</Card>
		</Link>
	);
};
export default ProductCard;
