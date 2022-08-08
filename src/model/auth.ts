class User {
    email: string;
    phone: Number;
    password: string;
    role: Number;
    constructor(email: string, phone: Number, password: string, role: Number) {
        this.email = email
        this.phone = phone
        this.password = password
        this.role = role
    }
}

export default User
