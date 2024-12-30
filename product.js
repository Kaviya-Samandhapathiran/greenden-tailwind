var sideNav = document.getElementById("sideNav")
var closeNav = document.getElementById("close")
var menu = document.getElementById("menuIcon")
var search = document.getElementById("search")
var products = document.getElementById("products")
var list = products.querySelectorAll("div")

menu.addEventListener("click", function () {
    sideNav.style.right = 0
})

closeNav.addEventListener("click", function () {
    sideNav.style.right = "-50%"
})

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (i = 0; i < list.length; i++) {
        var productName = list[i].querySelector("h1").textContent

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            list[i].style.display = "none"
        }
        else {
            list[i].style.display = "block"
        }
    }
})