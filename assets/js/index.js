const showMenu = document.getElementById("showMenu");
const hideMenu = document.getElementById("hideMenu");
var navbar = document.querySelector(".navbar");
var parent = document.querySelector(".homeText");
var hero = document.getElementById("hero");

// Show the nav-contents on click

showMenu.addEventListener("click", () => {
  if ((navbar.style.display = "none")) {
    navbar.style.display = "block";
    hideMenu.style.display = "block";
    showMenu.style.display = "none";
  }

  setTimeout(function () {});

  var show_menuAudio = new Audio("assets/sounds/woosh-sound.wav");
  show_menuAudio.volume = 0.7;
  show_menuAudio.play();
});

// Hide the Nav-contents on icon close click
hideMenu.addEventListener("click", () => {
  if ((navbar.style.display = "block")) {
    // navbar.style.display = "none"
    navbar.style.animation = "hideNav 2s linear";
    setTimeout(() => {
      navbar.style.display = "none";
      hideMenu.style.display = "none";
      showMenu.style.display = "block";
      navbar.style.animation = ""; // Reset animation
    }, 2000); // Match the duration of the animation
  }
  var hide_menuAudio = new Audio("assets/sounds/close-woosh.wav");
  hide_menuAudio.volume = 0.3;
  hide_menuAudio.play();
});

function closeNavs() {
  if ((navbar.style.display = "block")) {
    navbar.style.display = "none";
       hideMenu.style.display = "none";
       showMenu.style.display = "block";
  }
  var hide_menuAudio = new Audio("assets/sounds/close-woosh.wav");
  hide_menuAudio.volume = 0;
  hide_menuAudio.play();
}

// https://youtu.be/Z2MyXuHstIs?si=U_pxFug9zraRTgYo

// to play our videos
const laptop_videos = document.getElementById("playBtn");
laptop_videos.addEventListener("click", () => {
  alert(
    "you are being re-directed to our official YouTube Channel where you can watch all of our videos"
  );
  window.location.href = "https://youtu.be/Z2MyXuHstIs?si=U_pxFug9zraRTgYo";
});

// show more action

// products 1 (#PRODUCT ID #001)

var show_moreBtn = document.getElementById("show-More-Btn");
var show_lessBtn = document.getElementById("show-Less-Btn");
var show_MoreDiv = document.querySelector(".showMoreDiv");

show_moreBtn.addEventListener("click", () => {
  if ((show_MoreDiv.style.display = "none")) {
    show_MoreDiv.style.display = "block";
    show_MoreDiv.style.transition = "all .5s ease";
  }
  show_moreBtn.style.display = "none";
});

show_lessBtn.addEventListener("click", () => {
  if ((show_MoreDiv.style.display = "block")) {
    show_MoreDiv.style.display = "none";
  }
  show_moreBtn.style.display = "block";
});

// products 2 (#PRODUCT ID #002)

var showdiv2 = document.querySelector(".showdiv2");
var btn2 = document.querySelector(".showBtn2");
var btn2_less = document.querySelector(".lessbtn2");

btn2.addEventListener("click", () => {
  showdiv2.style.display = "block";
  btn2.style.display = "none";
  console.log(showdiv2);
});

btn2_less.addEventListener("click", () => {
  showdiv2.style.display = "none";
  btn2.style.display = "block";
});

// products 3 (#PRODUCT ID #003)

var btn3_Show = document.querySelector(".showBtn3");
var showDiv3 = document.querySelector(".moreDiv3");
var btn3_less = document.querySelector(".less3");
btn3_Show.addEventListener("click", () => {
  showDiv3.style.display = "block";
  btn3_Show.style.display = "none";
});

btn3_less.addEventListener("click", () => {
  showDiv3.style.display = "none";
  btn3_Show.style.display = "block";
});

// products 4 (#PRODUCT ID #004)

var P41ShowMore = document.querySelector(".show-btnP4");
var P41Show_Less = document.querySelector(".lessP4");
var p4MoreContents = document.querySelector(".moreDivP4");
P41ShowMore.addEventListener("click", () => {
  p4MoreContents.style.display = "block";
  P41ShowMore.style.display = "none";
});

P41Show_Less.addEventListener("click", () => {
  p4MoreContents.style.display = "none";
  P41ShowMore.style.display = "block";
});

// products 5  (#PRODUCT ID #005)
var P5SMore_Contents = document.querySelector(".moreDivP5");
var Product_5_2Show_MoreBtn = document.querySelector(".show-BtnP5");
var Product_5_2Show_lessBtn = document.querySelector(".lessP5");

