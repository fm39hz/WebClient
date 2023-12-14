import { useState } from 'react';
import { Input } from '@mui/material';
import { Flex } from '@chakra-ui/react';
import { Button } from '@material-tailwind/react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { GetItem, SetItem } from 'utils/StorageUtils';
import { EyeIcon } from '@heroicons/react/24/solid';

const BuildOption = (email: string, password: string) => {
	return {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	};
};
const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<Flex className="flex-col my-0.5 rounded-sm items-center justify-center">
			<Input
				className="text-sm bg-white rounded-lg m-2 w-40"
				placeholder="Email"
				onChange={(event) => setEmail(event.target.value)}
			/>
			<Flex className="text-sm bg-white rounded-lg m-2 w-40">
				<Input
					type="password"
					placeholder="Mật khẩu"
					onChange={(event) => setPassword(event.target.value)}
				/>
			</Flex>
			<Button
				className="bg-[#E30019] text-white"
				onClick={() =>
					fetch(
						GetApi(ServiceEndPoint.login),
						BuildOption(email, password),
					)
						.then(async (response) =>
							response.status == 200
								? SetItem('credential', await response.text())
								: alert(response.statusText),
						)
						.then(() => console.log(GetItem('credential')))
				}
			>
				Đăng nhập
			</Button>
		</Flex>
	);
};

export default SignIn;
