// Start delete
var btn_delete = document.getElementsByClassName('btn btn-delete');
var form_delete = document.getElementById('id01');
var form_complete = document.getElementById('id02');
var okey_btn = document.getElementById('okeybtn');
var index_item_delete = 8;
var cancel = document.getElementsByClassName('cancelbtn');
var deletebtn = document.getElementsByClassName('deletebtn');

for (let i = 0; i < 9; i++) {
    btn_delete[i].addEventListener('click', function (event) {
        form_delete.style.display = 'block';
    });
}
window.onclick = function (event) {
    if (event.target == form_delete || event.target == form_complete) {
        form_delete.style.display = 'none';
        form_complete.style.display = 'none';
    }
}
cancel[0].onclick = function () {
    form_delete.style.display = 'none';
};
deletebtn[0].onclick = function(){
    var item_delete = document.getElementsByClassName('table-infor')
    item_delete[index_item_delete].remove();
    index_item_delete--;
    form_delete.style.display = 'none';
    form_complete.style.display = 'block';
}
okey_btn.onclick = function(){
    form_complete.style.display = 'none';
}
//End delete

