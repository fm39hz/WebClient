export const enum ServiceEndPoint {
	products = '/Products',
	login = '/Auth/Login',
	logout = 'Auth/Logout',
	isLoggedIn = '/Users/IsLoggedIn',
	promote = '/Promote',
	cpu = '/Cpus',
	vga = '/Vgas',
	users = '/Users',
}
export const WebServiceApi = 'http://localhost:5234/api';
export const GetApi = (endPoint: ServiceEndPoint): string =>
	WebServiceApi.concat(endPoint);