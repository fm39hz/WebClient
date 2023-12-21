import { Flex, Image, Text } from '@chakra-ui/react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { useEffect, useState } from 'react';
export type UserProps = {
	uid: string;
	displayName: string;
	email: string;
	phoneNumber: string;
	photoUrl: string;
	providerId: string;
	emailVerified: boolean;
	disabled: boolean;
	providerData: [
		{
			uid: string;
			displayName: string;
			email: string;
			phoneNumber: string;
			photoUrl: string;
			providerId: string;
		},
		{
			uid: string;
			displayName: string;
			email: string;
			phoneNumber: string;
			photoUrl: string;
			providerId: string;
		},
	];
	tokensValidAfterTimestamp: string;
	userMetaData: {
		creationTimestamp: string;
		lastSignInTimestamp: string;
		lastRefreshTimestamp: string;
	};
	customClaims: {};
	tenantId: string;
};

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
