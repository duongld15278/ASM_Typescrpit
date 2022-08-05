const CartPage = {
    render: async () => {
        return /*html*/`<!-- card begin -->
        <div class="container mx-auto justify-center p-8">
            <div class="flex justify-between w-[570px] h-[60px] mx-auto pb-8">
                <a href="/" class="flex text-lg font-semibold text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pt-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    Trở về
                </a>
                <label class="text-2xl font-bold text-red-500" for="">Giỏ hàng</label>
                <label for=""></label>
            </div>
            <div class="w-[570px] h-[250px] bg-white drop-shadow-md rounded-md mx-auto">
                <div class="grid grid-cols-3 gap-4 p-2">
                    <div class="mx-auto p-4">
                        <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_13-_pro-5_4.jpg"
                            width="193px" height="193px" alt="">
                    </div>
                    <div class="col-span-2">
                        <div class="mx-2">
                            <label class="text-xl font-semibold" for="">Iphone 13 chính hãng VN/A</label><br>
                            <label class="text-red-500 font-medium" for="">18.900.000đ</label><br>
                            <label class="font-normal" for="">
                                Chọn số lượng <input class="border border-black w-[100px] mx-4" type="number">
                            </label>
                        </div>
                        <div class="w-[345px] h-[140px] bg-gray-200 border border-solid rounded-md mx-auto mt-4 font-normal">
                            <div class="mx-4">
                            <p> - Chương trình khuyến mãi :</p>
                            <label for="">
                                Dịch vụ phòng chờ hạng thương gia tại sân bay.
                                Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)
                            </label>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="w-[570px] h-[250px] bg-white border drop-shadow-md rounded-md mx-auto mt-2">
                <div class="grid grid-cols-3 gap-4 p-2">
                    <div class="mx-auto p-4">
                        <img src="https://synnexfpt.com/wp-content/uploads/2022/06/Apple-iPhone-12-mini-64GB-2.jpg"
                            width="193px" height="193px" alt="">
                    </div>
                    <div class="col-span-2">
                        <div class="mx-2">
                            <label class="text-xl font-semibold" for="">Iphone 12 chính hãng VN/A</label><br>
                            <label class="text-red-500 font-medium" for="">15.900.000đ</label><br>
                            <label class="font-normal" for="">
                                Chọn số lượng <input class="border border-black w-[100px] mx-4" type="number">
                            </label>
                        </div>
                        <div class="w-[345px] h-[140px] bg-gray-200 border border-solid rounded-md mx-auto mt-4 font-normal">
                            <div class="mx-4">
                            <p> - Chương trình khuyến mãi :</p>
                            <label for="">
                                Dịch vụ phòng chờ hạng thương gia tại sân bay.
                                Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)
                            </label>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="flex justify-between ">
                       <p class="font-semibold">Tổng tiền tạm tính</p>
                       <p class="text-red-500">34.800.000 đ</p>
                </div>
                <div class="w-[570px] h-[60px] bg-red-700 border border-slate-300 rounded-md mx-auto text-center justify-center p-4 mt-2 my-1">
                    <label class="text-white text-lg font-normal" for="">TIẾN HÀNH ĐẶT HÀNG</label>
                </div>
                <div class="w-[570px] h-[60px] bg-white border border-red-600 rounded-md mx-auto text-center justify-center p-4">
                    <label class="text-red-600 text-lg font-normal" for="">CHỌN THÊM SẢN PHẨM KHÁC</label>
                </div>
            </div>
        </div>
            <!-- card end -->`
    }
}

export default CartPage;