export const enum ServiceEndPoint {
	dummy = '/',
	login = '/Auth/Login/',
	logout = 'Auth/Logout/',
	users = '/Users/',
	isLoggedIn = '/Users/IsLoggedIn/',
	cart = '/Cart/',
	cartPrice = '/Cart/GetPrice/',
	order = '/Orders/',
	invoice = '/Invoices/',
	items = '/ShoppingItems/',
	promotedPrice = '/ShoppingItems/GetPrice/',
	products = '/Products/',
	promote = '/Products/Promoted/',
	promoteDetails = '/Products/PromoteDetails/',
	cpu = '/Cpus/',
	vga = '/Vgas/',
}
export const WebServiceApi = 'http://localhost:5234/api';
export const GetApi = (endPoint: ServiceEndPoint): string =>
	WebServiceApi.concat(endPoint);
