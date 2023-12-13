import { Text } from '@chakra-ui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Badge, Button } from '@material-tailwind/react'

const CartButton = () => (
	<Button
		className="rounded-xl flex flex-row items-center my-0.5 bg-inherit"
		onClick={() => {}}
	>
		<Badge
			content={5}
			overlap="circular"
			placement="top-end"
			color="orange"
		>
			<ShoppingCartIcon className="w-8 h-8 mx-2" />
		</Badge>
		<Text className="mr-2">Giỏ hàng</Text>
	</Button>
)

export default CartButton
