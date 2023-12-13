import { Flex } from '@chakra-ui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { IconButton } from '@material-tailwind/react'
import { Input } from '@mui/material'

const SearchBar = () => (
	<Flex className="flex-row bg-white my-0.5 rounded-sm text-black items-center">
		<Input className="text-sm m-2 w-96" placeholder="Bạn cần tìm gì?" />
		<IconButton className="bg-inherit text-inherit">
			<MagnifyingGlassIcon className="w-5 h-5 my-3" />
		</IconButton>
	</Flex>
)
export default SearchBar
