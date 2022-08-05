import instance from "./config"


export const cate = () => {
    return instance.get('/category')
}
export const catebyId = (id: any) => {
    return instance.get(`/category/${id}`)
}