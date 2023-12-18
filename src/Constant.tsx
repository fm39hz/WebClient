export const enum ServiceEndPoint {
	products = '/Products',
	login = '/Auth/Login',
	isLoggedIn = '/Users/IsLoggedIn',
	promote = '/Promote',
	cpu = '/Cpus',
	vga = '/Vgas',
	users = '/Users',
}
export const WebServiceApi = 'http://localhost:5234/api';
export const GetApi = (endPoint: ServiceEndPoint): string =>
	WebServiceApi.concat(endPoint);
	
export const Color = {
	primary: '#FF3E3E',
	onPrimary: 'bg-[#cfcfcf]',
};