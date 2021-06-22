var modalNode=document.querySelector("#modal")


function display_modal(){
var banana="If you wish to contact us please do via our email at contact@orinoco.com"
modalNode.innerHTML=`
<div class="modal">
    <div class="modal_content">
        <div class="close_modal">X</div>
        ` + banana + `
    </div>
</div>`

var close_modal_button=document.querySelector(".close_modal")
close_modal_button.addEventListener("click", hide_modal)

}

function hide_modal(e){
    console.log("Using e.currentTarget:", e.currentTarget.dataset.id);
    modalNode.innerHTML=``
    }

