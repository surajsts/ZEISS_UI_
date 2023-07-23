
/*navigation  bar*/

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar1").style.top = "0";
  } else {
    document.getElementById("navbar1").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}


/*image pop-up*/



function firstcall(){
    
setTimeout(
function showMyImage1() {
  var img = document.getElementById('image-holder');
  img.src = "first.png";
  img.style.display = 'block';
},0)
}



function secondcall(){

setTimeout(
function showMyImage2() {
var img = document.getElementById('image-holder');
img.src = "second.png";
img.style.display = 'block';
},0)
}


function thirdcall(){

 setTimeout(
function showMyImage3() {
var img = document.getElementById('image-holder');
img.src = "third.png";
img.style.display = 'block';
},0)
}

function popup() {
  var t = document.getElementsByClassName("close")[0];
  t.innerHTML = "&times;";
}

function fun() {
  var t = document.getElementById('image-holder');
  t.style.display = "none";
  var x = document.getElementsByClassName("close")[0];
  x.innerHTML = "";
}


function fun2() {
  document.getElementsByTagName("span")[0].style.backgroundColor = "white";
}
function fun3() {
  document.getElementsByTagName("span")[0].style.backgroundColor = "rgb(54, 53, 53)";
}