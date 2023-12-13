import SignUp from 'pages/SignUp'
import HomePage from 'pages/HomePage'
import { Route, Routes } from 'react-router-dom'
const publicRoutes = [
	{
		id: 0,
		path: '/',
		component: <HomePage />,
	},
	{
		id: 1,
		path: '/SignUp',
		component: <SignUp />,
	},
]
const MainPages = () => {
	return (
		<Routes>
			{publicRoutes.map(({ id, path, component }) => (
				<Route
					caseSensitive={true}
					path={path}
					key={id}
					element={component}
				/>
			))}
		</Routes>
	)
}

export default MainPages
