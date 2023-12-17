import { Image } from '@chakra-ui/react';
import { MenuItem } from '@material-tailwind/react';

export type ItemProps = {
	imageUrl: string;
	name: string;
};

const SearchItem = (props: ItemProps) => {
	return (
		<MenuItem
			key={props.name}
			value={props.imageUrl}
			className="flex items-center gap-2 w-96 text-black"
		>
			<Image src={props.imageUrl} />
			{props.name}
		</MenuItem>
	);
};

export default SearchItem;
