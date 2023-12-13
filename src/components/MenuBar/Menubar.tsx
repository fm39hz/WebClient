import { Flex } from '@chakra-ui/react'
import MenuIcon from './Items/MenuIcon'
import CategoryIcon from './Items/CategoryIcon'
import SearchBar from './Items/SearchBar'
import LogInButton from './Items/LogInButton'
import CartButton from './Items/CartButton'

const MenuBar = () => (
	<Flex className="flex-row m-2 bg-lime-800 justify-center gap-x-2">
		<MenuIcon />
		<CategoryIcon />
		<SearchBar />
		<CartButton />
		<LogInButton />
	</Flex>
)
export default MenuBar
