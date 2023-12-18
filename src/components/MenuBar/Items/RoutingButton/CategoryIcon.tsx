import { Text } from '@chakra-ui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { Button } from '@material-tailwind/react';

const CategoryIcon = () => (
	<Button
		className="flex flex-row bg-[#be1529] items-center rounded-xl my-0.5 shadow-sm"
		onClick={() => {}}
	>
		<Bars3Icon className="w-8 h-8" />
		<Text className="mr-2">Danh mục</Text>
	</Button>
);

export default CategoryIcon;
