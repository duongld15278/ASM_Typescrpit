import { cate } from "../../../api/category"
import { UploadFile } from "../../../api/image"
import { AddProduct } from "../../../api/product"
import AdminHeader from "../../../components/Header/Admin"
import Sidebar from "../../../components/Sidebar"
import Product from "../../../model/product"

const AddProductPage = {
    render: async () => {
        const listcate: Category = await cate();
        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex divide-x h-screen">
            <div class="w-[250px] flex-none mt-4 ml-5">
                ${Sidebar.render()}
            </div>
            <div class="w-full bg-gradient-to-r from-gray-100">
            <div id="form-add" class="px-5 pt-5 h-screen">
              <h2 class="text-2xl font-medium mb-5">Thêm mới sản phẩm</h2>
              <div class="flex justify-evenly">
                <div class="bg-white w-2/5 h-fit mr-10 rounded border-b-2 border-b-gray-200">
                  <div class="flex flex-col justify-center items-center h-[350px] rounded border-b-2 border-b-gray-200">
                    <div>
                      <img src="" class="h-[300px] mb-2" id="imgPreview" />
                    </div>
                    <div class="text-red-500" id="erImg"></div>
                    <div class="">
                      <input type="file" accept=".jpg, .jpeg .png, .svg, .webp" class="" id="img-post" name="img-post">
                    </div>
        
                  </div>
                  <div class="">
                    <label for="" class="mx-2">Mô tả ngắn</label>
                    <textarea id="shortDesc" class="w-full p-2"></textarea>
                    <div class="text-red-500" id="erShort"></div>
                  </div>
                </div>
                <div class=" w-3/5 col-span-2">
                  <h2 class="text-xl border-b-2 leading-loose	">Thông tin sản phẩm</h2>
                  <div class="flex flex-col mt-4 ">
                    <label for="">Tên sản phẩm:</label>
                    <input id="name" type="text" placeholder="Tên sản phẩm" class="w-full border rounded-md px-2 h-10">
                    <div class="text-red-500" id="erName"></div>
                  </div>
        
                  <div class="flex ">
                    <div class="flex flex-col ">
                      <label for="">Giá gốc:</label>
                      <input id="price" type="text" placeholder="Giá gốc" class="w-full border rounded-md px-2 h-10">
                      <div class="text-red-500" id="erPrice"></div>
                    </div>
        
                    <div class="flex flex-col ">
                      <label for="">Giá khuyến mãi:</label>
                      <input id="sale" type="text" placeholder="Giá khuyến mãi"
                        class="w-full border rounded-md px-2 h-10">
                    </div>
        
                  </div>
                  <div class="flex flex-col ">
                    <label for="">Danh mục:</label>
                    <select name="" id="category" class="w-full border rounded-md px-2 h-10">
                      ${listcate.data.map((item) => `
                      <option value="${item.id}">${item.name}</option>
                      `)}
                    </select>
                  </div> <br>
                  <div class="">
                    <label for="">Đặc điểm nổi bật:</label>
                    <textarea id="feature" class="w-full border rounded-md px-2 h-20"></textarea>
                    <div class="text-red-500" id="erFeature"></div>
                  </div> <br>
        
                  <div class="">
                    <label for="">Mô tả dài:</label>
                    <textarea id="longDesc" class="w-full border rounded-md px-2 h-20"></textarea>
                    <div class="text-red-500" id="erLong"></div>
                  </div>
        
        
                  <button class="border rounded-md text-white bg-[#00B0D7] w-[120px] h-[60px] mt-5" type="submit"
                    id="btnAdd">Thêm mới</button>
                </div>
              </div>
            </div>
          </div>
            
        </div>
        `
    },
    afterRender: async () => {
        const formAdd = document.querySelector('#btnAdd');
        const imgPost = document.querySelector('#img-post');
        const imgPreview = document.querySelector('#imgPreview');
        const erImg: any = document.querySelector("#erImg");
        const erName = document.querySelector("#erName");
        const erShort = document.querySelector("#erShort");
        const erPrice = document.querySelector("#erPrice");
        const erFeature = document.querySelector("#erFeature");
        const erLong = document.querySelector("#erLong");

        imgPost.addEventListener('change', function(e){
          imgPreview.src = URL.createObjectURL(e.target.files[0])
        });
        
        formAdd?.addEventListener('click', async function (e) {
            const name = document.querySelector('#name')?.value
            const price = document.querySelector('#price')?.value
            const sale = document.querySelector('#sale')?.value
            const longDesc = document.querySelector('#longDesc')?.value
            const shortDesc = document.querySelector('#shortDesc')?.value
            const feature = document.querySelector('#feature')?.value
            const category = document.querySelector('#category')?.value
            const imageUrl = imgPreview?.src
      
            if (name == "") {
              erName.innerHTML = "Chưa nhập tên cho sản phẩm"
            }
            if (price == "") {
              erPrice.innerHTML = "Chưa nhập giá cho sản phẩm"
            }
            if (longDesc == "") {
              erLong.innerHTML = "Chưa nhập mô tả dài"
            }
            if (shortDesc == "") {
              erShort.innerHTML = "Chưa nhập mô tả ngắn cho sản phẩm"
            }
            if (feature == "") {
              erFeature.innerHTML = "Chưa nhập đặc điểm cho sản phẩm"
            }
            if (imgPreview.src == "") {
              erImg.innerHTML = "Chưa chọn ảnh cho sản phẩm"
            }
            if (name != "" && price != "" && longDesc != "" && shortDesc != "" && feature != "") {
                console.log("1");
                
              const product: Product = {
                image: imageUrl,
                name: name,
                price: price,
                sale: sale,
                longDesc: longDesc,
                shortDesc: shortDesc,
                feature: feature,
                category: category
              }
              const data = await AddProduct(product)
              if (data) {
                alert("Thêm thành công")
              }
              window.location.href = '/admin';
            }
          });
          
          imgPost?.addEventListener('change', async (e) => {
            // console.log(e.target.files)
            const file = e.target.files[0]
            if (file.size > 250000) {
              erImg.innerHTML = "File quá lớn"
      
            } if (file === "") {
                erImg.innerHTML = "Chưa thêm ảnh"
            }
            else {
              erImg.innerHTML = ""
              const res = await UploadFile(file)
              const data = res.data
              imgPreview.src = data.url
            }
      
          });
      
    }
}


export default AddProductPage