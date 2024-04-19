const themebtn=document.querySelector("#theme");
const divImg = document.createElement("div");
divImg.style.width="100%";
divImg.style.height="100%";
divImg.style.backgroundImage = "url('https://www.svgrepo.com/show/20546/sun.svg')";
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
        divImg.style.backgroundImage = "url('https://www.svgrepo.com/show/20546/sun.svg')";
    }
    else {
        themeMode=1;
        document.getElementById("header").style.backgroundColor = "#181818";
        document.getElementById("right-container").style.backgroundColor = "#232327";
        document.body.style.color = "white";
        divImg.style.backgroundImage = "url('https://www.svgrepo.com/show/79251/crescent-moon.svg')";
    }
}
