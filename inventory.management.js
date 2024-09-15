// Task 1
var inventory = ['name', 'price', 'quantity', 'lowStockLevel'];
const lowestStock = inventory[inventory.length-1];
// Task 2
function displayProductDetails() {
    const status = product.quantity <= product.lowStockLevel ? "Low Stock":"In Stock"
    return `{product.name} is {status}`
}
//Task 3
function updateStock(){
    const unitsSold = unitsSold-quanitity <= product.lowStockLevel ? "Low Stock":"In Stock"
    console.log("low stock")
}
