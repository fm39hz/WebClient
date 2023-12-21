import { Flex, Image, Spacer, Text } from '@chakra-ui/react';
import { Button, Card, CardBody } from '@material-tailwind/react';
import { ProductProps } from 'Types';

type ProductPageHeaderProps = {
	product: ProductProps;
	promotedPrice: number;
};

const ProductPageHeader = (props: ProductPageHeaderProps) => {
	return (
		<Card>
			<CardBody className="flex flex-row h-fit w-full gap-2">
				<Image
					className="w-64 h-64 border-separate rounded-md shadow-sm"
					src={props.product.imageUrl}
				/>
				<Flex className="flex-col bg-blue-gray-500">
					<Flex className=" flex-col text-left ml-2 pr-64 gap-2">
						<Text className=" bg-blue-gray-300 text-2xl font-bold">
							{props.product.name}
						</Text>
						<Text className=" bg-brown-300 text-md font-semibold">
							{props.product.rating}★
						</Text>
						<Flex className="flex-row gap-4 text-xl font-semibold ">
							<Text className=" bg-brown-300">
								{props.promotedPrice}₫
							</Text>
							<Spacer />
							<Text className=" line-through">
								{props.product.basePrice}₫
							</Text>
							<Text></Text>
						</Flex>
					</Flex>
					<Button className="m-6 px-16 bg-[#ff3e3e] w-fit">
						Thêm vào giỏ hàng
					</Button>
				</Flex>
			</CardBody>
		</Card>
	);
};
export default ProductPageHeader;
