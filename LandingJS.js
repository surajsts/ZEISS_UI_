/*<----------------------------------------------------{Scroll Top Button}------------------------------------>*/

var mybutton = document.getElementById("myBtn");

document.documentElement.scrollTop=window.pageYOffset;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop >=20) {
    document.getElementById("myBtn").style.display = "block";
  } 
  else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});       //scroll to top
}


/*<----------------------------------------------------{Navbar}------------------------------------>*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
