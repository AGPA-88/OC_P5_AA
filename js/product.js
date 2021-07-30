var product;

function displayProduct(idProduct) {
    let productSection=document.querySelector("#product");
    let content="";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           //document.getElementById("demo").innerHTML = xhttp.responseText;
           product= JSON.parse(xhttp.response);
           localStorage.setItem("product", JSON.stringify(product));
           let options ="";
           product.lenses.forEach( (lense) => {
            options += `<option>${lense}</option>`;
           } );

                price= product.price.toString().slice(0,-2) + "." + product.price.toString().slice(-2);

               content +=`<div class="container px-5 py-24 mx-auto">
               <div class="lg:w-4/5 mx-auto flex flex-wrap">
                 <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="${product.imageUrl}">
                 <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                     <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${product.name}</h1>
                   <h2 class="text-sm title-font text-gray-500 tracking-widest">Lenses: ${product.lenses}</h2>
                   <div class="flex mb-4">
                     <span class="flex items-center">
                       <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                       </svg>
                       <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                       </svg>
                       <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                       </svg>
                       <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                       </svg>
                       <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                       </svg>
                       <span class="text-gray-600 ml-3">4 Reviews</span>
                     </span>
                     <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                       <a class="text-gray-500">
                         <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                           <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                         </svg>
                       </a>
                       <a class="text-gray-500">
                         <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                           <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                         </svg>
                       </a>
                       <a class="text-gray-500">
                         <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                           <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                         </svg>
                       </a>
                     </span>
                   </div>
                   <p class="leading-relaxed">${product.description}</p>
                   <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                     <div class="flex ml-6 items-center">
                       <span class="mr-3">Lense Size</span>
                       <div class="relative">
                         <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base pl-3 pr-10">
                          ${options}
                         </select>
                         <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                             <path d="M6 9l6 6 6-6"></path>
                           </svg>
                         </span>
                       </div>
                     </div>
                   </div>
                   <div class="flex">
                     <span class="title-font font-medium text-2xl text-gray-900">$${price}</span>
                     <button id="addToCartBtn" class="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Add to Cart</button>
                   </div>
                 </div>
               </div>
             </div>`;

           productSection.innerHTML += content;
           let addToCartBtn = document.getElementById("addToCartBtn");
           addToCartBtn.addEventListener("click", addToCart);
           
        }
    };
    xhttp.open("GET", "http://localhost:3000/api/cameras/" + idProduct, true);
    xhttp.send();
    return product;
}
var url=document.location.href;
var id=url.split("=")[1];

product = displayProduct(id);

function addToCart (){
  let product = JSON.parse(localStorage.getItem("product"));
  let productInCart = localStorage.getItem("product"); 
  let cart = new Array();
  let blueCircle = document.querySelector("#blueCircle");
  blueCircle.style.visibility = "visible";
  if (localStorage.getItem("cart")){
    cart = JSON.parse(localStorage.getItem("cart"));
    let index = cart.findIndex(p => p._id === product._id);
    if(index == -1) {     
      product.quantity = 1;
      cart.push(product);
    } else{  
      cart[index].quantity += 1;
    }

  }
  else {
    cart = [];
    product.quantity = 1;
    cart.push(product);
  }
  
  console.log(productInCart);
  localStorage.setItem("cart", JSON.stringify(cart));
}
