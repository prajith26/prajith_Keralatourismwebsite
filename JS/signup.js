let Email = document.getElementById("inputEmail4");
let pwd = document.getElementById("inputPassword4");
let mobile = document.getElementById("inputAddress2");

//---------------------------------------Email Validation----------------------------------------------
function validate() {
    let regexp = /^([a-zA-Z0-9\.\-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    if (regexp.test(Email.value))
    {  
        return true;
    }
    else {
        alert("Invalid Email ID")
        return false;
    }
}
//---------------------------------------Email Validation----------------------------------------------

//---------------------------------------Password Validation-------------------------------------------
function validatepwd() {
    console.log(pwd.value);
    console.log(pwd.value.length);
    if (pwd.value.length < 8) {
        alert("Password should be minimum 8 characters long");
        return false;
    }
    else if (pwd.value.search(/[a-z]/) == -1) {
        alert("Password should contain atleast one lowercase letter");
        return false;
    }
    else if (pwd.value.search(/[0-9]/) == -1) {
        alert("Password should contain atleast one number");
        return false;
    }
    else if (pwd.value.search(/[A-Z]/) == -1) {
        alert("Password should contain atleast one Uppercase letter");
        return false;
    }
    else
        return true;
}
//---------------------------------------Password Validation-------------------------------------------


//---------------------------------------Mobile Number Validation--------------------------------------
function validatemob()
{
    let regexp1 = /^([0-9]{3})-([0-9]{3})-([0-9]{4})$/
    let regexp2 = /^([0-9]{3}).([0-9]{3}).([0-9]{4})$/
    let regexp3 = /^([0-9]{3}) ([0-9]{3}) ([0-9]{4})$/
    let regexp4 = /^([0-9]{10})$/

    if (mobile.value.length>10)
    {
        if (regexp1.test(mobile.value) || regexp2.test(mobile.value) || regexp3.test(mobile.value) || regexp4.test(mobile.value))
        {
            return true;
        }
        else
        {
            alert("Mobile Number should contain only 10 numbers");
            return false;
        }
    }
    else
    {
        if (regexp1.test(mobile.value) || regexp2.test(mobile.value) || regexp3.test(mobile.value) || regexp4.test(mobile.value))
        {
            return true;
        }
        else
        {
            alert("Invalid Mobile Number");
            return false;
        }
    }
}
//---------------------------------------Mobile Number Validation--------------------------------------

//---------------------------------------Password Strength---------------------------------------------

//---------------------------------------BAR----------------------------------------------------------
let input = document.getElementById("inputPassword4");
let indicator = document.getElementById("indicator");
const text = document.getElementById("text");
let toggle = document.getElementById("toggle");

function passBar()
{
    console.log(input.value);
    let password = input.value;
    let currentSrength = {
        lengthScores: 0,
        complexityScores: 0,
        caseScores: 0
    }
    if (password.length < 4) {
        currentSrength.lengthScores = 0;
    } else if (password.length > 12) {
        currentSrength.lengthScores = 1;
    } else {
        currentSrength.lengthScores = input.value.length / 20;
    }

    if (password.match(/\d/g)) {
        currentSrength.complexityScores += 0.3;
    }
    if (password.match(/[a-zA-Z]/g)) {
        currentSrength.complexityScores += 0.35;
    }
    if (password.match(/[\W_]/g)) {
        currentSrength.complexityScores += 0.4;
    }

    if (password.match(/[a-z]/g)) {
        currentSrength.caseScores += 0.5;
    }
    if (password.match(/[A-Z]/g)) {
        currentSrength.caseScores += 0.5;
    }

    const scores = Math.round(
        currentSrength.lengthScores +
        currentSrength.complexityScores +
        currentSrength.caseScores
    )
    setStrength(scores);
}

function setStrength(level) {
    switch (level) {
        case 0:
            level = 'weak';
            break;
        case 1:
            level = 'fair';
            break;
        case 2:
            level = 'good';
            break;
        case 3:
            level = 'strong';
            break;
        default:
            level = 'week';
    }
    text.innerText = level;
    indicator.className = `pass__label pass__label--${level}`
    indicator.style.display = "flex";
    toggle.style.display = "flex";
    
}
    

//---------------------------------------Password Strength---------------------------------------------