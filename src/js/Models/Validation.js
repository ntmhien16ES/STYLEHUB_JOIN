let Validation = function() {
    this.checkPassword = function(idValue) {
        let regexPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
        let inputText = document.getElementById(idValue);
        if (regexPassword.test(inputText.value)) {
            inputText.style.borderColor = "green";
            $('#' + idValue).tooltip('disable');
            return true;
        } else {
            inputText.style.borderColor = "red";
            inputText.setAttribute('title', inputText.placeholder + ' phải có từ 6 đến 32 ký tự và có ít nhất 1 ký tự IN HOA, một ký tự thường và một số');
            $('#' + idValue).tooltip('enable');
            return false;
        }
    }
    this.checkHollow = function(idValue) {
        var inputText = document.getElementById(idValue);
        if(inputText.value == "") {
            inputText.style.borderColor = "red";
            inputText.setAttribute('title', inputText.placeholder + ' không được bỏ trống!');
            $('#' + idValue).tooltip('enable');
            return false;
        } else {
            inputText.style.borderColor = "green";
            $('#' + idValue).tooltip('disable');
            return true;
        }   
    }
    this.checkAllNumber = function(idValue) {
        var inputText = document.getElementById(idValue);
        var regexNumber = /^[0-9]+$/;
        if(regexNumber.test(inputText.value)) {
            document.getElementById(idError).style.opacity = 0;
            document.getElementById(idValue).style.borderColor = "green";
            return true;
        } else {
            document.getElementById(idError).innerHTML = inputText.name + ' yêu cầu nhập số!';
            document.getElementById(idError).style.opacity = 1;
            document.getElementById(idValue).style.borderColor = "red";
            return false;
        }   
    }

    this.checkAllCharacter = function (idValue) {
        var inputText = document.getElementById(idValue);
        var regex = /^[A-Za-z ]+$/;
        if(regex.test(inputText.value)) {
            document.getElementById(idError).style.opacity = 0;
            document.getElementById(idValue).style.borderColor = "green";
            return true;
        } else {
            document.getElementById(idError).innerHTML = inputText.name + ' yêu cầu nhập chữ!';
            document.getElementById(idError).style.opacity = 1;
            document.getElementById(idValue).style.borderColor = "red";
            return false;
        }   
    }
    
    this.checkValue = function (idValue) {
        var inputText = document.getElementById(idValue);
        if(Number(inputText.value) > 100 || Number(inputText.value) < 0 || inputText.value == "") {
            inputText.style.borderColor = "red";
            inputText.setAttribute('title', inputText.placeholder + ' phải có giá trị từ 0 đến 100');
            $('#' + idValue).tooltip('enable');
            return false;
        } else {
            inputText.style.borderColor = "green";
            $('#' + idValue).tooltip('disable');
            return true;
        }
    }

    this.checkEmail = function(idValue) {
        let inputText = document.getElementById(idValue);
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexEmail.test(inputText.value)) {
            inputText.style.borderColor = "green";
            $('#' + idValue).tooltip('disable');
            return true;
        } else {
            // document.getElementById(idError).style.opacity = 1;
            inputText.style.borderColor = "red";
            inputText.setAttribute('title', inputText.placeholder + ' không hợp lệ');
            $('#' + idValue).tooltip('enable');
            return false;
        }
    }
}