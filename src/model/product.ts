class Product {
    name: string;
    price: number;
    sale: number;
    image: string;
    category: string;
    feature: string;
    longDesc: string;
    shortDesc: string;
    id?: string;
    isDelete?: boolean;
    constructor(
        name: string,
        price: number,
        image: string,
        category: string,
        feature: string,
        longDesc: string,
        sale:number,
        shortDesc: string,
        id: string,
    ) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.sale = sale;
        this.category = category;
        this.feature = feature;
        this.longDesc = longDesc;
        this.shortDesc = shortDesc;
        this.id = id;
    }
}

export default Product