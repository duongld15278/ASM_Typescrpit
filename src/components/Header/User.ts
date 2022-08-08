const UserHeader = {
	render: () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
		return /*html*/`
			<header class="w-full bg-[#D70018]">
        <div class="h-[64px]">
          <!-- Header -->
          <div class="w-[1350px] flex justify-between mx-auto">
            <a href="/" class="flex items-center">
              <img class="w-[200px]" src="/images/cellphones-logo.png" alt="">
            </a>
            <form class="my-4 mx-10 bg-white rounded-md flex" action="">
              <button class="border-black border-r">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
              <input type="text" class="w-[350px] h-[34px] rounded-md" name="" id="">
            </form>
            <div class="text-white flex items-center justify-between">
              <a class="" href="#">Gọi mua hàng<br> 1800.2097</a>
              <a class="flex items-center w-[100px] mx-4" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>Cửa hàng gần bạn
              </a>
              <a class="flex items-center w-[120px]" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 my-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>Tra cứu <br> đơn hàng
              </a>
              <a class="flex items-center w-[100px] " href="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 my-1 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Giỏ hàng
              </a>
              

              <a id="login" class="flex items-center w-[100px] " href="/signin">
              <svg xmlns="http://www.w3.org/2000/svg"  class="h-10 w-10 my-1 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              </a>
            </div>  
          </div>
        </div>
			</header>`
      } else {
        return /* html */ `
          <header class="w-full bg-[#D70018]">
            <div class="h-[64px]">
              <!-- Header -->
              <div class="w-[1350px] flex justify-between mx-auto">
                <a href="/" class="flex items-center">
                  <img class="w-[200px]" src="/images/cellphones-logo.png" alt="">
                </a>
                <form class="my-4 mx-10 bg-white rounded-md flex" action="">
                  <button class="border-black border-r">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                  <input type="text" class="w-[350px] h-[34px] rounded-md" name="" id="">
                </form>
                <div class="text-white flex items-center justify-between">
                  <a class="" href="#">Gọi mua hàng<br> 1800.2097</a>
                  <a class="flex items-center w-[100px] mx-4" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>Cửa hàng gần bạn
                  </a>
                  <a class="flex items-center w-[120px]" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 my-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>Tra cứu <br> đơn hàng
                  </a>
                  <a class="flex items-center w-[100px] " href="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 my-1 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Giỏ hàng
                  </a>
                  <a id="" class="flex items-center" href="/admin">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  </a>
                  <button id="logout" class="flex items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 my-1 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  </button>
                </div>  
              </div>
            </div>
          </header>
        `
      }

	}
}

export default UserHeader;