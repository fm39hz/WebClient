export const enum ServiceEndPoint {
	dummy = '/',
	products = '/Products/',
	promote = '/Products/Promoted/',
	promoteDetails = '/Products/PromoteDetails/',
	login = '/Auth/Login/',
	logout = 'Auth/Logout/',
	isLoggedIn = '/Users/IsLoggedIn/',
	cpu = '/Cpus/',
	vga = '/Vgas/',
	users = '/Users/',
	cart = '/Cart/',
	cartPrice = '/Cart/GetPrice/',
	items = '/ShoppingItems/',
	promotedPrice = '/ShoppingItems/GetPrice/',
}
export const WebServiceApi = 'http://localhost:5234/api';
export const GetApi = (endPoint: ServiceEndPoint): string =>
	WebServiceApi.concat(endPoint);
