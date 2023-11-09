import { Bars4Icon, ComputerDesktopIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function MenuBar() {
	const [searchValue, setSearchValue] = useState('')
	return (
		<div className="items-center flex flex-row m-2 bg-[#5c2804] static">
			<button onClick={() => {}}>
				<ComputerDesktopIcon className="w-12 h-12" />
			</button>
			<button onClick={() => {}}>
				<Bars4Icon className="w-12 h-12" />
			</button>
		</div>
	)
}
