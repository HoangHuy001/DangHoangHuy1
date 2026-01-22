// ============================================
// QUẢN LÝ SẢN PHẨM - JAVASCRIPT EXERCISES
// ============================================

// Câu 1: Khai báo constructor function Product để tạo đối tượng sản phẩm
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thưởc tối thiểu 2 danh mục khác nhau
const products = [
    new Product(1, "Laptop Dell", 15000000, 5, "Electronics", true),
    new Product(2, "iPhone 15", 20000000, 8, "Electronics", true),
    new Product(3, "Áo thun nam", 200000, 50, "Clothing", true),
    new Product(4, "Quần jeans", 300000, 30, "Clothing", true),
    new Product(5, "Tai nghe Sony", 25000000, 12, "Electronics", true),
    new Product(6, "Mũ lưỡi trai", 150000, 20, "Accessories", true)
];

// Câu 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
const productInfo = products.map(product => ({
    name: product.name,
    price: product.price
}));

console.log("Câu 3 - Thông tin sản phẩm:");
console.log(productInfo);

// Câu 4: Lọc các sản phẩm còn hàng trong kho (quantity > 0)
const inStockProducts = products.filter(product => product.quantity > 0);
console.log("Câu 4 - Sản phẩm còn hàng:");
console.log(inStockProducts);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
const hasExpensiveProduct = products.some(product => product.price >= 30000000);
console.log("Câu 5 - Có sản phẩm giá >= 30.000.000:", hasExpensiveProduct);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có dạng được bán (isAvailable = true) hay không
const allAccessoriesAvailable = products.filter(p => p.category === "Accessories")
                                        .every(p => p.isAvailable === true);
console.log("Câu 6 - Tất cả Accessories đều có sẵn:", allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
const totalInventoryValue = products.reduce((sum, product) => {
    return sum + (product.price * product.quantity);
}, 0);
console.log("Câu 7 - Tổng giá trị kho hàng:", totalInventoryValue.toLocaleString("vi-VN") + " VNĐ");

// Câu 8: Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("Câu 8 - Danh sách sản phẩm:");
for (const product of products) {
    const status = product.isAvailable ? "Còn hàng" : "Hết hàng";
    console.log(`${product.name} - ${product.category} - ${status}`);
}

// Câu 9: dùng for...in để:
console.log("Câu 9 - Sử dụng for...in:");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
const availableProductNames = products
    .filter(product => product.isAvailable && product.quantity > 0)
    .map(product => product.name);
console.log("Câu 10 - Sản phẩm đang bán và còn hàng:", availableProductNames);