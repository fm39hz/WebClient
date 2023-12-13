import { ComputerDesktopIcon } from '@heroicons/react/24/solid'
import { IconButton } from '@material-tailwind/react'

export default function MenuIcon() {
	return (
		<IconButton className="m-2 rounded-xl my-0.5" onClick={() => {}}>
			<ComputerDesktopIcon className="w-8 h-8" />
		</IconButton>
	)
}
