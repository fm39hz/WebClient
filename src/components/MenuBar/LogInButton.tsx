import { Flex, Text } from '@chakra-ui/react'
import { UserIcon } from '@heroicons/react/24/solid'
import { ButtonBase } from '@mui/material'

const LogInButton = () => (
	<ButtonBase className="">
		<UserIcon className="w-12 h-12 text-white" />
		<Text>Đăng nhập</Text>
	</ButtonBase>
)

export default LogInButton
