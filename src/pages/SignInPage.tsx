import { Dispatch, SetStateAction, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Button } from '@material-tailwind/react';
import { SetItem } from 'utils/StorageUtils';
import { GetApi, ServiceEndPoint } from 'Constant';
import InputField from 'components/InteractField/InputField';
import { useNavigate } from 'react-router-dom';

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
		<Flex className="flex-col my-0.5 w-screen rounded-sm items-center justify-start">
			<Text className="my-4">Đăng nhập</Text>
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
