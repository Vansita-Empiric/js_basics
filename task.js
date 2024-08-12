let data = [
    {
        "product_id": "1001",
        "name": "Wireless Headphones",
        "description": "High quality wireless headphones with noise-cancellation feature.",
        "price": 99.99,
        "currency": "USD",
        "in_stock": true,
        "category": "Electronics",
        "brand": "SoundWave",
        "ratings": 4.5,
        "reviews": 120,
        "images": [
            "https://example.com/images/headphones1.jpg",
            "https://example.com/images/headphones2.jpg"
        ],
        "specifications": {
            "battery_life": "20 hours",
            "connectivity": "Bluetooth 5.0",
            "weight": "250g"
        }
    },
    {
        "product_id": "1002",
        "name": "Smartphone",
        "description": "Latest model smartphone with stunning display and powerful performance.",
        "price": 799.99,
        "currency": "USD",
        "in_stock": false,
        "category": "Mobile Phones",
        "brand": "TechMobile",
        "ratings": 4.7,
        "reviews": 250,
        "images": [
            "https://example.com/images/smartphone1.jpg",
            "https://example.com/images/smartphone2.jpg"
        ],
        "specifications": {
            "screen_size": "6.5 inches",
            "storage": "128GB",
            "camera": "12MP"
        }
    },
    {
        "product_id": "1003",
        "name": "Running Shoes",
        "description": "Comfortable and durable running shoes suitable for all terrains.",
        "price": 59.99,
        "currency": "USD",
        "in_stock": true,
        "category": "Footwear",
        "brand": "RunFast",
        "ratings": 4.3,
        "reviews": 80,
        "images": [
            "https://example.com/images/shoes1.jpg",
            "https://example.com/images/shoes2.jpg"
        ],
        "specifications": {
            "size": "8-12",
            "color": "Black",
            "material": "Mesh"
        }
    },
    {
        "product_id": "1004",
        "name": "Smart Watch",
        "description": "Feature-rich smart watch with health tracking and notification alerts.",
        "price": 199.99,
        "currency": "USD",
        "in_stock": true,
        "category": "Wearables",
        "brand": "WristTech",
        "ratings": 4.6,
        "reviews": 95,
        "images": [
            "https://example.com/images/watch1.jpg",
            "https://example.com/images/watch2.jpg"
        ],
        "specifications": {
            "battery_life": "48 hours",
            "water_resistant": "Yes",
            "compatibility": "iOS and Android"
        }
    },
    {
        "product_id": "1005",
        "name": "Gaming Laptop",
        "description": "High performance gaming laptop with powerful graphics and fast processor.",
        "price": 1499.99,
        "currency": "USD",
        "in_stock": false,
        "category": "Computers",
        "brand": "GamerPro",
        "ratings": 4.8,
        "reviews": 45,
        "images": [
            "https://example.com/images/laptop1.jpg",
            "https://example.com/images/laptop2.jpg"
        ],
        "specifications": {
            "processor": "Intel i7",
            "ram": "16GB",
            "storage": "1TB SSD"
        }
    }
]
// console.log("Task 1:-");
// const task1 = data.map( (val) =>  {
//     console.log(val.name) 
//     return val.specifications} )
// console.log(task1);
// console.log("---------------------------------------");

// console.log("Task 2:-");
// const task2 = data.filter( (item) => {
//         if(item.in_stock) {
//             return item
//         }
// }) 
// console.log(task2);   
// console.log("---------------------------------------");

console.log("Task 3:-");
const task3 = data.filter( (item) => {
            if(item.reviews>100 && item.in_stock) {
                return item
            }
    }) 
    console.log(task3);