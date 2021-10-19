var timer;

$(document).ready(function() {
    $(".btn .fa-play-circle-o").on('click', function() {
        $(this).hide();
        $(".fa-pause-circle-o").fadeIn();
        $("#background").prop("volume", 0.1);
        $("#background")[0].play();
    });
    $(".btn .fa-pause-circle-o").on('click', function() {
        $(this).hide();
        $(".fa-play-circle-o").fadeIn();
        $("#background")[0].pause();
    });
});

var video = document.getElementById('background');
var hidden = false;

var timeout = function() {
    hidden = true;
    $('#header').fadeOut();
    $('html').css({
        cursor: 'none'
    });
    if (video.paused) {
        $('.fa-play-circle-o').fadeOut();
    } else {
        $('.fa-pause-circle-o').fadeOut();
    }
}
timer = setTimeout(timeout, 5000);

window.onmousemove = function() {
    if (hidden) {
        $('#header').fadeIn();
        $('html').css({
            cursor: 'default'
        });
        if (video.paused && $('.fa-play-circle-o').is(':hidden') && $('.fa-pause-circle-o').is(':hidden')) {
            $('.fa-play-circle-o').fadeIn();
        } else if ($('.fa-play-circle-o').is(':hidden') && $('.fa-pause-circle-o').is(':hidden')) {
            $('.fa-pause-circle-o').fadeIn();
        }
        clearTimeout(timer);
        timer = setTimeout(timeout, 5000);
    }
};