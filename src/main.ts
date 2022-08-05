import './style.css'
import typescriptLogo from './typescript.svg'
import Navigo from 'navigo'
import HomePage from './pages/Home'
import AddProductPage from './pages/Admin/Product/add'
import EditProductPage from './pages/Admin/Product/edit'
import AdminPage from './pages/Admin/adminPage'
import signin from './pages/register/signin'
import signup from './pages/register/signup'
import CartPage from './pages/Home/cart'
import DetailProduct from './pages/Home/detail'

const router = new Navigo('/', {linksSelector: "a"})

export type ComponentBase = {
  render: (id:any) => Promise<string>;
  afterRender?: () => void
}

const print = async (component: ComponentBase,id:ComponentBase, params?: any) => {
  document.getElementById('app').innerHTML = await component.render(id)
  if(component.afterRender) {
    component.afterRender(id)
  }
}

router.on({
  "/": () => {
    print(HomePage)
  },
  "/product/:id": (data: any) => {
    const id = data.data.id
    print(DetailProduct, id)
  },

  "/admin": () => {
    print(AdminPage)
  },
  "/admin/products/add": () => {
    print(AddProductPage)
  },
  '/admin/product/edit/:id': (data: any) => {
    const id = +data.data.id
    console.log(id);
    
    print(EditProductPage, id)
  },

  "/signin": () => {
    print(signin)
  },
  "/signup": () => {
    print(signup)
  },
  "/cart": () => {
    print(CartPage)
  },
})
router.resolve()