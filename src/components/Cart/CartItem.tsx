import { Flex, Spacer, Image } from '@chakra-ui/react';
import {
	Button,
	Checkbox,
	Popover,
	PopoverContent,
	PopoverHandler,
	Typography,
} from '@material-tailwind/react';
import { Input } from '@mui/material';
import { useEffect, useState } from 'react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { ShoppingItems } from 'Types';
import { TrashIcon } from '@heroicons/react/24/solid';

type CartItemProps = {
	product: ShoppingItems;
	itemChanged: CallableFunction;
};

const CartItem = (props: CartItemProps) => {
	const [isSelected, setIsSelected] = useState(props.product.isSelected == 1);
	const [quantity, setQuantity] = useState(props.product.quantity);
	const [price, setPrice] = useState(props.product.target.basePrice);
	const [PopUpOpen, setPopUpOpen] = useState(false);
	const DeleteOption = () => {
		return {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		};
	};
	const PutOption = (quantity: number, isSelected: number) => {
		return {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				promoteType: props.product.promoteType,
				productId: props.product.productId,
				cartId: props.product.cartId,
				quantity: quantity,
				isSelected: isSelected,
				id: props.product.id,
			}),
		};
	};
	useEffect(() => {
		const putData = async () => {
			const _stateResponses = await fetch(
				GetApi(ServiceEndPoint.items),
				PutOption(quantity, isSelected ? 1 : 0),
			);
			const _price = await fetch(
				GetApi(ServiceEndPoint.promotedPrice).concat(
					props.product.id.toString(),
				),
			);

			if (_stateResponses.status == 200) {
				setPrice((await _price.json()) as number);
				return;
			}
			alert(_stateResponses.statusText);
		};
		putData();
		props.itemChanged(true);
	}, [quantity, isSelected]);
	return (
		<Flex className="flex-row my-1 h-fit gap-4 border-2 rounded-sm">
			<Checkbox
				className="scale-75 "
				color="red"
				checked={isSelected}
				onChange={() => setIsSelected(!isSelected)}
				crossOrigin="items"
			/>
			<Flex className="items-center">
				<Image
					src={props.product.target.imageUrl}
					className="w-16 h-16"
				/>
			</Flex>
			<Typography className="mt-1">
				{props.product.target.name}
			</Typography>
			<Spacer className="px-20" />
			<Flex className="flex-col justify-end mx-4 w-28 text-end ">
				<Typography className="line-through">
					{(
						props.product.target.basePrice * quantity
					).toLocaleString()}
					₫
				</Typography>
				<Typography className="text-red-500">
					{price.toLocaleString()}₫
				</Typography>
				<Flex className="flex-row">
					<Spacer />
					<Input
						className="scale-75 w-12 rounded-sm bg-[#e2e2e2]"
						value={quantity}
						type="number"
						onChange={(target) => {
							const _quantity = Number(target.target.value);
							if (
								_quantity <= props.product.target.inStock &&
								_quantity > 0
							)
								setQuantity(_quantity);
						}}
						placeholder="Số lượng"
					/>
				</Flex>
			</Flex>
			<Popover offset={-3} open={PopUpOpen} handler={setPopUpOpen}>
				<PopoverHandler>
					<Button
						className="bg-[#7c1c1c] text-white"
						onClick={() => {
							setPopUpOpen(true);
						}}
					>
						<TrashIcon className="w-6 h-6" />
					</Button>
				</PopoverHandler>
				<PopoverContent className="flex flex-col">
					Xóa sản phẩm khỏi giỏ hàng?
					<Flex className="gap-4 mt-4">
						<Button
							onClick={async () => {
								const response = await fetch(
									GetApi(ServiceEndPoint.items).concat(
										props.product.id.toString(),
									),
									DeleteOption(),
								);
								if (response.status != 200) {
									alert(response.statusText);
								}
								setPopUpOpen(false);
								window.location.reload();
							}}
						>
							Có
						</Button>
						<Spacer />
						<Button onClick={() => setPopUpOpen(false)}>
							Không
						</Button>
					</Flex>
				</PopoverContent>
			</Popover>
		</Flex>
	);
};
export default CartItem;
