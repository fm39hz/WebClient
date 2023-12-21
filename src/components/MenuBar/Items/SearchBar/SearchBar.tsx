import { Flex } from '@chakra-ui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { IconButton } from '@material-tailwind/react';
import { Input } from '@mui/material';
import { ProductProps } from 'components/Products/ProductCard';
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem';
import { GetApi, ServiceEndPoint } from 'Constant';

const SearchBar = () => {
	const [products, setProducts] = useState({} as ProductProps[]);
	const [isFocus, setIsFocus] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredProducts, setFilteredProducts] = useState(
		{} as ProductProps[],
	);
	const isFocusing = () => {
		setIsFocus(true);
	};
	const isNotFocusing = () => {
		setFilteredProducts([]);
		setIsFocus(false);
	};
	const handleSearch = (event: any) => {
		setSearchTerm(event.target.value);
		setFilteredProducts(
			products.filter((product) =>
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
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchProducts;
	}, []);
	return (
		<Flex className="flex-col bg-white my-0.5 rounded-sm text-black items-center">
			<Flex className="flex-row">
				<Input
					className="text-sm m-2 w-96"
					placeholder="Bạn cần tìm gì?"
					onChange={handleSearch}
					onBlur={isNotFocusing}
					onFocus={isFocusing}
				/>
				<IconButton className="bg-inherit text-inherit">
					<MagnifyingGlassIcon className="w-5 h-5 my-3" />
				</IconButton>
			</Flex>
			<Flex
				className="flex-col absolute gap-1 rounded-sm border bg-white w-96 my-12 z-10"
				visibility={isFocus ? 'visible' : 'hidden'}
			>
				{Array.from(filteredProducts).map((product) => (
					<SearchItem key={product.id} {...product} />
				))}
			</Flex>
		</Flex>
	);
};
export default SearchBar;
