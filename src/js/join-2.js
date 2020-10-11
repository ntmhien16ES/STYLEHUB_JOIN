let validation = new Validation();
let usernameInput = document.getElementById('username');

function checkUsername() {
    return validation.checkHollow('username');
}
usernameInput.onfocusout = function () { checkUsername() };

function onSubmit_join_2() {
    if(!checkUsername()){
        return false;
    }
}