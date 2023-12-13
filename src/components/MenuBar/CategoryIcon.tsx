import { Text } from '@chakra-ui/react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { ButtonBase } from '@mui/material'

export default function CategoryIcon() {
	return (
		<ButtonBase className="border-2 rounded-xl" onClick={() => {}}>
			<Bars3Icon className="w-12 h-12" />
			<Text className="mr-2">Danh mục</Text>
		</ButtonBase>
	)
}
