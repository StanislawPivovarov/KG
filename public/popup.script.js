"use strict";

var modal = document.getElementsByClassName('popup');
var btn = document.getElementById('request-call-btn');
var modal2 = document.getElementById('popup-group');
var openSecond = document.getElementsByClassName('background-groups-name_bg');

function openModal() {
  modal[0].style.display = "flex";
}

function closeModal() {
  modal[0].style.display = "none";
}

function openSecondModal() {
  debugger;
  modal2[0].style.display = "flex";
}

function closeSecondModal() {
  modal2[0].style.display = "none";
}