import { Text } from '@chakra-ui/react'
import { UserIcon } from '@heroicons/react/24/solid'
import { ButtonBase } from '@mui/material'

const LogInButton = () => (
	<ButtonBase className="border-2 rounded-xl" onClick={() => {}}>
		<UserIcon className="w-12 h-12" />
		<Text className="mr-2 text-justify">Đăng nhập</Text>
	</ButtonBase>
)

export default LogInButton
