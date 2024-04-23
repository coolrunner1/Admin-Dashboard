const themebtn=document.querySelector("#theme");
const divImg = document.createElement("div");
divImg.style.width="100%";
divImg.style.height="100%";
let themeName=getComputedStyle(document.body).getPropertyValue('--theme-name');
console.log(themeName)
if (themeName=='"light"'){
    divImg.style.backgroundImage = "url('./images/sun-svgrepo-com.svg')";
}

else {
    divImg.style.backgroundImage = "url('./images/crescent-moon-svgrepo-com.svg')";
}

divImg.style.backgroundRepeat= "no-repeat";
divImg.style.backgroundSize = "cover";
themebtn.appendChild(divImg);
let themeMode=0;
themebtn.onclick = () => {
    if (themeMode){
        themeMode=0;
        document.getElementById("header").style.backgroundColor = "#ffffff";
        document.getElementById("right-container").style.backgroundColor = "#e2e8f0";
        document.body.style.color = "black";
        divImg.style.backgroundImage = "url('./images/sun-svgrepo-com.svg')";
    }
    else {
        themeMode=1;
        document.getElementById("header").style.backgroundColor = "#181818";
        document.getElementById("right-container").style.backgroundColor = "#232327";
        document.body.style.color = "white";
        divImg.style.backgroundImage = "url('./images/crescent-moon-svgrepo-com.svg')";
    }
}
