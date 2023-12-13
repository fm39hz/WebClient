import { Flex, Text } from '@chakra-ui/react'
import { Input } from '@mui/material'

const SignUp = () => (
	<Flex className="flex-row bg-white my-0.5 rounded-sm text-black items-center">
		<Input className="text-sm m-2 w-96" placeholder="Bạn cần tìm gì?" />
	</Flex>
)

export default SignUp
