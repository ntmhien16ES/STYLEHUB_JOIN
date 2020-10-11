let validation = new Validation();
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let ageInput = document.getElementById('age');
let form_signin = document.getElementById('form_signin');

var checkValidation = function() {
    var valid = true;
    valid = checkEmail() & checkPassword() & checkAge();
    return valid;
}
function checkEmail() {
    return validation.checkEmail("email");
}
function checkPassword() {
    return validation.checkPassword("password");
}
function checkAge() {
    return validation.checkValue("age");
}
emailInput.onfocusout = function () { checkEmail() };
passwordInput.onfocusout = function() { checkPassword() };
ageInput.onfocusout = function () { checkAge() };

let check = 0;
function onSubmit() {
    if(!checkValidation()){
        return false;
    }
}

