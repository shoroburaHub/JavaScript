/**
 * Created by admin on 06.12.2016.
 */

var wordBlock = document.getElementById("wordBlock");


(function () {
    setInterval(function () {

        // word_move();

    }, 50);

})();

function word_move() {
    var position = Math.random() * (100 - 10) + 10;

    var rand = parseInt(Math.random() * (3 - 1) + 1);

    console.log(rand);

    var offsetTop = wordBlock.offsetTop;
    var offsetLeft = wordBlock.offsetLeft;


    console.log("offsetTop "+offsetTop);
    console.log("offsetLeft "+offsetLeft);

    if(rand == 1){
        if(Math.random() * (2 - 1) + 1 >= 1.5){
            if(offsetTop < 8){
                wordBlock.style.top = offsetTop - position + 'px';
            }else if(offsetTop > 390){
                wordBlock.style.top = 360 + 'px';
            }
        }else{
            if(offsetTop < 400){
                wordBlock.style.top = offsetTop + position + 'px';
            }
        }
    }else {

        if(Math.random() * (2 - 1) + 1 >= 1.5){
            if(offsetLeft >= 8){
                wordBlock.style.left = offsetLeft + position + 'px';
            }else if(offsetTop > 870){
                wordBlock.style.left = 900 + 'px';
            }
        }else{
            if(offsetLeft > 1000){
                wordBlock.style.left = offsetLeft - position + 'px';
            }
        }
    }


}

