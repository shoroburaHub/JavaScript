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

var piu = document.querySelector('.piu');
var ball = document.querySelector('.ball');

var offset;

window.addEventListener('keydown', function (e) {
    offset = sel('.ball').offsetTop;

    // alert(sel('.bullet').offsetTop);
    // console.log('kecode = ' + e.keyCode);
    // up
    if (e.keyCode == 38) {
        var up = sel('.ball').offsetTop;
        sel('.ball').style.top = up - 20 + 'px';
    }
    // down
    if (e.keyCode == 40) {
        if (sel('.ball').offsetTop < 740) {
            var up = sel('.ball').offsetTop;
            sel('.ball').style.top = up + 20 + 'px';
        } else {
            offset = offset + 20;
        }
    }
    // left
    if (e.keyCode == 37) {
        var left = sel('.ball').offsetLeft;
        sel('.ball').style.left = left - 20 + 'px';
    }
    // right
    if (e.keyCode == 39) {
        var left = sel('.ball').offsetLeft;
        sel('.ball').style.left = left + 20 + 'px';
    }
    // piu
    if (e.keyCode == 32) {
        var bullet = document.createElement('div');
        bullet.className = 'bullet';
        bullet.id = "bullet";
        bullet.style.backgroundColor = 'aqua';
        bullet.style.textAlign = 'center';
        bullet.style.width = 30 + 'px';
        bullet.style.height = 30 + 'px';
        bullet.style.paddingTop = 9 + 'px';

        var rand = Math.random() * (91 - 65) + 65;

        bullet.textContent = String.fromCharCode(rand);

        bullet.style.top = up + 20;

        bullet.style.top = ball.offsetTop + 'px';
        bullet.style.left = ball.offsetLeft + 'px';

        piu.appendChild(bullet);
        var offset = bullet.offsetTop;

        setInterval(function () {
            movePoint(nump);

        }, 1000);

        /*var time = setInterval(function () {
            bullet.style.top = offset + 'px';
            offset -= 10;
            if (offset < -540) {
                clearInterval(time);
            }
            if (offset == -560) {
                piu.removeChild(bullet);
            }
        }, 50);*/
    }

});
