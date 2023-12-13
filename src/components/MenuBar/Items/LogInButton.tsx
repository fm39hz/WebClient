import { Text } from '@chakra-ui/react'
import { UserIcon } from '@heroicons/react/24/solid'
import { Button } from '@material-tailwind/react'

const LogInButton = () => (
	<Button
		className="flex flex-row items-center rounded-xl my-0.5"
		onClick={() => {}}
	>
		<UserIcon className="w-8 h-8 m-2" />
		<Text className="mr-2">Đăng nhập</Text>
	</Button>
)

export default LogInButton
