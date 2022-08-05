import { catebyId } from "../../api/category"
import { Listbycate, Read } from "../../api/product"
import Footer from "../../components/Footer/footer"
import UserHeader from "../../components/Header/User"
import Category from "../../model/category"
import Product from "../../model/product"
const DetailProduct = {
    render: async (id: any) => {
        const data = await Read(id)
        const res: Product = data.data
        const idCate = res.category
        console.log(idCate);
        
        const listByCate = await Listbycate(idCate)
        const resCate = listByCate.data

        const Icate = await catebyId(idCate)
        const cateName: Category = Icate.data

        console.log(Icate);

        console.log(resCate);

        console.log(res);

        return /*html*/ `
        ${UserHeader.render()}
        <div class="w-[1250px] mx-auto mt-2">
            <div class="w-full">
                <div class="">
                    <ul class="flex justify-start space-x-7 capitalize text-xs text-gray-500 ">
                        <a href="/">trang chủ</a> 
                        <a href="/">${cateName.name}</a>
                        <a href="/product/${res.id}">${res.name}</a>
                    </ul>
                </div>
            </div>
            <div class="w-full my-4 border-b-2 border-t-4 border-[#D1D5DB]">
                <h1 class="text-xl font-medium leading-[60px]">${res.name}<h1>
            </div>
            <div class="flex justify-between mb-16">
                <div class="w-1/3">
                    <img src="${res.image}" class=" w-[358px] h-[358px] " alt="">
                </div>
                <div class="w-2/3">
                    <div class="col-span-3">
                        <div class="flex mb-10">
                            <div class="text-red-600 text-3xl">
                            <span class="">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(res.sale)}</span>
                            </div>
                            <div class="mt-3 ml-5 text-stone-400">
                                <span class="line-through">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(res.price)}</span>
                            </div>
                        </div>
                        <div class="text-base w-[882px] h-[157px]">
                            Mô tả ngắn: ${res.shortDesc}
                        </div>
                        <div class="flex">
                            <a href="#" class="">
                                <div class=" inline-black bg-red-600 py-5 px-16 rounded-md text-white">
                                    Mua ngay
                                </div>
                            </a>
                            <a class="flex justify-between items-center mx-5 w-40" href="#">
                                <div class="inline-black rounded-md border-2 border-red-600 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-red-600 m-4 "
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    
                                </div>
                                <span>Thêm vào giỏ hàng</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="font-semibold text-2xl mx-auto container ">
                <a href="#" >Sản phẩm cùng loại</a>
            </div>
            <div class="grid grid-cols-6 mx-auto container">
                ${resCate.map((item: Product) => `
                <a href="/product/${item.id}">
                <div class=" h-[300px] mx-1 rounded-lg  border-2 border-stone-400 mt-5">
                    <img src="${item.image}" alt=""
                        class="w-[160px] h-[160px] container mx-auto ">
                    <div class="text-black font-semibold p-3 max-h-16 text-clip overflow-hidden ...">
                        ${item.name}   
                    </div>
                    <div class="flex items-center mt-4 p-3">
                        <div class="mx-1  text-base">
                            <div class="text-red-600">
                                ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.sale)}
                            </div>
                        </div>
                        <div class=" mx-2">
                            <div class="text-stone-400 text-xs">
                                <span class="line-through">${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
                `).join("")}
            
            </div>
            <section class="bg-stone-300 container max-h-50	mt-20 rounded-lg mx-auto p-2">
                <h2 class=" text-center text-red-700 text-2xl">ĐẶC ĐIỂM NỔI BẬT</h2>
                <div class="mt-3 ">
                    ${res.feature}
                </div>
            </section>
            <div class="mx-auto container my-10">
                ${res.longDesc}
            </div>
            </div>
            </div>
        </div>
        <hr>
    ${Footer.render()}
        `
    }
}
export default DetailProduct