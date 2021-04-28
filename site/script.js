function menuAbrir() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function menuAbrir1() {
  var x = document.getElementById("myTopnav");
  if (x.className === "menu-cliente") {
    x.className += " responsive";
  } else {
    x.className = "menu-cliente";
  }
}