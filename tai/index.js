function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// function closeNav()
// {
//     document.getElementById("mySidenav").style.width = "0px";
// }

let body = document.querySelector("body");

body.addEventListener("dblclick", function () {
    document.getElementById("mySidenav").style.width = "0px";
})
// Start delete
let btn_delete = document.querySelectorAll('.dropdown-content a');

let form_delete = document.getElementById('id01');
let form_complete = document.getElementById('id02');
let dropdown_content = document.getElementsByClassName('dropdown-content');
let okey_btn = document.getElementById('okeybtn');
let index_item_delete = 2;
let cancel = document.getElementsByClassName('cancelbtn');
let deletebtn = document.getElementsByClassName('deletebtn');

btn_delete.forEach(link => {
    if (link.textContent == 'Delete') {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            form_delete.style.display = 'block';
        });
    }

});

window.onclick = function (event) {
    if (event.target == form_delete || event.target == form_complete) {
        form_delete.style.display = 'none';
        form_complete.style.display = 'none';
    }
}
cancel[0].onclick = function () {
    form_delete.style.display = 'none';
};
deletebtn[0].onclick = function () {
    var item_delete = document.querySelectorAll('.col-lg-4');
    item_delete[index_item_delete].remove();
    index_item_delete--;
    form_delete.style.display = 'none';
    form_complete.style.display = 'block';
}
okey_btn.onclick = function () {
    form_complete.style.display = 'none';
}
//End delete

