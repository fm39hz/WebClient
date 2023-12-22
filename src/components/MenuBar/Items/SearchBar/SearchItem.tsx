import { Image } from '@chakra-ui/react';
import { MenuItem } from '@material-tailwind/react';
import { ProductProps } from 'Types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchItem = (props: ProductProps) => {
	const [isFocus, setIsFocus] = useState(false);
	return (
		<MenuItem>
			<Link
				className="flex items-center gap-2 w-96 text-black"
				to={'/Product/'.concat(props.id.toString())}
			>
				<Image className="w-4 h-4" src={props.imageUrl} />
				{props.name}
			</Link>
		</MenuItem>
	);
};

export default SearchItem;
