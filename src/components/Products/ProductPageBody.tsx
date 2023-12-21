import { Flex, Text } from '@chakra-ui/react';
import { Card, CardBody } from '@material-tailwind/react';
import { Table, TableCell } from '@mui/material';
import { GetApi, ServiceEndPoint } from 'Constant';
import { useEffect, useState } from 'react';

type ProductPageBody = {
	type: string;
	specificationId: number;
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
					<Table>
						<TableCell className="bg-[#f7f7f7] border-separate">
							<Text>dads</Text>
							<Text>dads</Text>
							<Text>dads</Text>
							<Text>dads</Text>
						</TableCell>
						<TableCell>
							<Text>dads</Text>
							<Text>dads</Text>
							<Text>dads</Text>
							<Text>dads</Text>
						</TableCell>
					</Table>
				</Flex>
			</CardBody>
		</Card>
	);
};
export default ProductPageBody;
