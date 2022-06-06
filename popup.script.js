const modal = document.getElementsByClassName('popup');
var btn = document.getElementById('request-call-btn');
const modal2 = document.getElementById('popup-group')
const openSecond = document.getElementsByClassName('background-groups-name_bg')


function openModal(){
    modal[0].style.display = "flex";
}

function closeModal(){
    modal[0].style.display = "none";
}

function openSecondModal(){
    debugger
    modal2[0].style.display = "flex";
}

function closeSecondModal(){
    modal2[0].style.display = "none"
}

