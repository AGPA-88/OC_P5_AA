function displayProducts(){
    console.log("Display lister product")
    let productList=document.querySelector("#productList");
    let content="";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           //document.getElementById("demo").innerHTML = xhttp.responseText;
           console.log(xhttp.responseText)
           let products= JSON.parse(xhttp.response)
           console.log(products)
           
           products.forEach((product) => {
            let price= product.price.toString().slice(0,-2) + "." + product.price.toString().slice(-2);
               content +=`<div class="xl:w-1/4 md:w-1/2 p-4">
               <div class="flex flex-col items-center justify-center max-w-sm mx-auto">
                   <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style="background-image: url('${product.imageUrl}')"></div>
           
                   <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                       <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">${product.name}</h3>
                       
                       <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                           <span class="font-bold text-gray-800 dark:text-gray-200">${price}$</span>
                           <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"><a href="product.html?id=${product._id}">Check More</a></button>
                       </div>
                   </div>
               </div>
           </div>`             
           });

           productList.innerHTML=content;
           
        }
    };
    xhttp.open("GET", "http://localhost:3000/api/cameras/", true);
    xhttp.send();
    
}

displayProducts();

