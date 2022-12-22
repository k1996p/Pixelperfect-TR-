function hover(){
 var element = document.getElementById("location")
 element.src = "images/icon-location-blue.svg"
}
function hoverout(){
 var element = document.getElementById("location")
 element.src = "images/icon-location.svg"
}
function hover1(){
 var element = document.getElementById("search")
 element.src = "images/icon-search-blue.svg"
}
function hoverout1(){
 var element = document.getElementById("search")
 element.src = "images/icon-search.svg"
}
function hover2(){
 var element = document.getElementById("account")
 element.src = "images/icon-account-blue.svg"
}
function hoverout2(){
 var element = document.getElementById("account")
 element.src = "images/icon-account.svg"
}
function hover3(){
 var element = document.getElementById("cart")
 element.src = "images/icon-cart-blue.svg"
}
function hoverout3(){
 var element = document.getElementById("cart")
 element.src = "images/icon-cart.svg"
}
/* mobile view open/close nav */
function openNav() {
  var element = document.getElementById("nav");
  element.classList.remove("hidetrnav");
}

function closeNav() {
  var element = document.getElementById("nav");
  element.classList.add("hidetrnav");
}
/* header nav dropdown */
var dropdown = document.getElementsByClassName("dropbtn");
 var i;
 for (i = 0; i < dropdown.length; i++) {
   dropdown[i].addEventListener("click", function () {
     this.children[0].classList.toggle("btn-li");
     this.children[1].classList.toggle("downarrow");
     var dropdownContent = this.nextElementSibling;
     dropdownContent.classList.toggle("opendropdown");
   });
 }

/* footer nav dropdown */
var footerdropdown = document.getElementsByClassName("footer-text");
var i;
for (i = 0; i < footerdropdown.length; i++) {
    footerdropdown[i].addEventListener("click", function () {
    this.children[1].classList.toggle("fdarrow");
    var dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle("footerul1");
  });
}
/* filtter nav dropdown */
var filterdropdown = document.getElementsByClassName("tr-options");
var i;
for (i = 0; i < filterdropdown.length; i++) {
  filterdropdown[i].addEventListener("click", function () {
    this.children[1].classList.toggle("up");
    var dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle("open");
  });
}
/* scroll up button */
var mybutton = document.getElementById("scrollup");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.documentElement.scrollTop > 360) {
    mybutton.style.display = "block"
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.documentElement.scrollTop = 0;
}
function openFilter() {
  var element = document.getElementById("tabfilter");
  element.classList.add("in");
}
function openSort() {
  var element = document.getElementById("tabsort");
  element.classList.add("in");
}
function closeFilter() {
  var element = document.getElementById("tabfilter");
  element.classList.remove("in");
}
function closeSort() {
  var element = document.getElementById("tabsort");
  element.classList.remove("in");
}