import { Flex } from '@chakra-ui/react'
import MenuBar from '../components/MenuBar/Menubar'
import MainPages from '../components/MainView/MainPages'

function App() {
	return (
		<Flex className="flex-col bg-black text-white h-screen w-full">
			<MenuBar />
			<MainPages />
		</Flex>
	)
}

export default App
