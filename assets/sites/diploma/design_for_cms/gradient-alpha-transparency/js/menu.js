// JavaScript Document
document.getElementById("menu").addEventListener("mouseover", mouseOverImage);
document.getElementById("about").addEventListener("mouseover", mouseOverImage);
document.getElementById("contact").addEventListener("mouseover", mouseOverImage);

document.getElementById("menu").addEventListener("mouseout", mouseOutImage);
document.getElementById("about").addEventListener("mouseout", mouseOutImage);
document.getElementById("contact").addEventListener("mouseout", mouseOutImage);


function mouseOverImage(id)
    {
        document.getElementById(id).src = "img/nav-"+id+"-hover.png";
    }
  
function mouseOutImage(id)
    {
        document.getElementById(id).src = "img/nav-"+id+".png";
    }
