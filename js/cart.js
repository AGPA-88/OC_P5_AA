let productListContent = `<div class="flex border-t border-b mb-6 border-gray-200 py-2">
<span class="text-gray-500">Empty Cart</span>
<span class="ml-auto text-gray-900">00.00</span>
</div>`

let totalPrice = 0;

if (localStorage.getItem("cart") && localStorage.getItem("cart") != "[]"){
    console.log(Array.from(localStorage.getItem("cart")));
    productListContent = "";
    let cart = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < cart.length; i++){
    let product = cart[i];
    console.log(product); 
    quantity = localStorage.getItem(product._id);
    //price= product.price
    let price = 1;
    price = parseFloat(product.quantity) * parseFloat(product.price);
    price= price.toString().slice(0,-2) + "." + price.toString().slice(-2);
    totalPrice += parseFloat(price);
    productListContent += `<div class="carteLine flex border-t border-b mb-6 border-gray-200 py-2">
    <div class="nameFixedSize text-gray-500">${product.name}</div>
    <span class="text-gray-500">${product.quantity}</span>
    <span class="text-gray-900"><i title="remove product #`+ i +`" class="fa fa-trash-o iconRemove" aria-hidden="true"></i>$${price}</span>
    </div>`
    }

}

document.getElementById("totalPrice").innerHTML = "$" + totalPrice;

console.log(totalPrice);
let productListNode = document.getElementById("productList");
productListNode.innerHTML = productListContent;
let productRemoves = document.querySelectorAll(".iconRemove");
console.log(productRemoves);
productRemoves.forEach(productRemove => productRemove.addEventListener("click", removeProduct));

function removeProduct(event){
  alert(event.target.title)
  console.log(event)
  let idToRemove = parseInt(event.target.title.split("#")[1]);
  let cart = new Array();
  cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(idToRemove, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.location.href="cart.html"
};

function checkout(total){
    let contact;
    let products = [];

    contact = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value
    }
    let cart = new Array();
    cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);

    //cart.forEach(function(product) {
    //     products.push(JSON.parse(product)._id)
    //     console.log(product)
    // });
    for(var k in cart) {
      console.log(k);
      console.log(cart[k]._id);
      products.push(cart[k]._id);
    };

    console.log(contact)
    console.log(products)
    
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if(this.status >=200 && this.status <300){
      let response = JSON.parse(this.responseText);
      console.log(response);  
      window.location ="confirmation.html?orderId=" + response.orderId + "&total=" + total;

    }
  };
  let url="http://localhost:3000/api/cameras/order"
  xhttp.open("POST", url);
  xhttp.setRequestHeader("Content-type", "application/json");
  let data = JSON.stringify({"contact": contact,"products": products})
  if (contact.firstName != "" && contact.lastName != "" && contact.email != "" && contact.address != "" && contact.city != ""){
    xhttp.send(data);
  } else{
    alert("please all field are required !");
  }
 
}

let btnCheckout = document.getElementById("checkoutBtn");
btnCheckout.addEventListener("click", (e) => { 
    e.preventDefault();
    checkout(totalPrice);
 }
);
