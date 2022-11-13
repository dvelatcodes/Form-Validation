"use strict";
const label1 = document.getElementsByTagName("label")[0];
const label2 = document.getElementsByTagName("label")[1];
const label3 = document.getElementsByTagName("label")[2];
const label4 = document.getElementsByTagName("label")[3];
const firstName = document.getElementById("first");
const error1 = document.querySelector(".first-error-signal");
const error2 = document.querySelector(".second-error-signal");
const error3 = document.querySelector(".third-error-signal");
const error4 = document.querySelector(".fourth-error-signal");
const p1 = document.querySelector(".first-error-message");
const p2 = document.querySelector(".second-error-message");
const p3 = document.querySelector(".third-error-message");
const p4 = document.querySelector(".fourth-error-message");
const lastName = document.getElementById("second");
const email = document.getElementById("third");
const password = document.getElementById("fourth");
const btn = document.getElementById("btn");

// x
var checkFirst = null;
const verifyFirstName = () => {
  if (firstName.value.match(/[a-zA-Z]/)) {
    error1.style.display = "none ";
    p1.style.display = "none ";
    firstName.style.color = "black";
    checkFirst = true;
  }
  if (
    firstName.value.match(/[!-@]|[\[-`]|[\{-~]|\s/) ||
    firstName.value === "" ||
    firstName.value.length > 15 ||
    firstName.value.length < 3
  ) {
    firstName.style.color = "red";
    error1.style.display = "block";
    p1.style.display = "block";
    checkFirst = null;
  }
};
var checkLast = null;
const verifyLastName = () => {
  if (lastName.value.match(/[a-zA-Z]/)) {
    error2.style.display = "none ";
    p2.style.display = "none ";
    lastName.style.color = "black";
    checkLast = true;
  }
  if (
    lastName.value.match(/[!-@]|[\[-`]|[\{-~]|\s/) ||
    lastName.value === "" ||
    lastName.value.length > 15 ||
    lastName.value.length < 3
  ) {
    lastName.style.color = "red";
    error2.style.display = "block";
    p2.style.display = "block";
    checkLast = null;
  }
};
var checkEmail = null;
const verifyEmail = () => {
  if (email.value.match(/[a-zA-Z]@gmail.com/)) {
    error3.style.display = "none ";
    p3.style.display = "none ";
    email.style.color = "black";
    checkEmail = true;
  }
  if (email.value.match(/[a-zA-Z][0-9]@gmail.com/)) {
    error3.style.display = "none ";
    p3.style.display = "none ";
    email.style.color = "black";
    checkEmail = true;
  }
  if (
    email.value.match(/[!-\-]|[:-?]|[\[-`]|[\{-~]|\s|\//) ||
    !email.value.match(/[a-zA-Z]@gmail.com/) ||
    email.value.match(/[a-zA-Z][0-9]@gmail.com/) ||
    email.value.length < 13 ||
    email.value === "" ||
    email.value.length > 25
  ) {
    email.style.color = "red";
    error3.style.display = "block";
    p3.style.display = "block";
    checkEmail = null;
  }
};
var checkPassword = null;
const verifyPassword = () => {
  if (password.value.match(/[a-zA-Z]|[0-9]/)) {
    error4.style.display = "none ";
    p4.style.display = "none ";
    password.style.color = "black";
    checkPassword = true;
  }
  if (
    password.value.match(/[!-\/]|[:-@]|[\[-`]|[\{-~]|\s/) ||
    password.value === "" ||
    password.value.length > 15 ||
    password.value.length < 3
  ) {
    password.style.color = "red";
    error4.style.display = "block";
    p4.style.display = "block";
    checkPassword = null;
  }
};

const verifySubmit = (e) => {
  e.preventDefault();
  if (checkFirst && checkLast && checkEmail && checkPassword) {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
    alert("Thanks a Bunch for Filling, Processing Details");
  }
  if (!checkFirst || !checkLast || !checkEmail || !checkPassword) {
    alert("Please Fill Form Correctly, An Input Field Is Empty Or Invalid");
  }
};

firstName.addEventListener("keyup", verifyFirstName);
lastName.addEventListener("keyup", verifyLastName);
email.addEventListener("keyup", verifyEmail);
password.addEventListener("keyup", verifyPassword);
btn.addEventListener("click", verifySubmit);
