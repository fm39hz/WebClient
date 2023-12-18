import { Flex } from '@chakra-ui/react';
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
	return <Flex></Flex>;
};
export default ProfilePage;
