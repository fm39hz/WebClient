import { Flex } from '@chakra-ui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { ButtonBase, Input } from '@mui/material'

export default function SearchBar() {
	return (
		<Flex className="flex-row bg-white mx-2 my-0.5 rounded-sm text-black">
			<Input
				className="text-sm m-2 w-96"
				placeholder="Bạn muốn tìm gì?"
			/>
			<ButtonBase>
				<MagnifyingGlassIcon className="w-5 h-5 m-3" />
			</ButtonBase>
		</Flex>
	)
}
