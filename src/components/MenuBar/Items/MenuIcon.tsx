import { ComputerDesktopIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const MenuIcon = () => (
	<Link className="mr-2" to="/">
		<ComputerDesktopIcon className="w-8 h-8" />
	</Link>
)

export default MenuIcon
