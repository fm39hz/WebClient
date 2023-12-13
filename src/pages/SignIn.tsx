import { Flex } from '@chakra-ui/react'
import { Button } from '@material-tailwind/react'
import { Input } from '@mui/material'
import { GetApi, ServiceEndPoint } from 'Constant'
import { useState } from 'react'

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	return (
		<Flex className="flex-col my-0.5 rounded-sm items-center justify-center">
			<Input
				className="text-sm bg-white rounded-lg m-2 w-40"
				placeholder="Email"
				onChange={(event) => setEmail(event.target.value)}
			/>
			<Input
				className="text-sm bg-white rounded-lg m-2 w-40"
				placeholder="Mật khẩu"
				onChange={(event) => setPassword(event.target.value)}
			/>
			<Button
				className="bg-[#E30019] text-white"
				onClick={() => {
					const requestOptions = {
						method: 'POST',
						body: JSON.stringify({
							email: email,
							password: password,
						}),
					}
					fetch(GetApi(ServiceEndPoint.login), requestOptions)
						.then((response) => {
							return response.json()
						})
						.then((data) => {
							console.log(data)
						})
				}}
			>
				Đăng nhập
			</Button>
		</Flex>
	)
}

export default SignIn
