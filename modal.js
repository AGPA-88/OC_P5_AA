var modalNode=document.querySelector("#modal")


function display_modalContact(){
var contact="If you wish to contact us please do via our email at contact@orinoco.com"
modalNode.innerHTML=`
<div class="modal">
    <div class="modal_content">
        <div class="close_modal">X</div>
        ` + contact + `
    </div>
</div>`

var close_modal_button=document.querySelector(".close_modal")
close_modal_button.addEventListener("click", hide_modal)

}

function display_modalAbout(){
    var about="Here at Orinoco we are true photography geeks! We love everything linked to the art of photography and cameras. We hope that you can find what you want and need in our store and, please, don't hesitate to leaves us a message if there's a specific camera that you're looking for."
    modalNode.innerHTML=`
    <div class="modal">
        <div class="modal_content">
            <div class="close_modal">X</div>
            ` + about + `
        </div>
    </div>`
    
    var close_modal_button=document.querySelector(".close_modal")
    close_modal_button.addEventListener("click", hide_modal)
    
    }

function hide_modal(e){
    console.log("Using e.currentTarget:", e.currentTarget.dataset.id);
    modalNode.innerHTML=``
    }

