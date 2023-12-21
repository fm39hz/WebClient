import { Image } from '@chakra-ui/react';
import { MenuItem } from '@material-tailwind/react';
import { ProductProps } from 'Types';

const SearchItem = (props: ProductProps) => {
	return (
		<MenuItem
			key={props.id}
			className="flex items-center gap-2 w-96 text-black"
		>
			<Image className="w-4 h-4" src={props.imageUrl} />
			{props.name}
		</MenuItem>
	);
};

export default SearchItem;
