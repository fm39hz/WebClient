import SignIn from 'pages/SignIn'
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
		path: '/SignIn',
		component: <SignIn />,
	},
]
const MainPages = () => {
	return (
		<Routes>
			{publicRoutes.map(({ id, path, component }) => (
				<Route
					caseSensitive={true}
					key={id}
					path={path}
					element={component}
				/>
			))}
		</Routes>
	)
}

export default MainPages
