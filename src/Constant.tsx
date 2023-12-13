enum ServiceEndPoint {
	products = '/Products',
	cpu = '/Cpus',
	users = '/Users',
}
const WebServiceApi = 'http://localhost:5234/api'
const GetApi = (endPoint: ServiceEndPoint) => WebServiceApi.concat(endPoint)
