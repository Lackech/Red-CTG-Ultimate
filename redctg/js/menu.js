// Passing a named function instead of an anonymous function.

function stopThis( ) {
    console.log( "ready!" );
}


function showMenu() {
    var x = document.getElementById("menu-id");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}



