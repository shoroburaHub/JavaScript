function id(a) {
    return document.getElementById(a);
}

function sel(a) {
    return document.querySelector(a);
}

var signUp = document.forms.signUp;

signUp.send.addEventListener('click', function (e) {

    e.preventDefault(); // stop the default event, now for button, cos it refresh page

    id('username').innerHTML = signUp.username.value;
    id('email').innerHTML = signUp.email.value;
    id('info').innerHTML = signUp.info.value;
});

var radioForm = document.forms.bg;
var radioBtns = radioForm.elements;

for (var i = 0; i < radioForm.length; i++){
    radioBtns[i].addEventListener('click', function () {
        document.body.style.backgroundColor = this.value;
    })
}




