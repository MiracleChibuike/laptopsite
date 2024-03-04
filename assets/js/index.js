const showMenu = document.getElementById("showMenu");
const hideMenu = document.getElementById("hideMenu");
var navbar = document.querySelector(".navbar");

// Show the nav-contents on click

showMenu.addEventListener("click", ()=>{
    if (navbar.style.display = "none") {
        navbar.style.display = "block";
        hideMenu.style.display = "block";
        showMenu.style.display = "none"
    }
});

// Hide the Nav-contents on icon close click
hideMenu.addEventListener("click", ()=>{
    if (navbar.style.display = "block") {
        navbar.style.display = "none";
         hideMenu.style.display = "none";
         showMenu.style.display = "block";
    }
})
