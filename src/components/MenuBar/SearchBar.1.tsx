import {
	Editable,
	EditableInput,
	EditablePreview,
	Flex,
	Input,
} from '@chakra-ui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function SearchBar() {
	const [searchValue, setSearchValue] = useState('')
	return (
		<Flex className=" flex-row mr-2 rounded-xl bg-blue-600 text-white h-12">
			<Editable
				textAlign="center"
				defaultValue="Rasengan ⚡️"
				fontSize="2xl"
				isPreviewFocusable={false}
			>
				<EditablePreview />
				{/* Here is the custom input */}
				<Input as={EditableInput} />
				<EditableControls />
			</Editable>
			<MagnifyingGlassIcon />
		</Flex>
	)
}
