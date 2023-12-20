import { Flex, Spacer, ButtonGroup, Button, Image } from '@chakra-ui/react';
import { CardBody, Typography } from '@material-tailwind/react';
import { Input } from '@mui/material';
import { ShoppingItems } from './CartPage';

const CartItem = (props: ShoppingItems) => {
	return (
		<CardBody className="justify-between m-2 gap-8">
			<Flex className="flex-row mt-3 mb-3">
				<Flex className="flex-row items-start">
					<Image
						src={props.target.imageUrl}
						className="w-16 h-16"
					></Image>
					<Flex className="mt-0 m-3">{props.target.name}</Flex>
				</Flex>
				<Spacer />
				<Flex className="flex-col justify-end">
					<Typography className="text-red-500">
						{props.target.basePrice}đ
					</Typography>
					<ButtonGroup>
						<Button className="rounded-none">-</Button>
						<Input
							className="w-6"
							defaultValue={props.quantity}
							placeholder="Số lượng"
						></Input>
						<Button className="rounded-none">+</Button>
					</ButtonGroup>
				</Flex>
			</Flex>
		</CardBody>
	);
};
export default CartItem;
