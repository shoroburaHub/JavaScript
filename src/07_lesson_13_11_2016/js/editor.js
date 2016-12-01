/**
 * Created by admin on 11/13/2016.
 */

(function () {

    var text = $('#header').text();

    document.getElementById('edit').onclick = function () {
        document.getElementById('footer').style.display = 'block';
        $('#editor').val(text);
    };

    document.getElementById('save').onclick = function () {
        $('#header').html($('#editor').val());
        document.getElementById('footer').style.display = 'none';
    };

    document.getElementById('revert').onclick = function () {
        $('#header').html(text);
        document.getElementById('footer').style.display = 'none';
    };

    document.getElementById('cancel').onclick = function () {
        document.getElementById('footer').style.display = 'none';
    };

}());