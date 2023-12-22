import { Flex } from '@chakra-ui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import {
	IconButton,
	Popover,
	PopoverContent,
	PopoverHandler,
} from '@material-tailwind/react';
import { Input } from '@mui/material';
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem';
import { GetApi, ServiceEndPoint } from 'Constant';
import { ProductProps } from 'Types';

const SearchBar = () => {
	const [products, setProducts] = useState({} as ProductProps[]);
	const [isFocus, setIsFocus] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredProducts, setFilteredProducts] = useState(
		{} as ProductProps[],
	);
	const handleSearch = (event: any) => {
		setIsFocus(true);
		setSearchTerm(event.target.value);
		setFilteredProducts(
			Array.from(products).filter((product) =>
				product.name.toLowerCase().includes(searchTerm.toLowerCase()),
			),
		);
	};
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const _products = await fetch(
					GetApi(ServiceEndPoint.products)!,
				);
				setProducts(await _products.json());
				console.log(products);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchProducts();
	}, []);
	return (
		<Flex className="flex-col bg-white my-0.5 rounded-sm text-black items-center">
			<Popover
				open={isFocus && searchTerm.length > 0}
				offset={-48}
				placement="top-start"
			>
				<PopoverHandler>
					<Flex className="flex-row">
						<Input
							className="text-sm m-2 w-96"
							placeholder="Bạn cần tìm gì?"
							onChange={handleSearch}
							onFocus={() => setIsFocus(true)}
							onBlur={() => setIsFocus(true)}
						/>
						<IconButton className="bg-inherit text-inherit">
							<MagnifyingGlassIcon className="w-5 h-5 my-3" />
						</IconButton>
					</Flex>
				</PopoverHandler>
				<PopoverContent className="flex flex-col absolute gap-1 rounded-sm border bg-white w-96 my-12 z-10">
					{Array.from(filteredProducts).map((product) => (
						<SearchItem key={product.id} {...product} />
					))}
				</PopoverContent>
			</Popover>
		</Flex>
	);
};
export default SearchBar;
