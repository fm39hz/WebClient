export const enum ServiceEndPoint {
	products = '/Products',
	login = '/Auth/Login',
	isLoggedIn = '/Users/IsLoggedIn',
	cpu = '/Cpus',
	users = '/Users',
}
export const WebServiceApi = 'http://localhost:5234/api';
export const GetApi = (endPoint: ServiceEndPoint): string =>
	WebServiceApi.concat(endPoint);
