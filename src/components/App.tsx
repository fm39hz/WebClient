import MenuBar from './Menubar'

function App() {
	return (
		<div className="flex flex-col bg-black text-white h-screen w-full">
			<MenuBar />
			<div className="text-center text-2xl">
				<div>Body</div>
			</div>
		</div>
	)
}

export default App
