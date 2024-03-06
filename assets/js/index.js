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

    var show_menuAudio = new Audio(
      "assets/sounds/mixkit-correct-answer-tone-2870.wav"
    );
    show_menuAudio.volume = 0.3;
    show_menuAudio.play();
});

// Hide the Nav-contents on icon close click
hideMenu.addEventListener("click", ()=>{
    if (navbar.style.display = "block") {
        navbar.style.display = "none";
         hideMenu.style.display = "none";
         showMenu.style.display = "block";
    }
    var hide_menuAudio = new Audio(
      "assets/sounds/mixkit-confirmation-tone-2867.wav"
    );
    hide_menuAudio.volume = 0.3;
    hide_menuAudio.play();
})

// const videoplay = document.getElementById("myVid");
// var playbtn = document.getElementById("playBtn");
// playbtn.addEventListener("click", ()=>{
//     videoplay.play();
// })
