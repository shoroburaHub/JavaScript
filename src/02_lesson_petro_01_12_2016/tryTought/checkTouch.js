var num = 200;
$(document).keydown(function (event) {
    switch (event.keyCode) {
        // Left Arrow
        case 37:
            num = num-- - 15;
            document.getElementById('player').style.margin = '0px ' + num + 'px 0px ';
            break;
        // Right Arrow
        case 39:
            num = 15 + num++;
            document.getElementById('player').style.margin = '0px ' + num + 'px 0px ';
            break;
    }
});
var nump = 650;
var touch = false;
var flagtouch;


// $(document).ready(function () {
//     flagtouch = setInterval(function () {
//         movePoint(nump);
//
//     }, 20);
// });

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32) {
        flagtouch = setInterval(function () {
            movePoint(nump);
        }, 10);
    }
});


var bullet;

bullet = document.createElement('div');
bullet.className = 'bullet';
bullet.style.width = 30 + 'px';
bullet.style.height = 30 + 'px';
bullet.style.top = 100 + 'px';
bullet.style.left = 100 + 'px';
bullet.style.borderRadius = 50+'px';
bullet.style.backgroundColor = 'red';
bullet.style.margin = '650px 0px 0px 0px';
function movePoint() {

    document.body.appendChild(bullet);
    bullet.style.margin = nump + 'px 0px 0px 0px'
    document.getElementById('point').style.margin = nump + 'px 0px 0px 250px';

    touch = chekTouch($('#point'), $('#player'))   // check whether the divs touches and return true if touched
    if (touch) {
        clearInterval(flagtouch);
    }
    else {
        nump -= 5;
    }
}

function chekTouch(bullet, word) {
    var x1 = bullet.offset().left;
    var y1 = bullet.offset().top;
    var h1 = bullet.outerHeight();
    var w1 = bullet.outerWidth();
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = word.offset().left;
    var y2 = word.offset().top;
    var h2 = word.outerHeight();
    var w2 = word.outerWidth();
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        console.log("11111");
        return false;
    } else {
        console.log("222222");
        document.body.removeChild(document.querySelector('.bullet'));
        document.body.removeChild(document.getElementById('point'));
        return true;
    }
}