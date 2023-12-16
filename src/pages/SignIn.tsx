import { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Button } from '@material-tailwind/react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { GetItem, SetItem } from 'utils/StorageUtils';
import InputField from 'components/InteractField/InputField';

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
	let signIn = async () => {
		const response = await fetch(
			GetApi(ServiceEndPoint.login),
			BuildOption(email, password),
		);
		response.status == 200
			? SetItem('credential', await response.text())
			: alert(response.statusText);
	};
	return (
		<Flex className="flex-col my-0.5 rounded-sm items-center justify-center">
			<Text>Đăng nhập</Text>
			<InputField
				inputValue="Email"
				isPassword={false}
				getValue={(event) => setEmail(event.target.value)}
			/>
			<InputField
				inputValue="Mật khẩu"
				isPassword={true}
				getValue={(event) => setPassword(event.target.value)}
			/>
			<Button className="bg-[#E30019] text-white" onClick={() => signIn}>
				Đăng nhập
			</Button>
		</Flex>
	);
};

export default SignIn;
