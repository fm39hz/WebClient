import { Button } from '@chakra-ui/react';
import {
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
} from '@material-tailwind/react';
import { GetApi, ServiceEndPoint } from 'Constant';
import { ProductProps } from 'components/Products/ProductCard';
import { useEffect, useState } from 'react';

type CpuProps = {
	socket: string;
	tdp: number;
	core: number;
	thread: number;
	frequency: number;
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

const CpuItem = () => {
	const [cpu, setCpu] = useState({} as CpuProps[]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(GetApi(ServiceEndPoint.cpu));
				const data = await response.json();
				setCpu(data);
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
					<MenuItem>Cpu</MenuItem>
				</MenuHandler>
				<MenuList>
					<MenuItem>
						<Menu placement="right">
							<MenuHandler>
								<Button>Socket</Button>
							</MenuHandler>
							<MenuList>
								{getNonDuplicatedValues(Array.from(cpu)).map(
									(product) => (
										<MenuItem>{product.socket}</MenuItem>
									),
								)}
							</MenuList>
						</Menu>
					</MenuItem>
					<MenuItem>
						<Menu placement="right">
							<MenuHandler>
								<Button>Luồng</Button>
							</MenuHandler>
							<MenuList>
								{getNonDuplicatedValues(Array.from(cpu)).map(
									(product) => (
										<MenuItem>{product.thread}</MenuItem>
									),
								)}
							</MenuList>
						</Menu>
					</MenuItem>
					<MenuItem>
						<Menu placement="right">
							<MenuHandler>
								<Button>Nhân</Button>
							</MenuHandler>
							<MenuList>
								{getNonDuplicatedValues(Array.from(cpu)).map(
									(product) => (
										<MenuItem>{product.core}</MenuItem>
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
export default CpuItem;
