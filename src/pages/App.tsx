import { Flex } from '@chakra-ui/react';
import MenuBar from '../components/MenuBar/Menubar';
import MainPages from '../components/PageRouting/MainPages';
import { useState } from 'react';

const App = () => {
	const [isSingedIn, setIsSingedIn] = useState(false);
	return (
		<Flex className="flex-col bg-black text-white h-screen w-full">
			<MenuBar isSignedIn={isSingedIn} />
			<MainPages setSignIn={setIsSingedIn} isSignedIn={isSingedIn} />
		</Flex>
	);
};

export default App;
