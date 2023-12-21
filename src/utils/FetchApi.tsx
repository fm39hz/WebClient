import { GetApi, ServiceEndPoint } from 'Constant';
import { ProductProps } from 'components/Products/ProductCard';
import { CartProps, ShoppingItems } from 'pages/CartPages/CartPage';
import { UserProps } from 'pages/ProfilePage';

const fetchProducts = async (): Promise<ProductProps> =>
	await (await fetch(GetApi(ServiceEndPoint.products))).json();
const fetchCart = async (uid: string): Promise<CartProps> =>
	await (await fetch(GetApi(ServiceEndPoint.cart).concat(uid))).json();
const fetchItems = async (): Promise<ShoppingItems> =>
	await (await fetch(GetApi(ServiceEndPoint.items))).json();
const fetchUser = async (): Promise<UserProps> =>
	await (await fetch(GetApi(ServiceEndPoint.users))).json();
