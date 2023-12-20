import { Flex, Spacer, Image } from '@chakra-ui/react';
import { Checkbox, Typography } from '@material-tailwind/react';
import { Input } from '@mui/material';
import { ShoppingItems } from '../../pages/CartPages/CartPage';
import { useEffect, useState } from 'react';
import { GetApi, ServiceEndPoint } from 'Constant';

const CartItem = (props: ShoppingItems) => {
	const [isSelected, setIsSelected] = useState(props.isSelected == 1);
	const [quantity, setQuantity] = useState(props.quantity);
	const [price, setPrice] = useState(props.target.basePrice);
	const BuildOption = (quantity: number, isSelected: number) => {
		return {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				promoteType: props.promoteType,
				productId: props.productId,
				cartId: props.cartId,
				quantity: quantity,
				isSelected: isSelected,
				id: props.id,
			}),
		};
	};
	useEffect(() => {
		const putData = async () => {
			const _stateResponses = await fetch(
				GetApi(ServiceEndPoint.items),
				BuildOption(quantity, isSelected ? 1 : 0),
			);
			const _price = await fetch(
				GetApi(ServiceEndPoint.promotedPrice).concat(
					'/',
					props.id.toString(),
				),
			);
			if (_stateResponses.status == 200) {
				setPrice((await _price.json()) as number);
				return;
			}
			alert(_stateResponses.statusText);
		};
		putData();
	}, [quantity, isSelected]);
	return (
		<Flex className="flex-row my-1 min-w-max h-fit gap-4 border-2 rounded-sm">
			<Checkbox
				className="scale-75 "
				color="red"
				checked={isSelected}
				onChange={() => setIsSelected(!isSelected)}
				crossOrigin="items"
			/>
			<Flex className="items-center">
				<Image src={props.target.imageUrl} className="w-16 h-16" />
			</Flex>
			<Typography className="mt-1">{props.target.name}</Typography>
			<Spacer />
			<Flex className="flex-col justify-end mx-4">
				<Typography className="line-through">
					{(props.target.basePrice * quantity).toLocaleString()}đ
				</Typography>
				<Typography className="text-red-500">
					{price.toLocaleString()}đ
				</Typography>
				<Flex className="flex-row">
					<Spacer />
					<Input
						className="scale-75 w-8 rounded-sm bg-blue-gray-100"
						value={quantity}
						type="number"
						onChange={(target) => {
							const _quantity = Number(target.target.value);
							if (
								_quantity < props.target.inStock &&
								_quantity > 0
							)
								setQuantity(_quantity);
						}}
						placeholder="Số lượng"
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};
export default CartItem;
