let productListContent = `<div class="flex border-t border-b mb-6 border-gray-200 py-2">
<span class="text-gray-500">Empty Cart</span>
<span class="ml-auto text-gray-900">00.00</span>
</div>`

let totalPrice = 0;

if (localStorage.getItem("cart")){
    productListContent = "";
    let cart = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < cart.length; i++){
    let product = JSON.parse(cart[i]);
    console.log(product); 
    price= product.price.toString().slice(0,-2) + "." + product.price.toString().slice(-2);
    totalPrice += parseFloat(price);
    productListContent += `<div class="flex border-t border-b mb-6 border-gray-200 py-2">
    <span class="text-gray-500">${product.name}</span>
    <span class="ml-auto text-gray-900">${price}</span>
    </div>`
    }

}

document.getElementById("totalPrice").innerHTML = "$" + totalPrice;

console.log(totalPrice);
let productListNode = document.getElementById("productList");
productListNode.innerHTML = productListContent;

function checkout(){
    let contact;
    let products = [];
    contact = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach(product => {
        products.push(product._id)
    });
    console.log(contact)
    console.log(products)
}

let btnCheckout = document.getElementById("checkoutBtn");
btnCheckout.addEventListener("click", checkout());
