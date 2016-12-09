var num = 200;
/*$(document).keydown(function (event) {
    switch (event.keyCode) {
        // Left Arrow
        case 37:
            num = num-- - 15;
            document.getElementById('bullet').style.margin = '0px ' + num + 'px 0px ';
            break;
        // Right Arrow
        case 39:
            num = 15 + num++;
            document.getElementById('bullet').style.margin = '0px ' + num + 'px 0px ';
            break;
    }
});*/
var nump;
var touch = false;
var flagtouch;
/*$(document).ready(function () {
    flagtouch = setInterval(function () {
        // movePoint(nump);

    }, 50);
});*/
function movePoint() {

    // console.log(document.getElementById('bullet').offsetTop);

    nump = document.getElementById('bullet').offsetTop;

    document.getElementById('piu').style.margin = nump + 'px 0px 0px 250px';

    touch = chekTouch($('#piu'),$('#wordBlock'));   // check whether the divs touches and return true if touched
    if (touch) {
        clearInterval(flagtouch);
    }
    else {
        nump -= 1;
    }
}

function chekTouch(pui, word) {

    console.log(pui.offsetTop);
    console.log(word.value);

    var x1 = pui.offset().left;
    var y1 = pui.offset().top;
    var h1 = pui.outerHeight();
    var w1 = pui.outerWidth();
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
        alert('touch');
        console.log("222222");
        return true;
    }
}