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
});

function viewInfo() {
  var block = document.getElementById("block");
  var titP = document.querySelector(".info");
  console.log(titP);
  var paragraph = titP.textContent;

  // Lấy thẻ <p> trong block và gán nội dung cho nó
  var pElement = block.querySelector("p");
  pElement.textContent = paragraph;

  if (block.classList.contains("hidden")) {
    block.classList.remove("hidden");
  } else {
    block.classList.add("hidden");
  }
}

function closeBlock() {
  var block = document.getElementById("block");
  block.classList.add("hidden");
}
