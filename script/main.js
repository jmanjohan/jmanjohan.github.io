$('.homeProfile').on('mouseleave mouseup', function() {
    $(this).addClass('withBoxShadow');
    $('.click').remove();
});
$('.homeProfile').mousedown(function() {
    $(this).removeClass('withBoxShadow');
    $(this).prepend('<div class="click withBorderRound"></div>');
});