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


function checkForm(e) {
    e.preventDefault();
    let num = Number(firstName.value);
    if (!isNaN(num) || firstName.value === "" || firstName.value.length > 14 || firstName.value.length < 3) {
        firstName.style.color = "red";
        error1.style.display = "block";
        p1.style.display = "block";
    }

    let num2 = Number(lastName.value);
    if (!isNaN(num2) || lastName.value === "" || lastName.value.length > 14 || lastName.value.length < 3) {
        lastName.style.color = "red";
        error2.style.display = "block";
        p2.style.display = "block";
      
    }
        
    if (!email.value.includes(".") || email.value.indexOf(" ") !== -1 || email.value === "" || email.value.indexOf(".") + 1 !== email.value.length - 3 || email.value.lastIndexOf("m") + 1 !== email.value.length || email.value.lastIndexOf("o") + 1 !== email.value.length - 1 || email.value.lastIndexOf("c") + 1 !== email.value.length - 2 || email.value.indexOf("@") + 1 !== email.value.length - 9) {
         email.style.color = "red";
         error3.style.display = "block";
         p3.style.display = "block";
    }

    if (password.value === "" || password.value.length < 5 || password.value.indexOf(" ") !== -1) {
        password.style.color = "red";
        error4.style.display = "block";
        p4.style.display = "block";
    }

}

btn.addEventListener("click", checkForm)


