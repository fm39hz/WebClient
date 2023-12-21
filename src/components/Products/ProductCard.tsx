import { Flex, Image, Text } from '@chakra-ui/react';
import { Card, Typography } from '@material-tailwind/react';
import { Divider } from '@mui/material';
import { GetApi, ServiceEndPoint } from 'Constant';
import { ProductProps } from 'Types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type ProductCartProps = {
	id: number;
};

const ProductCard = (props: ProductCartProps) => {
	const [promotedPrice, setPromotedPrice] = useState(0);
	const [product, setProduct] = useState({} as ProductProps);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const _promotedPrice = await fetch(
					GetApi(ServiceEndPoint.promote).concat(props.id.toString()),
				);
				const _product = await fetch(
					GetApi(ServiceEndPoint.products).concat(
						props.id.toString(),
					),
				);
				setProduct(await _product.json());
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
					src={product.imageUrl}
					alt={product.name}
				/>
				<Divider className="w-full" />
				<Flex className="flex-col mx-2 w-full">
					<Text className="text-xl h-12 text-black font-semibold mx-1">
						{product.name}
					</Text>
					<Typography className="mx-1 font-semibold text-gray-400 line-through">
						{Number(product.basePrice).toLocaleString()}₫
					</Typography>
					<Typography className="mx-1 text-red-500 font-semibold">
						{promotedPrice.toLocaleString()}₫
					</Typography>
				</Flex>
				<Flex className="flex-row items-left bg-gray-100 rounded-b-md w-full p-2 mt-1 justify-between gap-4">
					<Flex className="flex-col">
						<Typography className="text-orange-600">
							{product.rating}★
						</Typography>
						<Typography className="text-gray-600">
							({product.reviewCount} đánh giá)
						</Typography>
					</Flex>
					<Flex className="flex-col justify-end">
						<Typography className="text-gray-600 items-baseline">
							{product.inStock > 0
								? product.inStock + ' sản phẩm'
								: 'Liên hệ'}
						</Typography>
					</Flex>
				</Flex>
			</Card>
		</Link>
	);
};
export default ProductCard;
