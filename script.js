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
        divImg.style.backgroundImage = "url('./images/sun-svgrepo-com.svg')";
    }
    else {
        themeMode=1;
        root.className='dark';
        divImg.style.backgroundImage = "url('./images/crescent-moon-svgrepo-com.svg')";
    }
}

