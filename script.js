const text_box1 = document.getElementById("text_box1");
const text_box2 = document.getElementById("text_box2");
const text_box3 = document.getElementById("text_box3");
const images = document.getElementById("images");

//slides
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3.5,
        
      },
    },
  });
});

//hover on slides


// our project section

function showImg1() {
  text_box1.style.backgroundColor = "#ED3944";
  text_box1.style.color = "white";
  text_box2.style.color = "black";
  text_box3.style.color = "black";
  text_box2.style.backgroundColor = "#F6F6F6";
  text_box3.style.backgroundColor = "#F6F6F6";
  images.src = `section-3_img2.jpg`;
}
function showImg2() {
  text_box2.style.backgroundColor = "#ED3944";
  text_box2.style.color = "white";
  text_box3.style.color = "black";
  text_box1.style.color = "black";
  text_box1.style.backgroundColor = "#F6F6F6";
  text_box3.style.backgroundColor = "#F6F6F6";
  images.src = `section-3.jpg`;
}
function showImg3() {
  text_box3.style.backgroundColor = "#ED3944";
  text_box3.style.color = "white";
  text_box1.style.color = "black";
  text_box2.style.color = "black";
  text_box2.style.backgroundColor = "#F6F6F6";
  text_box1.style.backgroundColor = "#F6F6F6";
  images.src = `section-3_img3.jpg`;
}
