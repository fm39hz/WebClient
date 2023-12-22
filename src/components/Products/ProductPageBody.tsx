import { Flex, Text } from '@chakra-ui/react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { Table, TableCell } from '@mui/material';
import { GetApi, ServiceEndPoint } from 'Constant';
import { CpuProps, VgaProps } from 'Types';
import { useEffect, useState } from 'react';

type ProductPageBody = {
	type: string;
	specificationId: number;
};

const GetCpuSpecificationTable = (cpu: CpuProps) => (
	<Table className="border">
		<TableCell className="bg-[#f7f7f7] border-separate w-fit text-lg font-bold">
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
		if (props.specificationId !== undefined) {
			fetchSpecification();
		}
	}, [props]);
	return (
		<Card>
			<CardBody>
				<Flex className="flex-col">
					<Flex className="flex-col gap-4">
						<Typography className="text-xl font-semibold">
							Thông tin sản phẩm
						</Typography>
						<Typography className="text-2xl font-bold">
							THÔNG SỐ KĨ THUẬT:
						</Typography>
					</Flex>
					{GetTable(props.type, specification)}
				</Flex>
			</CardBody>
		</Card>
	);
};
export default ProductPageBody;
