import { Flex } from '@chakra-ui/react';
import { Menu, MenuItem } from '@material-tailwind/react';

const navListMenuItems = [
	{
		title: 'Cpu',
	},
	{
		title: 'Vga',
	},
];
const Sidebar = () => {
	return (
		<Flex className="flex-col my-8 ml-8 bg-white p-4 rounded-md w-80 h-fit">
			<Menu>
				{navListMenuItems.map((item) => (
					<MenuItem key={item.title}>{item.title}</MenuItem>
				))}
			</Menu>
		</Flex>
	);
};
export default Sidebar;
