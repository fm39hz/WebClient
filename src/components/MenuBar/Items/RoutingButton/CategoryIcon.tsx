import { Text } from '@chakra-ui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import {
	Button,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
} from '@material-tailwind/react';

const CategoryIcon = () => (
	<Menu
		animate={{
			mount: { y: 0 },
			unmount: { y: -25 },
		}}
	>
		<MenuHandler>
			<Button className="flex flex-row bg-[#a62828] items-center rounded-xl my-0.5 shadow-sm">
				<Bars3Icon className="w-8 h-8" />
				<Text className="mr-2">Danh mục</Text>
			</Button>
		</MenuHandler>
		<MenuList>
			<MenuItem>Cpu</MenuItem>
			<MenuItem>Vga</MenuItem>
		</MenuList>
	</Menu>
);

export default CategoryIcon;
