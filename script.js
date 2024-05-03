const themebtn=document.querySelector("#theme");
const divImg = document.createElement("div");
let themeName=getComputedStyle(document.body).getPropertyValue('--theme-name');
let root=document.querySelector(':root');


if (themeName=='"dark"') {
    root.className='dark';
    divImg.style.backgroundImage = "url('./images/crescent-moon-svgrepo-com.svg')";
    themeMode=1;
}
else {
    root.className='light';
    divImg.style.backgroundImage = "url('./images/sun-svgrepo-com.svg')";
    themeMode=0;
}

themebtn.appendChild(divImg);
themebtn.onclick = () => {
    if (themeMode){
        themeMode=0;
        root.className='light';
        //document.getElementById("header").style.backgroundColor = "#ffffff";
        //document.getElementById("right-container").style.backgroundColor = "#e2e8f0";
        //document.body.style.color = "black";
        //root.style.setProperty('--sidebar-color','#000000');
        //root.style.setProperty('--svg-fill','#000000');
        divImg.style.backgroundImage = "url('./images/sun-svgrepo-com.svg')";
    }
    else {
        themeMode=1;
        root.className='dark';
        /*document.getElementById("header").style.backgroundColor = "#181818";
        document.getElementById("right-container").style.backgroundColor = "#232327";
        document.body.style.color = "white";
        root.style.setProperty('--sidebar-color','#ffffff');
        root.style.setProperty('--svg-fill','#ffffff');*/
        divImg.style.backgroundImage = "url('./images/crescent-moon-svgrepo-com.svg')";
    }
}

