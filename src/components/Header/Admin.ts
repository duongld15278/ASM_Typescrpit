const AdminHeader = {
	render: () => {
		return (
            /*html*/`
			<header class="w-full flex justify-between bg-[#00B0D7] px-10">
				<div class="w-3/5 flex justify-between">
					<div >
						<a href="/" class="flex justify-between">
							<img class="w-[64px] px-2 py-1" src="/images/logo.png" />
							<span class="text-white text-base my-auto">Dashboard</span>
						</a>
					</div>
					<div class="relative flex items-center">
						<i class="fa-solid fa-magnifying-glass absolute ml-1"></i>
						<input type="text"
						class="w-[500px] h-8 px-8 py-2 font-semibold placeholder:bg-gray-500 text-black rounded-lg border-none focus:ring-gray-500 ring-2">
					</div>
				</div>
				<div class="w-2/5 pr-24 text-right my-auto">
					<a href="" class="text-xl text-white">Lê Đại Dương</a>
				</div>
		
			</header>
            `
		)
	}
}

export default AdminHeader