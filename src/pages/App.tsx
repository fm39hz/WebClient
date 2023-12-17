import { Flex } from '@chakra-ui/react';
import MenuBar from '../components/MenuBar/Menubar';
import MainPages from '../components/PageRouting/MainPages';
import { useEffect, useState } from 'react';
import { GetApi, ServiceEndPoint } from 'Constant';

const App = () => {
	const [isSingedIn, setIsSingedIn] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					GetApi(ServiceEndPoint.isLoggedIn).concat(
						'/' + localStorage.getItem('uid')!,
					),
				);
				const data = await response.json();
				setIsSingedIn(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);
	return (
		<Flex className="flex-col bg-black text-white h-screen w-full">
			<MenuBar isSignedIn={isSingedIn} />
			<MainPages setSignIn={setIsSingedIn} isSignedIn={isSingedIn} />
		</Flex>
	);
};

export default App;