Product_5_2Show_MoreBtn.addEventListener("click", () => {
  P5SMore_Contents.style.display = "block";
  Product_5_2Show_MoreBtn.style.display = "none";
});

Product_5_2Show_lessBtn.addEventListener("click", () => {
  P5SMore_Contents.style.display = "none";
  Product_5_2Show_MoreBtn.style.display = "block";
});

// Products 6 (#PRODUCT ID #006)

var products_6_3More_Contents = document.querySelector(".moreDiv6");
var btnP6_Show_More = document.querySelector(".showBtn6");
var product_6Show_lessbtn = document.querySelector(".less6");
btnP6_Show_More.addEventListener("click", () => {
  products_6_3More_Contents.style.display = "block";
  btnP6_Show_More.style.display = "none";
});
product_6Show_lessbtn.addEventListener("click", () => {
  products_6_3More_Contents.style.display = "none";
  btnP6_Show_More.style.display = "block";
});

// Products 7 (#PRODUCT ID #007)
var btnP_7 = document.querySelector(".showBtnP-7");
var P_7Show_More = document.querySelector(".moreDivP-7");
var P_7Show_lessBtn = document.querySelector(".less7");

btnP_7.addEventListener("click", () => {
  P_7Show_More.style.display = "block";
  btnP_7.style.display = "none";
});

P_7Show_lessBtn.addEventListener("click", () => {
  P_7Show_More.style.display = "none";
  btnP_7.style.display = "block";
});

// Prodcuts 8  (#PRODUCT ID #008)
var btn_8 = document.querySelector(".showBtn8");
var P8_Show_More = document.querySelector(".moreDiv8");
var P_8Show_less = document.querySelector(".less8");
btn_8.addEventListener("click", () => {
  P8_Show_More.style.display = "block";
  btn_8.style.display = "none";
});

P_8Show_less.addEventListener("click", () => {
  P8_Show_More.style.display = "none";
  btn_8.style.display = "block";
});

// Products 9  (#PRODUCT ID #009)
var btn_9 = document.querySelector(".showBtn9");
var P9_Show_More = document.querySelector(".moreDiv9");
var P_9Show_less = document.querySelector(".less9");
btn_9.addEventListener("click", () => {
  P9_Show_More.style.display = "block";
  btn_9.style.display = "none";
});

P_9Show_less.addEventListener("click", () => {
  P9_Show_More.style.display = "none";
  btn_9.style.display = "block";
});

//  Product 10  (#PRODUCT ID #010)
var btn_10 = document.querySelector(".showBtn10");
var P10_Show_More = document.querySelector(".moreDiv10");
var P_10Show_less = document.querySelector(".less10");

btn_10.addEventListener("click", () => {
   P10_Show_More.style.display = "block";
   btn_10.style.display = "none";
})

P_10Show_less.addEventListener("click", () => {
  P10_Show_More.style.display = "none";
  btn_10.style.display = "block";
});

// Product 11 (#PRODUCT ID #011)
var btn_11 = document.querySelector(".showBtn11");
var P11_Show_More = document.querySelector(".moreDiv11");
var P_11Show_less = document.querySelector(".less11");
btn_11.addEventListener("click", () => {
  P11_Show_More.style.display = "block";
  btn_11.style.display = "none";
});

P_11Show_less.addEventListener("click", () => {
  P11_Show_More.style.display = "none";
  btn_11.style.display = "block";
});

// Product 12 (#PRODUCT ID #012)

var btn_12 = document.querySelector(".showBtn12");
var P12_Show_More = document.querySelector(".moreDiv12");
var P_12Show_less = document.querySelector(".less12");

btn_12.addEventListener("click", () => {
  P12_Show_More.style.display = "block";
  btn_12.style.display = "none";
});

P_12Show_less.addEventListener("click", () => {
  P12_Show_More.style.display = "none";
  btn_12.style.display = "block";
});

// Script to handle the Newsletter form


var emailInput = document.getElementById("newsFeed");
var emailError = document.getElementById("emailError");
var submit_Newsfeedbtn = document.getElementById("subscribe-btn");

submit_Newsfeedbtn.addEventListener("click", (event) => {
  var email = emailInput.value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    emailError.innerText = "Error - Invalid Email Address";
    emailError.style.color = "#ffaaaa";
    event.preventDefault();
  } else {
    emailError.innerText = "Thanks For Subscribing ✔✔ ";
    emailError.style.color = "#caffaa"
    emailInput.value = ""
    setTimeout(() => {
      emailError.innerText = "";
    }, 7000);
  }
});

