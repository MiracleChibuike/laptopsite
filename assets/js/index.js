const showMenu = document.getElementById("showMenu");
const hideMenu = document.getElementById("hideMenu");
var navbar = document.querySelector(".navbar");
var parent = document.querySelector(".homeText");
var hero = document.getElementById("hero");

// Show the nav-contents on click

showMenu.addEventListener("click", ()=>{
    if (navbar.style.display = "none") {
        navbar.style.display = "block";
        hideMenu.style.display = "block";
        showMenu.style.display = "none"
    }
    
   setTimeout(function () {
        
    })

    var show_menuAudio = new Audio("assets/sounds/woosh-sound.wav");
    show_menuAudio.volume = 0.7;
    show_menuAudio.play();
});

// Hide the Nav-contents on icon close click
hideMenu.addEventListener("click", ()=>{
    if (navbar.style.display = "block") {
        navbar.style.display = "none";
         hideMenu.style.display = "none";
         showMenu.style.display = "block";
    }
    var hide_menuAudio = new Audio("assets/sounds/close-woosh.wav");
    hide_menuAudio.volume = 0.3;
    hide_menuAudio.play();
})

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
laptop_videos.addEventListener("click", ()=>{
    alert("you are being re-directed to our official YouTube Channel where you can watch all of our videos")
    window.location.href = "https://youtu.be/Z2MyXuHstIs?si=U_pxFug9zraRTgYo";
})

// show more action
var show_moreBtn = document.getElementById("show-More-Btn");
var show_lessBtn = document.getElementById("show-Less-Btn");
var show_MoreDiv = document.querySelector(".showMoreDiv");

show_moreBtn.addEventListener("click", ()=>{
    if (show_MoreDiv.style.display = "none") {
        show_MoreDiv.style.display ="block";
        show_MoreDiv.style.transition = "all .5s ease"
    }
    show_moreBtn.style.display = "none"
});

show_lessBtn.addEventListener("click", ()=>{
    if (show_MoreDiv.style.display = "block") {
        show_MoreDiv.style.display = "none"
    };
    show_moreBtn.style.display = "block";
})

var showdiv2 = document.querySelector(".showdiv2");
var btn2 = document.querySelector(".showBtn2");
var btn2_less = document.querySelector(".lessbtn2");

btn2.addEventListener("click", ()=>{
    showdiv2.style.display = "block";
    btn2.style.display = "none"
    console.log(showdiv2)
});

btn2_less.addEventListener("click", ()=>{
    showdiv2.style.display = "none";
    btn2.style.display = "block"
});

var btn3_Show = document.querySelector(".showBtn3");
var showDiv3 = document.querySelector(".moreDiv3");
var btn3_less = document.querySelector(".less3");
btn3_Show.addEventListener("click", () =>{
    showDiv3.style.display = "block";
    btn3_Show.style.display = "none"
});

btn3_less.addEventListener("click", () => {
  showDiv3.style.display = "none";
  btn3_Show.style.display = "block";
});

// products 4

var P41ShowMore = document.querySelector(".show-btnP4");
var P41Show_Less = document.querySelector(".lessP4");
var p4MoreContents = document.querySelector(".moreDivP4");
P41ShowMore.addEventListener("click", () => {
   p4MoreContents.style.display = "block";
   P41ShowMore.style.display = "none"
});

P41Show_Less.addEventListener("click", () => {
   p4MoreContents.style.display = "none";
   P41ShowMore.style.display = "block";
});

// products 5
var P5SMore_Contents = document.querySelector(".moreDivP5");
var Product_5_2Show_MoreBtn = document.querySelector(".show-BtnP5");
var Product_5_2Show_lessBtn = document.querySelector(".lessP5");

Product_5_2Show_MoreBtn.addEventListener("click", () => {
     P5SMore_Contents.style.display = "block";
     Product_5_2Show_MoreBtn.style.display = "none";
})

Product_5_2Show_lessBtn.addEventListener("click", () => {
  P5SMore_Contents.style.display = "none";
  Product_5_2Show_MoreBtn.style.display = "block";
});

// Products 6

var products_6_3More_Contents = document.querySelector(".moreDiv6");
var btnP6_Show_More = document.querySelector(".showBtn6");
var product_6Show_lessbtn = document.querySelector(".less6");
btnP6_Show_More.addEventListener("click", () => {
    products_6_3More_Contents.style.display = "block";
    btnP6_Show_More.style.display = "none";
})
product_6Show_lessbtn.addEventListener("click", () => {
  products_6_3More_Contents.style.display = "none";
  btnP6_Show_More.style.display = "block";
});