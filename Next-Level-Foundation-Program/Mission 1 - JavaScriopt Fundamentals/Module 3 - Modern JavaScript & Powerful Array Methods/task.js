let movies = [
    { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
    { title: "Titanic", year: 1997, rating: 7.9, genre: "Romance" },
    { title: "The Matrix", year: 1999, rating: 8.7, genre: "Sci-Fi" },
    { title: "Avatar", year: 2009, rating: 7.8, genre: "Sci-Fi" },
    { title: "Notebook", year: 2004, rating: 7.8, genre: "Romance" },
];

// ১. শুধু Sci-Fi Movie, Rating অনুযায়ী বড় থেকে ছোট সাজানো

let topSiFi = movies?.filter((m) => m.genre === 'Sci-Fi')?.sort((a, b) => a.rating - b.rating)?.map((m) => `${m.title} ---> rating ---> ${m.rating}`).forEach((m) => console.log(`dekhbo ki dekhbo na ${m}`));

console.log(topSiFi);


// task
/*
let products = [
  { id: 1, title: "Mouse", price: 500, category: "Accessories", inStock: true },
  { id: 2, title: "Keyboard", price: 1200, category: "Accessories", inStock: false },
  { id: 3, title: "Monitor", price: 8000, category: "Display", inStock: true },
  { id: 4, title: "Laptop", price: 55000, category: "Computer", inStock: true },
  { id: 5, title: "Headphone", price: 1500, category: "Accessories", inStock: true }
];
শুধু In-Stock Product, Price অনুযায়ী কম থেকে বেশি সাজানো, শুধু Title+Price বের করা, টোটাল কত টাকা লাগবে স্টক আউট করতে চাইলে সেটা ক্যালকুলেট করুন।
*/


let products = [
    { id: 1, title: "Mouse", price: 500, category: "Accessories", inStock: true },
    { id: 2, title: "Keyboard", price: 1200, category: "Accessories", inStock: false },
    { id: 3, title: "Monitor", price: 8000, category: "Display", inStock: true },
    { id: 4, title: "Laptop", price: 55000, category: "Computer", inStock: true },
    { id: 5, title: "Headphone", price: 1500, category: "Accessories", inStock: true }
];

// 1. শুধু In-Stock Product
const inStockProducts = products.filter(product => product.inStock);

console.log("In-Stock Products:", inStockProducts);


// 2. Price অনুযায়ী কম থেকে বেশি সাজানো
const sortedProducts = [...inStockProducts].sort(
    (a, b) => a.price - b.price
);

console.log("Sorted Products:", sortedProducts);


// 3. শুধু Title + Price বের করা
const productInfo = sortedProducts.map(({ title, price }) => ({
    title,
    price
}));

console.log("Title + Price:", productInfo);


// 4. সব In-Stock Product-এর মোট দাম
const totalPrice = inStockProducts.reduce(
    (total, product) => total + product.price,
    0
);

console.log(`Total Price: ৳${totalPrice}`);
