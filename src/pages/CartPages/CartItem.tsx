import { Flex, Spacer, ButtonGroup, Button, Image } from '@chakra-ui/react';
import { CardBody, Typography } from '@material-tailwind/react';
import { Input } from '@mui/material';
import { ProductProps } from 'components/Products/ProductCard';

const CartItem = (props: ProductProps) => {
	return (
		<CardBody className="justify-center m-2">
			<Flex className="flex-row mt-3 mb-3">
				<Flex className="flex-col items-center">
					<Image src={props.imageUrl} className="w-16 h-16"></Image>
				</Flex>
				<Flex className="mt-0 m-3">{props.name}</Flex>
				<Spacer />
				<Flex className="flex-col justify-center">
					<Typography className="text-red-500">
						{props.basePrice}đ
					</Typography>
					<ButtonGroup>
						<Button className="rounded-none">+</Button>
						<Input placeholder="quantity"></Input>
						<Button className="rounded-none">-</Button>
					</ButtonGroup>
				</Flex>
			</Flex>
		</CardBody>
	);
};
export default CartItem;
