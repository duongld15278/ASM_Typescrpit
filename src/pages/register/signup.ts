import validator from 'validator';
import { register } from '../../api/auth';

const signup = {
    render: async () => {
        return /*html*/`
            <div class=" bg-gray-300 h-screen flex justify-center items-center">
                <div class="register w-[800px] h-[550px] flex justify-between">
                    <div class="left-side bg-white w-2/3 px-10 flex items-center">
                        <div class="w-[410px]">
                            <a href="/" class="flex text-lg font-semibold text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pt-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                                Trở về
                            </a>
                            <h1 class="text-center text-2xl font-bold mb-2">Đăng ký</h1>
                            <div>
                                <label for="phone" class="font-medium">Phone</label><br>
                                <input type="phone" id="phone" name="phone" class="w-full h-12 border-2 border-[#C7C7C7] p-2">
                                <div class="text-red-500 text-sm error"></div>
                            </div>
                            <div>
                                <label for="email" class="font-medium">Email</label><br>
                                <input type="email" id="email" name="email" class="w-full h-12 border-2 border-[#C7C7C7] p-2">
                                <div class="text-red-500 text-sm error"></div>
                            </div>
                            <div>
                                <label for="password" class="font-medium">password</label><br>
                                <input type="password" id="password" name="password" class="w-full h-12 border-2 border-[#C7C7C7] p-2">
                                <div class="text-red-500 text-sm error"></div>
                            </div>
                            <button type="submit" id="btn-submit" class="w-full h-12 text-white text-center bg-[#FF424E] mt-2">Đăng ký</button>
                            <div class="social text-center mt-10">
                                <a href="/signin" class="text-blue-400">Đăng Nhập</a> | <span>Hoặc đăng nhập bằng</span>
                                <div class="mx-auto w-32 flex justify-between mt-5">
                                    <a href="">
                                        <img src="/images/face.png" alt="" class="w-14">
                                    </a>
                                    <a href="" >
                                        <img src="/images/google.png" alt="" class="w-14">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="right-side bg-gray-200 w-1/3 flex justify-center items-center">
                        <img src="/images/logou.png" class="w-[200px]" alt="">
                    </div>
                </div>
            </div>
        `;
    },
    afterRender: async () => {
        // Khai bao
        const submit = document.querySelector('#btn-submit')
        const formField = [
            "email", "phone", "password"
        ]
        const validate = function() {
            let data: any = {};
            let error = false
            const errors = document.querySelectorAll('.error')
            errors.forEach(e => {
                e.classList.add('hidden')
            })
            formField.forEach(field => {
                const element = document.getElementById(field)
                
                if(element?.value.length == 0) {
                    addError(element, "Trường dữ liệu bắt buộc")
                    error = true;
                }

                if(field == "email") {
                    if(!validator.isEmail(element?.value)) {
                        addError(element, "Định dạng email sai")
                        error = true
                    }
                }
                data[field] = element?.value
            })
            return {error, data}
        }

        const addError = function(element: HTMLElement, message: string) {
            let temp = element.nextElementSibling;
            temp.classList.remove("hidden");
            temp.textContent = message;
            // element.style.borderColor = "red";
        }

        submit.onclick = async function () {
            const {error, data} = validate()
            if(!error) {
                try {
                    const res = await register(data)
                    alert("Đăng kí thành công")
                } catch(error) {
                    alert(error.message)
                }
            }
        }
    }
}
export default signup;