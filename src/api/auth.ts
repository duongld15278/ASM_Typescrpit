import User from "../model/auth";
import instance from "./config";

export const register = (user: User) => {
    const url = "/register"
    return instance.post(url, user)
}

export const login = (user: User) => {
    const url = "/login"
    return instance.post(url, user)
}

export const infoUser = (token: string) => {
    const url = `/infoUser/${token}`
    return instance.get(url)
}