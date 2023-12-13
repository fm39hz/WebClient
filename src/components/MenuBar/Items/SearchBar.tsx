import { Flex } from '@chakra-ui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { IconButton } from '@material-tailwind/react'
import { Input } from '@mui/material'

const SearchBar = () => (
	<Flex className="flex-row bg-white my-0.5 rounded-sm text-black">
		<Input className="text-sm m-2 w-96" placeholder="Bạn muốn tìm gì?" />
		<IconButton className="text-black">
			<MagnifyingGlassIcon className="w-5 h-5 m-3" />
		</IconButton>
	</Flex>
)
export default SearchBar
