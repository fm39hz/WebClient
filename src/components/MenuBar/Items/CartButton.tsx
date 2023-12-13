import { Text } from '@chakra-ui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Badge, Button } from '@material-tailwind/react'

const CartButton = () => (
	<Button
		className="flex flex-row items-center rounded-xl my-0.5"
		onClick={() => {}}
	>
		<ShoppingCartIcon className="w-8 h-8 m-2" />
		<Badge></Badge>

		<Text className="mr-2">Giỏ hàng</Text>
	</Button>
)

export default CartButton
