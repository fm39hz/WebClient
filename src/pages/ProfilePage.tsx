import { Flex, Image, Text } from '@chakra-ui/react';
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

const ProfilePage = (props: UserProps) => {
	return (
		<Flex className="flex-col h-screen">
			<Flex className="flex-row m-8">
				<Image className="w-32 h-32 rounded-xl" src={props.photoUrl} />
				<Flex className="flex-col m-4">
					<Text>{props.displayName}</Text>
					<Text>{props.phoneNumber}</Text>
					<Text>{props.email}</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};
export default ProfilePage;
