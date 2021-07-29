let productListContent = `<div class="flex border-t border-b mb-6 border-gray-200 py-2">
<span class="text-gray-500">Empty Cart</span>
<span class="ml-auto text-gray-900">00.00</span>
</div>`

let totalPrice = 0;

if (localStorage.getItem("cart") && localStorage.getItem("cart") != "[]"){
    productListContent = "";
    //GET the cart
    let cart = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < cart.length; i++){
    //GET one product in cart  
    let product = cart[i];
    quantity = localStorage.getItem(product._id);
    let price = 1;
    price = parseFloat(product.quantity) * parseFloat(product.price);
    price= price.toString().slice(0,-2) + "." + price.toString().slice(-2);
    totalPrice += parseFloat(price);
    // BUILD HTML line
    productListContent += `<div class="carteLine flex border-t border-b mb-6 border-gray-200 py-2">
    <div class="nameFixedSize text-gray-500">${product.name}</div>
    <span class="text-gray-500">${product.quantity}</span>
    <span class="text-gray-900"><i title="remove product #`+ i +`" class="fa fa-trash-o iconRemove" aria-hidden="true"></i>$${price}</span>
    </div>`
    }

}

// innerHTML (price total)
document.getElementById("totalPrice").innerHTML = "$" + totalPrice;

// innerHTML (product lines)
let productListNode = document.getElementById("productList");
productListNode.innerHTML = productListContent;
let productRemoves = document.querySelectorAll(".iconRemove");
productRemoves.forEach(productRemove => productRemove.addEventListener("click", removeProduct));

//Remove product from cart
function removeProduct(event){
  alert(event.target.title)
  let idToRemove = parseInt(event.target.title.split("#")[1]);
  let cart = new Array();
  cart = JSON.parse(localStorage.getItem("cart"));
  cart.splice(idToRemove, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.location.href="cart.html"
};

// 
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

    for(var k in cart) {
      products.push(cart[k]._id);
    };

    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        if(this.status >=200 && this.status <300){
      let response = JSON.parse(this.responseText);
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

let btnOrder = document.getElementById("order");
btnOrder.addEventListener("click", (e) => { 
  e.preventDefault();
  document.getElementById("orderInformation").style.visibility="visible";
  document.location.href="#orderInformation";
}
);