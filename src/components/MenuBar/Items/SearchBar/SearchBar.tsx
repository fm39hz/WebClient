import { Flex } from '@chakra-ui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { IconButton } from '@material-tailwind/react';
import { Input } from '@mui/material';
import { GetApi, ServiceEndPoint } from 'Constant';
import { useEffect } from 'react';

const SearchBar = () => {
	var _products = [
		{
			name: '',
			concreateId: 0,
			cpu: null,
			vga: null,
			description: '',
			imageUrl: '',
			basePrice: 0,
			quantity: 0,
			id: 0,
		},
	];
	var _searchedProducts = [];
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(GetApi(ServiceEndPoint.products)!);
				_products = await response.json();
				console.log(_products);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);
	return (
		<Flex className="flex-row bg-white my-0.5 rounded-sm text-black items-center">
			<Input className="text-sm m-2 w-96" placeholder="Bạn cần tìm gì?" />
			<IconButton className="bg-inherit text-inherit">
				<MagnifyingGlassIcon className="w-5 h-5 my-3" />
			</IconButton>
			<Flex className="absolute self-center z-10  mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"></Flex>
		</Flex>
	);
};
export default SearchBar;
