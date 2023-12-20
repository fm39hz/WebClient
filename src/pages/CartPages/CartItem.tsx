import { Flex, Spacer, ButtonGroup, Button, Image } from '@chakra-ui/react';
import { Typography } from '@material-tailwind/react';
import { Checkbox, Input } from '@mui/material';
import { ShoppingItems } from './CartPage';
import { useEffect, useState } from 'react';

const CartItem = (props: ShoppingItems) => {
	const [isSelected, setIsSelected] = useState(props.isSelected == 1);
	const [quantity, setQuantity] = useState(props.quantity);
	useEffect(() => {}, [quantity, isSelected]);
	return (
		<Flex className="flex-row  m-1 w-fit h-fit gap-4">
			<Checkbox
				className="scale-75"
				checked={isSelected}
				onChange={() => setIsSelected(!isSelected)}
			/>
			<Image src={props.target.imageUrl} className="w-16 h-16"></Image>
			<Typography className="mt-1">{props.target.name}</Typography>
			<Spacer />
			<Flex className="flex-col justify-end">
				<Typography className="text-red-500">
					{props.target.basePrice}đ
				</Typography>
				<ButtonGroup className="bg-blue-100 justify-center">
					<Button
						className="rounded-none"
						onClick={() => setQuantity(quantity - 1)}
					>
						-
					</Button>
					<Input
						className="w-6 text-center"
						value={quantity}
						placeholder="Số lượng"
					/>
					<Button
						className="rounded-none"
						onClick={() => setQuantity(quantity + 1)}
					>
						+
					</Button>
				</ButtonGroup>
			</Flex>
		</Flex>
	);
};
export default CartItem;
