import { Image } from '@chakra-ui/react';
import { UserIcon } from '@heroicons/react/24/solid';
import { Button } from '@material-tailwind/react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { useEffect, useState } from 'react';

const SignedInIcon = () => {
	const [user, setUser] = useState({
		displayName: '',
		providerData: {
			photoUrl: '',
		},
	});
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
			onClick={() => {
				console.log(user);
			}}
		>
			{isLoading ? (
				<UserIcon className="w-8 h-8 mx-2" />
			) : (
				<Image src={user.providerData.photoUrl} className="w-8 h-8" />
			)}
			{user.displayName}
		</Button>
	);
};
export default SignedInIcon;
