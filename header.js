var modalNode=document.querySelector("#modal")


function display_modalContact(){
var contact="If you wish to contact us please do via our email at"
var mail = "contact@orinoco.com"
modalNode.innerHTML=`
<div class="modal">
    <div class="modal_content">
        <div class="close_modal"><i class="fa fa-times" aria-hidden="true"></i></div>
        <div class="modal_text"> ` + contact + ` </div>
        <div class="modal_mail"> <a href="mailto:contact@orinoco.com"> ` + mail + ` </div>
    </div>
</div>`

var close_modal_button=document.querySelector(".close_modal")
close_modal_button.addEventListener("click", hide_modal)

}

function display_modalAbout(){
    var about="Here at Orinoco we are true photography geeks!"
    var about_more = "We love everything linked to the art of photography and cameras. We hope that you can find what you want and need in our store and, please, don't hesitate to leaves us a message if there's a specific camera that you're looking for."
    modalNode.innerHTML=`
    <div class="modal">
        <div class="modal_content">
            <div class="close_modal"><i class="fa fa-times" aria-hidden="true"></i></div>
            <div class="about"> ` + about + ` </div>
            <div class="about_more"> ` + about_more + ` </div>
        </div>
    </div>`
    
    var close_modal_button=document.querySelector(".close_modal")
    close_modal_button.addEventListener("click", hide_modal)
    
    }

function hide_modal(e){
    console.log("Using e.currentTarget:", e.currentTarget.dataset.id);
    modalNode.innerHTML=``
    }

