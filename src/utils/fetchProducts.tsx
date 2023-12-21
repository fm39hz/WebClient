import { GetApi, ServiceEndPoint } from 'Constant';
import { ProductProps } from 'components/Products/ProductCard';

const fetchProducts = async (id: number): Promise<ProductProps> => {
	const _product = (await fetch(GetApi(ServiceEndPoint.products))).json();
	return await _product.json();
};
