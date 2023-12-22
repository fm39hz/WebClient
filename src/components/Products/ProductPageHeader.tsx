import { Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { Button, Card, CardBody, Typography } from '@material-tailwind/react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { CartProps, ProductProps, PromoteDetailsProps } from 'Types';
import { useState, useEffect } from 'react';
import { GetItem } from 'utils/StorageUtils';

type ProductPageHeaderProps = {
	product: ProductProps;
	promotedPrice: number;
};

const ProductPageHeader = (props: ProductPageHeaderProps) => {
	const [cart, setCart] = useState({} as CartProps);
	const [promoteDetails, setPromoteDetails] = useState(
		{} as PromoteDetailsProps,
	);
	const BuildOption = () => {
		return {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				productId: props.product.id,
				cartId: cart.id,
				quantity: 1,
				isSelected: 1,
			}),
		};
	};
	useEffect(() => {
		const fetchData = async () => {
			const _specification = await fetch(
				GetApi(ServiceEndPoint.promoteDetails).concat(
					props.product.id.toString(),
				),
			);
			const _cart = await fetch(
				GetApi(ServiceEndPoint.cart).concat(GetItem('uid')),
			);
			setCart(await _cart.json());
			setPromoteDetails(await _specification.json());
		};
		if (props.product.id !== undefined) {
			fetchData();
		}
	}, [props]);
	return (
		<Card>
			<CardBody className="flex flex-col h-fit w-full">
				<Flex className="flex-row gap-4">
					<Image
						className="w-72 h-72 border-separate rounded-md shadow-sm"
						src={props.product.imageUrl}
					/>
					<Flex className="flex-col">
						<Flex className=" flex-col text-left ml-2 pr-64 gap-2">
							<Text className=" text-2xl font-bold">
								{props.product.name}
							</Text>
							<Text className="  text-md font-semibold">
								{props.product.rating}★
							</Text>
							<Flex className="flex-row gap-2 font-semibold ">
								<Text className="text-[#ff3e3e] text-3xl">
									{props.promotedPrice}₫
								</Text>
								<Spacer />
								<Text className="line-through text-xl">
									{props.product.basePrice}₫
								</Text>
								<Flex className="ml-4 items-center px-4 text-xs text-[#ff3e3e] border rounded-lg border-[#ff3e3e]">
									{promoteDetails.shortHand}
								</Flex>
							</Flex>
						</Flex>
						<Button
							className="m-6 px-16 bg-[#ff3e3e] w-fit"
							onClick={async () => {
								const response = await fetch(
									GetApi(ServiceEndPoint.items),
									BuildOption(),
								);
								if (response.status == 200) {
									return;
								}
								if (response.status == 201) {
									window.location.reload();
								}
							}}
						>
							Thêm vào giỏ hàng
						</Button>
						<Typography>
							Thông tin chung: {props.product.description}
						</Typography>
						<Text>Hãng sản xuất: {props.product.manufacturer}</Text>
						<Typography>Bảo hành: 36 tháng</Typography>
					</Flex>
				</Flex>
			</CardBody>
		</Card>
	);
};
export default ProductPageHeader;
