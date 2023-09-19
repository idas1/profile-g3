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