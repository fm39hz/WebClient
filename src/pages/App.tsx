import { Flex, Spacer } from '@chakra-ui/react';
import MenuBar from '../components/MenuBar/Menubar';
import MainPages from '../components/PageRouting/MainPages';
import Sidebar from 'components/Sidebar/Sidebar';
import Footer from 'components/Footer/Footer';

const App = () => {
	return (
		<Flex className="flex-col bg-[#e2e2e2] text-black min-h-screen min-w-full">
			<MenuBar />
			<Flex>
				<Sidebar />
				<MainPages />
			</Flex>
			<Spacer />
			<Footer />
		</Flex>
	);
};

export default App;
