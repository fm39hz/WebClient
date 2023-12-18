import { Image, Text } from '@chakra-ui/react';
import { UserIcon } from '@heroicons/react/24/solid';
import { GetApi, ServiceEndPoint } from 'Constant';
import { UserProps } from 'pages/ProfilePage';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
		<Link
			className="flex flex-row justify-center gap-4 bg-inherit"
			to={'/Profile'}
		>
			{isLoading ? (
				<UserIcon className="w-8 h-8" />
			) : (
				<Image src={user.photoUrl} className="w-8 h-8 rounded-xl" />
			)}
			<Text className="text-white">{user.displayName}</Text>
		</Link>
	);
};
export default SignedInIcon;
