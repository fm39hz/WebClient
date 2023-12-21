import { Flex, Text } from '@chakra-ui/react';
import { Card, CardBody } from '@material-tailwind/react';
import { Table, TableCell } from '@mui/material';
import { GetApi, ServiceEndPoint } from 'Constant';
import { CpuProps, VgaProps } from 'Types';
import { useEffect, useState } from 'react';

type ProductPageBody = {
	type: string;
	specificationId: number;
};

const GetCpuSpecificationTable = (cpu: CpuProps) => (
	<Table>
		<TableCell className="bg-[#f7f7f7] border-separate">
			<Text>Socket</Text>
			<Text>Nhân</Text>
			<Text>Luồng</Text>
			<Text>Xung nhịp</Text>
			<Text>TDP</Text>
		</TableCell>
		<TableCell>
			<Text>{cpu.socket}</Text>
			<Text>{cpu.core}</Text>
			<Text>{cpu.thread}</Text>
			<Text>{cpu.frequency}</Text>
			<Text>{cpu.tdp}</Text>
		</TableCell>
	</Table>
);

const GetVgaSpecificationTable = (vga: VgaProps) => (
	<Table>
		<TableCell className="bg-[#f7f7f7] border-separate">
			<Text>Xung nhịp</Text>
			<Text>Vram</Text>
		</TableCell>
		<TableCell>
			<Text>{vga.frequency}</Text>
			<Text>{vga.vram}</Text>
		</TableCell>
	</Table>
);

const GetTable = (type: string, specification: any) => {
	switch (type) {
		case 'Cpu':
			return GetCpuSpecificationTable(specification as CpuProps);
		case 'Vga':
			return GetVgaSpecificationTable(specification as VgaProps);
	}
};

const ProductPageBody = (props: ProductPageBody) => {
	const [specification, setSpecification] = useState({});
	useEffect(() => {
		const fetchSpecification = async () => {
			let _specificationEndpoint = ServiceEndPoint.dummy;
			switch (props.type) {
				case 'Cpu':
					_specificationEndpoint = ServiceEndPoint.cpu;
					break;
				case 'Vga':
					_specificationEndpoint = ServiceEndPoint.vga;
					break;
			}
			const _specification = await fetch(
				GetApi(_specificationEndpoint).concat(
					props.specificationId.toString(),
				),
			);
			setSpecification(await _specification.json());
		};
		fetchSpecification();
	}, []);
	return (
		<Card>
			<CardBody>
				<Flex className="border">
					<Table>{GetTable(props.type, specification)}</Table>
				</Flex>
			</CardBody>
		</Card>
	);
};
export default ProductPageBody;
