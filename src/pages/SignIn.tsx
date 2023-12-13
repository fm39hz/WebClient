import { Flex } from '@chakra-ui/react'
import { Button } from '@material-tailwind/react'
import { Input } from '@mui/material'

const SignIn = () => (
	<Flex className="flex-col my-0.5 rounded-sm items-center justify-center">
		<Input
			className="text-sm bg-white rounded-lg m-2 w-40"
			placeholder="Email"
		/>
		<Input
			className="text-sm bg-white rounded-lg m-2 w-40"
			placeholder="Mật khẩu"
		/>
		<Button className="bg-[#E30019] text-white">Đăng nhập</Button>
	</Flex>
)

export default SignIn
