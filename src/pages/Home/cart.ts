import { rerender } from "../../ultilities/reRender"

const CartPage = {
    render: () => {
        const item = JSON.parse(localStorage.getItem('cart'))
        const res = item.filter(function (product) {
            return product.id != undefined
        })
        console.log(res);
        

        let totalMoney = 0
        for (let i = 0; i < res.length; i++) {
            const sumPrice = res[i];
            totalMoney += Number(sumPrice.sale)
        }
        return `
        <div class="w-[650px] mx-auto justify-center p-8">
            <div class="flex justify-between w-full h-[60px] mx-auto pb-8 p-2">
                <a href="/" class="flex text-lg font-semibold text-red-500" for="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pt-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    Trở về</a>
                <label class="text-2xl font-bold text-red-500" for="">Giỏ hàng</label>
                <label for=""></label>
            </div>
            ${res.map((item) => `
            <div class="cartItem w-[650px] h-fit bg-white drop-shadow-md rounded-md mx-auto">
            <button id="deleteBtn" class="float-right m-4" data-id="${item.id}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </button>
                <div class="grid grid-cols-3 gap-4 p-2 ">
                    <div class="mx-auto p-4">
                        <img src="${item.image}"
                            width="193px" height="193px" alt="">
                    </div>
                    <div class="col-span-2">
                        <div class="mx-2">
                            <label class="text-xl font-semibold" for="">${item.name}</label><br>
                            <label class="text-red-500 font-medium" for=""> ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.sale)}</label><br>
                        </div>
                        <div class="w-full h-fit bg-gray-200 border border-solid rounded-md mx-auto mt-4 font-normal">
                            <div class="mx-4">
                            <p> - Chương trình khuyến mãi :</p>
                            <label id="short" for="">
                            ${item.shortDesc}
                            </label>
                        </div>
                    </div>
                    </div>
                </div>
            `)}</div>
            <div class="w-[650px] max-h-[250px] bg-white border drop-shadow-sm rounded-md mx-auto mt-2 p-3">
                <div class="flex justify-between ">
                    <p class="font-semibold">Tổng tiền tạm tính</p>
                    <p class="text-red-500 font-medium"> ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalMoney)}</p>
                </div>
                <div class="w-full h-[60px] bg-red-700 border border-slate-300 rounded-md mx-auto text-center justify-center p-4 mt-2 my-1">
                    <label class="text-white text-lg font-normal" for="">TIẾN HÀNH ĐẶT HÀNG</label>
                </div>
                <div class="w-full h-[60px] bg-white border border-red-600 rounded-md mx-auto text-center justify-center p-4">
                    <label class="text-red-600 text-lg font-normal" for="">CHỌN THÊM SẢN PHẨM KHÁC</label>
                </div>
            </div>
        </div>`
    },
    afterRender: () => {
        const btns = document.querySelectorAll(".cartItem #deleteBtn")

        let cart = JSON.parse(localStorage.getItem('cart'))

        for (let btn of btns) {
            const id = btn.dataset.id

            btn.addEventListener('click', async function () {
                const remove = window.confirm("Xóa sản phẩm này khỏi giỏ hàng ?")
                if (remove) {
                    cart = cart.filter(cart => cart.id != id)
                    const newUpdate = localStorage.setItem('cart', JSON.stringify(cart))

                    alert("Đã xoá sp thành công")
                    rerender('#app', CartPage)
                }

            })
        }

    }
}

export default CartPage;