// Task 1
var inventory = ['name', 'price', 'quantity', 'lowStockLevel'];
const lowestStock = inventory[inventory.length-1];
// Task 2
function displayProductDetails() {
    const status = product.quantity <= product.lowStockLevel ? "Low Stock":"In Stock"
    return `{product.name} is {status}`
};
// Task 3
function updateStock(){
    const unitsSold = unitsSold-quanitity <= product.lowStockLevel ? "Low Stock":"In Stock"
    console.log("low stock")
};
// Task 4
function checklowStock() {
    for(let i <= inventory.length; i++)
console.log("lowStockLevel");
};
// Task 5
function calculateInventoryValue () {
    return inventory.reduce ((totalValue, product) => {
        return totalValue + (product.price * product.quantity)
    },);
};
const inventoryTotalValue = calculateInventoryValue();
console.log(`The total inventory value is $${inventoryTotalValue}`); 
// Task 6
function processSale(product, unitsSold){
    var result = inventory.find(({name})=> name==product);
    if(inventory.includes(product)) {
        return `Product not in inventory`;
    } else {
        return updateStock(result, unitSold);
    }
    }
console.log(processSale("Tablet",1));