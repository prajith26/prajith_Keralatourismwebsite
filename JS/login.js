let Email = document.getElementById("email");
let pwd = document.getElementById("pwd");

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