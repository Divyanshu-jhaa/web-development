'use strict';
var x = 1;
document.querySelector('img').addEventListener('click', function () {
    console.log("btn clicked");
    if (x == 1) {
        document.querySelector(".container-fluid").classList.remove("menu");
        x = 0;
    }
    else {
        document.querySelector(".container-fluid").classList.add("menu");
        x = 1;
    }
});