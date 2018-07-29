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
        // document.getElementById("arrow").style = "display: block";
        $("#arrow").fadeIn("slow");

    } else {
        // document.getElementById("arrow").style = "display: none";
        $("#arrow").fadeOut("slow");

    }
}

window.onscroll = function() {backToTopArrow()};

//smooth scrolling

$("#arrow").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section1").offset().top
    }, 2000);
});

$("#homepageButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section1").offset().top
    }, 2000);
});

$("#aboutusButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section2").offset().top
    }, 2000);
});

$("#servicesButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#services").offset().top
    }, 2000);
});

$("#contactButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact").offset().top
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

$(".main-nav a").hover(
function() {
$(this).stop().animate({"background-color": "pink"}, "slow");
console.log('1');
},
function() {
$(this).stop().animate({"background-color": "blue)"}, "slow");
console.log('2');
});

// });

//highlight on window position
$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll) {
        $('.scroll-section').each(function(i) {
            if ($(this).position().top <= windscroll + 250) {
                $('nav li a.active').removeClass('active');
                $('nav li a').eq(i).addClass('active');
            }
        });

    } else {
        $('nav li a.active').removeClass('active');
        $('nav li a:first').addClass('active');
    }

}).scroll();
