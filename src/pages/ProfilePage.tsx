import { Flex, Image, Text } from '@chakra-ui/react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { UserProps } from 'Types';
import { useEffect, useState } from 'react';

const ProfilePage = () => {
	const [user, setUser] = useState({} as UserProps);
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
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);
	return (
		<Flex className="flex-col h-screen">
			<Flex className="flex-row m-8">
				<Image className="w-32 h-32 rounded-xl" src={user.photoUrl} />
				<Flex className="flex-col m-4">
					<Text>{user.displayName}</Text>
					<Text>{user.phoneNumber}</Text>
					<Text>{user.email}</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};
export default ProfilePage;
