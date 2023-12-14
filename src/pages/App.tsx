import { Flex } from '@chakra-ui/react';
import MenuBar from '../components/MenuBar/Menubar';
import MainPages from '../components/PageRouting/MainPages';

const App = () => (
	<Flex className="flex-col bg-black text-white h-screen w-full">
		<MenuBar />
		<MainPages />
	</Flex>
);

export default App;
