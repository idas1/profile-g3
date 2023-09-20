function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// function closeNav()
// {
//     document.getElementById("mySidenav").style.width = "0px";
// }
let body = document.querySelector("body");
body.addEventListener("dblclick",function(){
    document.getElementById("mySidenav").style.width = "0px";
})


// start Edit


let form_edit = document.getElementById('id03');

let btn_edit = document.querySelectorAll('.dropdown-content a');
let nd = document.getElementById('noidung')
console.log(nd);
let cancel = document.getElementsByClassName('cancel_btn');
let save_btn= document.getElementsByClassName('save_btn');



btn_edit.forEach(link => {
    if (link.textContent == 'Edit') {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            form_edit.style.display = 'block';
        });
    }

});
cancel[0].onclick = function () {
    form_edit.style.display = 'none';
};
window.onclick = function (event) {
    if (event.target == form_edit ) {
        form_edit.style.display = 'none';
      
    }
}
save_btn[0].onclick = function () {
    var edit_nd=document.getElementById('noidung')
    console.log(edit_nd);
    edit_nd.innerHTML=nd;
    form_edit.style.display = 'none';

}



