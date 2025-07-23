export class CartService {
    static products = [
        {
            id: "AA001",
            name: "Apple Watch",
            imageUrl: "https://m.media-amazon.com/images/I/61MCwIFvKuL._AC_CR0%2C0%2C0%2C0_SX750_.jpg",
            price: 1800,
            qty: 1
        },
        {
            id: "AA002",
            name: "Mi Watch",
            imageUrl: "https://m.media-amazon.com/images/I/61I431q8rhL.jpg",
            price: 1200,
            qty: 1
        },
        {
            id: "AA003",
            name: "Oppo Watch",
            imageUrl: "https://m.media-amazon.com/images/I/618sHIqH+VL._AC_UF1000,1000_QL80_.jpg",
            price: 1400,
            qty: 1
        },
        {
            id: "AA004",
            name: "Samsung Watch",
            imageUrl: "https://m.media-amazon.com/images/I/71nZ497gYtL._AC_UF1000,1000_QL80_.jpg",
            price: 1900,
            qty: 1
        },
        {
            id: "AA005",
            name: "Nokia Watch",
            imageUrl: "https://m.media-amazon.com/images/I/71nZ497gYtL._AC_UF1000,1000_QL80_.jpg",
            price: 1100,
            qty: 1
        }
    ];

    static getAllProducts() {
        return CartService.products;
    }
}