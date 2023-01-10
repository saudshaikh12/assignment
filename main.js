function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function OpenNav() {
    document.querySelector(".sideNav").style.width = "110%";
}
function closeNav() {
    document.querySelector(".sideNav").style.width = "0";
}
