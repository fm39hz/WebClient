import { Flex, Spacer } from '@chakra-ui/react';
import MenuBar from '../components/MenuBar/Menubar';
import MainPages from './MainPages';
import Sidebar from 'components/Sidebar/Sidebar';
import Footer from 'components/Footer/Footer';
import { useEffect, useState } from 'react';

const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);
	useEffect(() => {
		console.log(isSignedIn);
	}, [isSignedIn]);
	return (
		<Flex className="flex-col bg-[#e2e2e2] text-black min-h-screen min-w-full">
			<MenuBar isSignedIn={isSignedIn} setSignIn={setIsSignedIn} />
			<Flex>
				<Sidebar />
				<MainPages setIsSignedIn={setIsSignedIn} />
			</Flex>
			<Spacer />
			<Footer />
		</Flex>
	);
};

export default App;
