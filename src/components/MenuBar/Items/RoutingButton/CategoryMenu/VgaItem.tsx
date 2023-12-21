import { MenuItem, Menu, MenuList, Button } from '@chakra-ui/react';
import { MenuHandler } from '@material-tailwind/react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { ProductProps } from 'components/Products/ProductCard';
import { useState, useEffect } from 'react';

type VgaProps = {
	frequency: number;
	vram: number;
	product: ProductProps;
	id: number;
};
const getNonDuplicatedValues = (arr: any[]) =>
	arr.filter((item, index) => {
		var _arr = arr;
		_arr.splice(index, 1);
		const unique = !_arr.includes(item);
		_arr.splice(index, 2, item);
		return unique;
	});

const VgaItem = () => {
	const [vga, setVga] = useState({} as VgaProps[]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(GetApi(ServiceEndPoint.vga));
				const data = await response.json();
				setVga(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);
	return (
		<MenuItem>
			<Menu placement="right">
				<MenuHandler className="flex items-center justify-between">
					<MenuItem>Vga</MenuItem>
				</MenuHandler>
				<MenuList>
					<MenuItem>
						<Menu placement="right">
							<MenuHandler>
								<Button>Frequency</Button>
							</MenuHandler>
							<MenuList>
								{getNonDuplicatedValues(Array.from(vga)).map(
									(product) => (
										<MenuItem>{product.frequency}</MenuItem>
									),
								)}
							</MenuList>
						</Menu>
					</MenuItem>
					<MenuItem>
						<Menu placement="right">
							<MenuHandler>
								<Button>Vram</Button>
							</MenuHandler>
							<MenuList>
								{getNonDuplicatedValues(Array.from(vga)).map(
									(product) => (
										<MenuItem>{product.vram}</MenuItem>
									),
								)}
							</MenuList>
						</Menu>
					</MenuItem>
				</MenuList>
			</Menu>
		</MenuItem>
	);
};
export default VgaItem;
