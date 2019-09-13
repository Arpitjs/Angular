export class Item {
    name: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    color: string;
    quantity: number;
    _id: number | string;
    modelNo: number;
    image: string;
    user: string;
    tags: string;
    status: string;
    createdAt: string;
    updatedAt: string;

    constructor(details: any) {
        this.name = details.name || '';
        this.description = details.description || '';
        this.brand = details.brand || '';
        this.category = details.category || '';
        this.price = details.price || '';
        this.color = details.color || '';
        this.quantity = details.price || '';
        this.modelNo = details.modelNo || '';
        this.image = details.image || '';
        this.tags = details.tags || '';
        this.status = details.status || '';
    }
}