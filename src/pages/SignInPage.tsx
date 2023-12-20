import { Dispatch, SetStateAction, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Button } from '@material-tailwind/react';
import { SetItem } from 'utils/StorageUtils';
import { GetApi, ServiceEndPoint } from 'Constant';
import { useNavigate } from 'react-router-dom';
import { Input } from '@mui/material';

type SignInProps = {
	setSignedIn: Dispatch<SetStateAction<boolean>>;
	isSignedIn: boolean;
};

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

const SignInPage = (props: SignInProps) => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<Flex className="flex-col bg-white min-h-screen px-96 m-2 rounded-sm items-center justify-start">
			<Text className="my-4">Đăng nhập</Text>

			<Flex className="flex-col w-96 items-center">
				<Input
					className="text-sm rounded-xl m-2 w-full"
					placeholder="Email"
					onChange={(event: any) => setEmail(event.target.value)}
				/>
				<Input
					className="text-sm rounded-xl m-2 w-full"
					type="password"
					placeholder="Mật khẩu"
					onChange={(event: any) => setPassword(event.target.value)}
				/>
			</Flex>
			<Button
				className="bg-[#E30019] text-white"
				onClick={async () => {
					const response = await fetch(
						GetApi(ServiceEndPoint.login),
						BuildOption(email, password),
					);
					if (response.status == 200) {
						SetItem('uid', await response.text());
						props.setSignedIn.call(props.isSignedIn, true);
						navigate('/Home');
						return;
					}
					alert(response.statusText);
				}}
			>
				Đăng nhập
			</Button>
		</Flex>
	);
};

export default SignInPage;
