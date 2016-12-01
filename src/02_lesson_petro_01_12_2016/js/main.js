/**
 * Created by admin on 01.12.2016.
 */
function id(a) {
    return document.getElementById(a);
}

function sel(a) {
    return document.querySelector(a);
}

/*id('change').addEventListener('click', function () {
    document.getElementsByTagName('div')[0].className = 'box';
});*/

/*var  box = document.querySelectorAll('.box');

for (var i = 0; i < box.length; i++){
    box[i].addEventListener('mouseover', function () {
        id('txt').innerHTML = this.innerHTML;
    });
};*/

var bull = document.querySelector('.bullet');
var offset = 574;

window.addEventListener('keydown', function (e) {
    // alert(sel('.bullet').offsetTop);
    // console.log('kecode = ' + e.keyCode);
    if(e.keyCode == 38){
        var up = sel('.ball').offsetTop;
        sel('.ball').style.top = up - 20 + 'px';
    }
    if(e.keyCode == 40){
        if(sel('.ball').offsetTop < offset){
            var up = sel('.ball').offsetTop;
            sel('.ball').style.top = up + 20 + 'px';
        } else {
        }
    }
    if(e.keyCode == 37){
        var left = sel('.ball').offsetLeft;
        sel('.ball').style.left = left - 20 + 'px';
    }
    if(e.keyCode == 39){
        var left = sel('.ball').offsetLeft;
        sel('.ball').style.left = left + 20 + 'px';
    }
    if(e.keyCode == 32){
        var bullet = document.createElement('div');
        bullet.className = 'bullet';
        bullet.textContent = 'a';

        bullet.style.top = up + 20 + 'px';

        bull.appendChild(bullet);

    }

});