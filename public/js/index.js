
document.getElementById("nav-icon3").addEventListener("click", togglemenu);
document.getElementById("nav-icon3").addEventListener("click", toggleOpenMenu);


function togglemenu(){
    var burger = document.getElementById("nav-icon3");
    burger.classList.toggle("open");
}

function toggleOpenMenu(){
    var open = document.getElementById("menuList");
    open.classList.toggle("hidden")
}


