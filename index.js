let lightTheme = false;
const lightPrimary = "#E4F9F5";
const white = "#fff";
const grey = "#ddd";
const darkPrimary = "#212121";
const darkSecondary = "#363636";
const lightTextColor = "#40514E";
const button = document.getElementById("button");
console.log(lightTheme);
let allh3 = document.getElementsByTagName("h3");
let allh2 = document.getElementsByTagName("h2");
let allp = document.getElementsByTagName("p");
function toggleTheme() {
    if (lightTheme) {
        lightTheme = false;
    } else {
        lightTheme = true;
    }
    button.style.color = lightTheme ? white : darkPrimary;
    button.style.backgroundColor = lightTheme ? darkPrimary : white;
    button.innerText = lightTheme ? "Light Theme" : "Dark Theme";
    document.getElementById("home").style.backgroundColor = lightTheme
        ? darkPrimary
        : lightPrimary;
    document.getElementById("middle").style.backgroundColor = lightTheme
        ? darkSecondary
        : white;
    document.getElementById("body").style.backgroundColor = lightTheme
        ? darkSecondary
        : white;
    document.getElementById("skills").style.backgroundColor = lightTheme
        ? darkPrimary
        : lightPrimary;
    document.getElementById("mySkills").style.color = lightTheme
        ? white
        : "#66BFBF";

    for (var i = 0; i < allh2.length; i++) {
        allh2[i].style.color = lightTheme ? white : "#66BFBF";
    }

    for (var i = 0; i < allh3.length; i++) {
        allh3[i].style.color = lightTheme ? white : "#11999E";
    }

    for (var i = 0; i < allp.length; i++) {
        allp[i].style.color = lightTheme ? grey : lightTextColor;
    }
}
