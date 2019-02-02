/*
*   Author: Alejandro Chacon
*   Universidad de Costa Rica
*/



function showMenu() {
    var x = document.getElementById("menu-id");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}



