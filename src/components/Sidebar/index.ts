const Sidebar = {
  render: () => {
    return /*html*/`
        <div class="max-w-[80%] ">
          <ul class="mt-10">
            <li class="flex items-center hover:bg-[#00B0D7] p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mr-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <a href="/admin">Sản phẩm chung</a>
            </li>
            <li class="flex items-center hover:bg-[#00B0D7] p-2 rounded-md mt-2">
              <svg xmlns="http://www.w3.org/2000/svg"  class="h-10 w-10 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <a href="/userManager">Quản lý tài khoản</a>
            </li>
          </ul>
        </div>
        `
  }
}

export default Sidebar;