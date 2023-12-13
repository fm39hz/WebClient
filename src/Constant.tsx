export const enum ServiceEndPoint {
	products = '/Products',
	login = '/Auth/Login',
	cpu = '/Cpus',
	users = '/Users',
}
export const WebServiceApi = 'http://localhost:5234/api'
export const GetApi = (endPoint: ServiceEndPoint) =>
	WebServiceApi.concat(endPoint)
