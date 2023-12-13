import { Flex } from '@chakra-ui/react'
import MenuIcon from './MenuIcon'
import CategoryIcon from './CategoryIcon'
import SearchBar from './SearchBar'
import LogInButton from './LogInButton'

const MenuBar = () => (
	<Flex className="flex-row m-2 bg-red-500 justify-center">
		<MenuIcon />
		<CategoryIcon />
		<SearchBar />
		<LogInButton />
	</Flex>
)
export default MenuBar
