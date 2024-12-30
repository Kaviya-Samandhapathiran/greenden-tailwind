var sideNav = document.getElementById("sideNav")
var closeNav = document.getElementById("close")
var menu = document.getElementById("menuIcon")

menu.addEventListener("click",function(){
    sideNav.style.right = 0
})

closeNav.addEventListener("click", function(){
    sideNav.style.right = "-50%"
})