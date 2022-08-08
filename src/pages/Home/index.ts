import { cate } from "../../api/category"
import { List, Listbycate } from "../../api/product"
import Footer from "../../components/Footer/footer"
import UserHeader from "../../components/Header/User"
import Product from "../../model/product"

const HomePage = {
    render: async () => {
      const product = await List();
      const resProduct = product.data;

      const category = await cate();
      const resCate = category.data
      console.log(resProduct);
        return /*html*/`
        ${UserHeader.render()}
        <!-- Navbar -->
        <div class="w-[1250px] mx-auto grid grid-cols-4 my-3">
          <div class="">
          ${resCate.map((cateItem: Category) => `
            <a class="mt-2" href="#">
              <div class="flex w-[300px] rounded-md hover:bg-gray-300">
                <span class="text-base m-2">${cateItem.name}</span>
              </div>
            </a>
          `).join("")}
            
          </div>
          <div class="col-span-3">
            <img src="/images/Untitled.png" alt="">
          </div>
        </div>
        <!-- Navbar -->
        <!-- Body -->
        <div class="w-[1350px] mx-auto my-10 text-2xl">
          SẢN PHẨM MỚI NHẤT
        </div>
        <div class="grid grid-cols-7 gap-3 mx-10">
        ${resProduct.map((proItem: Product) => `
        <a class="max-h-[400px]" href="/product/${proItem.id}">
            <div class="p-3 drop-shadow-md border rounded-md">
              <img class="p-1" src="${proItem.image}" alt="">

              <h1 class="max-h-12 text-clip overflow-hidden ...">${proItem.name}</h1>

              <div class="my-3 flex justify-between items-center">
                <div class="text-red-500 ">
                  <span>${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(proItem.sale)}</span>
                </div>
                <div class="text-gray-400 text-xs">
                  <span class="line-through">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(proItem.price)}</span>
                </div>
              </div>

              <div id="short" class="bg-gray-200  rounded-md p-1">
                <p class="max-h-20 text-clip overflow-hidden ...">${proItem.shortDesc}</p>
              </div>
            </div>
          </a>
        `).join("")}
          
      </div>
      ${Footer.render()}
        `   
    },
    afterRender: () => {
      const logout = document.querySelector("#logout")
        logout?.addEventListener('click', function () {
            localStorage.clear()
            alert("Đã đăng xuất khỏi tài khoản")
            location.href = "/signin"
        })
    }
}

export default HomePage