import { Image, Text } from '@chakra-ui/react';
import { UserIcon } from '@heroicons/react/24/solid';
import { Button } from '@material-tailwind/react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { UserProps } from 'pages/ProfilePage';
import { useEffect, useState } from 'react';

const SignedInIcon = () => {
	const [user, setUser] = useState({} as UserProps);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					GetApi(ServiceEndPoint.users).concat(
						'/' + localStorage.getItem('uid')!,
					),
				);
				const data = await response.json();
				setUser(data);
				setIsLoading(false);
			} catch (error) {
				console.error('Error fetching data:', error);
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);
	return (
		<Button
			className="flex flex-row justify-center gap-4 bg-inherit border border-l-purple-100"
			onClick={() => {
				console.log(user);
			}}
		>
			{isLoading ? (
				<UserIcon className="w-8 h-8" />
			) : (
				<Image src={user.photoUrl} className="w-8 h-8 rounded-xl" />
			)}
			<Text>{user.displayName}</Text>
		</Button>
	);
};
export default SignedInIcon;
