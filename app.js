/* For Mobile/Tablet Devices. Reveal a functional
/* button that toggles the nav bar when clicked. */

const button = document.getElementsByClassName("reveal-nav");
const navBar = document.getElementsByClassName("main-nav");
const navParent = document.querySelector('#navParent');
const children = navParent.children;
var navArr = Array.from(children);

// add nav button functionality
button[0].addEventListener('click', () => {
  if (navBar[0].style.display === "flex") {
    navBar[0].style.display = "none";
  } else {
    navBar[0].style.display = "flex";
  }
});

function myFunction(x) {
    if (x.matches) { // If media query matches
        navBar[0].style.display = "flex";
    } else {
        navBar[0].style.display = "none";
    }
}

var x = window.matchMedia("(min-width: 767px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


function backToTopArrow() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        // document.getElementById("arrow").style = "display: block";
        $("#arrow").fadeIn("slow");

    } else {
        // document.getElementById("arrow").style = "display: none";
        $("#arrow").fadeOut("slow");

    }
}

window.onscroll = function() {backToTopArrow()};

// on hovering nav links, color them accordingly.
// navArr.forEach(li => {
//   li.firstElementChild.addEventListener('mouseover', (e) => {
//     e.target.style.backgroundColor ="darkgrey";
//   });
//   li.firstElementChild.addEventListener('mouseout', (e) => {
//     e.target.style.backgroundColor ="#36383a";
//   });
//
//   li.firstElementChild.addEventListener('click', (e) => {
//     navArr.forEach(li => li.firstElementChild.style.backgroundColor = "inherit");
//       e.target.style.backgroundColor = "darkgrey";
//   });
// });

//smooth scrolling

$("#arrow").click(function() {

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section1").offset().top
    }, 2000);
});

$("#homepageButton").click(function(e) {
  e.preventDefault();
  navArr.forEach(li => li.firstElementChild.className = "dark-grey hover");
  e.target.className = "clicked";
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#section1").offset().top
  }, 2000);
});

$("#aboutusButton").click(function(e) {
    e.preventDefault();
    navArr.forEach(li => li.firstElementChild.className = "dark-grey hover");
    e.target.className = "clicked";
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#section2").offset().top - 70
  }, 2000);
});

$("#servicesButton").click(function(e) {
    e.preventDefault();
    navArr.forEach(li => li.firstElementChild.className = "dark-grey hover");
    e.target.className = "clicked";
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#services").offset().top - 70
  }, 2000);
});

$("#contactButton").click(function(e) {
    e.preventDefault();
    navArr.forEach(li => li.firstElementChild.className = "dark-grey hover");
    e.target.className = "clicked";
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#contact").offset().top - 70
  }, 2000);
});

//end smooth scrollTop

//highlight on hover
// $(".main-nav a").hover(function(){
//     $(this).addClass("highlight").fadeIn("slow");
// },
// function(){
//     $(this).removeClass("highlight").fadeIn("slow");
// });
//
// $(".main-nav a").hover(
// function() {
// $(this).stop().animate({"background-color": "pink"}, "slow");
// },
// function() {
// $(this).stop().animate({"background-color": "blue)"}, "slow");
// });

// });

//highlight on window position
// $(window).scroll(function() {
//     var windscroll = $(window).scrollTop();
//     if (windscroll) {
//         $('.scroll-section').each(function(i) {
//             if ($(this).position().top <= windscroll + 250) {
//                 $('nav li a.active').removeClass('active');
//                 $('nav li a').eq(i).addClass('active');
//             }
//         });
//
//     } else {
//         $('nav li a.active').removeClass('active');
//         $('nav li a:first').addClass('active');
//     }
//
// }).scroll();
