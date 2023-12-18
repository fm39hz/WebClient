import { Card, Image } from '@chakra-ui/react';

export type ProductProps = {
	name: string;
	concreateId: number;
	cpu: {};
	vga: {};
	description: string;
	imageUrl: string;
	basePrice: number;
	quantity: number;
	id: number;
};

type ItemProps = {
	imgUrl: string;
};

const ProductCard = (props: ItemProps) => {
	return (
		<Card className=" bg-white w-60 h-64 rounded-sm">
			<Image src={props.imgUrl}></Image>
		</Card>
	);
};
export default ProductCard;
