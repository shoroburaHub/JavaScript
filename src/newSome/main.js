/**
 * Created by admin on 09.12.2016.
 */
function left() {
    var start = Date.now(); // сохранить время начала

    var timer = setInterval(function () {
        // вычислить сколько времени прошло из opts.duration
        var timePassed = Date.now() - start;

        train.style.left = timePassed / 5 + 'px';

        if (timePassed > 2000) clearInterval(timer);

    }, 20);
}
function down() {
    var start = Date.now(); // сохранить время начала

    var timer = setInterval(function () {
        // вычислить сколько времени прошло из opts.duration
        var timePassed = Date.now() - start;

        train.style.top = timePassed - 5 + 'px';

        if (timePassed > 500) clearInterval(timer);

    }, 20);
}


window.addEventListener('keydown', function (e) {

    console.log(e.keyCode);
    if (e.keyCode == 39) {
        left();
    }
    if(e.keyCode == 40){
        down();
    }

});



