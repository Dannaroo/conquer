/* For Mobile/Tablet Devices. Reveal a functional
/* button that toggles the nav bar when clicked. */

const button = document.getElementsByClassName("reveal-nav");
const navBar = document.getElementsByClassName("main-nav");

button[0].addEventListener('click', () => {
  if (navBar[0].style.display === "flex") {
    navBar[0].style.display = "none";
  } else {
    navBar[0].style.display = "flex";
  }
});

function backToTopArrow() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("arrow").style = "display: block";
        console.log("1")
    } else {
        document.getElementById("arrow").style = "display: none";
        console.log("2")
    }
}

window.onscroll = function() {backToTopArrow()};
