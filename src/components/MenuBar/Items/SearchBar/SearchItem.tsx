import { Flex, Image } from '@chakra-ui/react';
import { MenuItem } from '@material-tailwind/react';

export type ItemProps = {
	imageUrl: string;
	name: string;
};

const SearchItem = (props: ItemProps) => {
	return (
		<Flex className="flex items-center gap-2 w-96">
			<MenuItem
				key={props.name}
				value={props.imageUrl}
				className="flex items-center gap-2"
			>
				<Image src={props.imageUrl}></Image>
			</MenuItem>
		</Flex>
	);
};

export default SearchItem;
