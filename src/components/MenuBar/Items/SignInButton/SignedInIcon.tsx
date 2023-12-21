import { Flex, Text } from '@chakra-ui/react';
import {
	ArrowLeftCircleIcon,
	Cog6ToothIcon,
	InboxIcon,
	QuestionMarkCircleIcon,
	UserIcon,
} from '@heroicons/react/24/solid';
import {
	Avatar,
	Button,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
	Typography,
} from '@material-tailwind/react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { UserProps } from 'pages/ProfilePage';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetItem } from 'utils/StorageUtils';

type SignedInIconProps = {
	setIsSignedIn: CallableFunction;
};

const SignedInIcon = (props: SignedInIconProps) => {
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
	}, [GetItem('uid')]);
	return (
		<Menu>
			<MenuHandler>
				<Button className="flex my-2 flex-row justify-center rounded-xl gap-2 bg-[#a62828] shadow-sm">
					{isLoading ? (
						<UserIcon className="w-8 h-8" />
					) : (
						<Avatar src={user.photoUrl} className="w-8 h-8" />
					)}
					<Flex className="flex-col items-center">
						<Text className="text-white mr-2 text-sm">
							{user.displayName}
						</Text>
					</Flex>
				</Button>
			</MenuHandler>
			<MenuList>
				<MenuItem className="flex items-center gap-2">
					<UserIcon className="w-4 h-4" />
					<Link to={'/Profile'}>
						<Flex className="flex-col justify-center">
							<Typography variant="small" className="font-medium">
								My Profile
							</Typography>
						</Flex>
					</Link>
				</MenuItem>
				<MenuItem className="flex items-center gap-2">
					<Cog6ToothIcon className="w-4 h-4" />

					<Typography variant="small" className="font-medium">
						Edit Profile
					</Typography>
				</MenuItem>
				<MenuItem className="flex items-center gap-2">
					<InboxIcon className="w-4 h-4" />

					<Typography variant="small" className="font-medium">
						Inbox
					</Typography>
				</MenuItem>
				<MenuItem className="flex items-center gap-2">
					<QuestionMarkCircleIcon className="w-4 h-4" />
					<Typography variant="small" className="font-medium">
						Help
					</Typography>
				</MenuItem>
				<hr className="my-2 border-blue-gray-50" />
				<MenuItem
					className="flex items-center gap-2 "
					onClick={async () => {
						await fetch(
							GetApi(ServiceEndPoint.logout).concat(
								'/',
								GetItem('uid')!,
							),
						);
						props.setIsSignedIn(false);
						localStorage.removeItem('uid');
					}}
				>
					<ArrowLeftCircleIcon className="w-4 h-4" />
					<Typography variant="small" className="font-medium">
						Sign Out
					</Typography>
				</MenuItem>
			</MenuList>
		</Menu>
	);
};
export default SignedInIcon;
