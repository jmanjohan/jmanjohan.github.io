//inset shadow when clicking profiles/buttons on the home page
$('.homeProfile').on('mouseleave mouseup', function() {
    $(this).addClass('withBoxShadow');
    $('.clickShadow').remove();
});
$('.siteRunnerButton').on('mouseleave mouseup', function() {
    $('.clickShadow').remove();
});
$('.canClick').mousedown(function() {
    $(this).removeClass('withBoxShadow');
    $(this).prepend('<div class="clickShadow withBorderRoundThinChild"></div>');
});
//navigate site by clicking profiles
$('#justinProfile').mouseup(function() {
    $('#justinProfileLink')[0].click();
});
$('#joshuaProfile').mouseup(function() {
    $('#joshuaProfileLink')[0].click();
});
$('#jessicaProfile').mouseup(function() {
    $('#jessicaProfileLink')[0].click();
});
$('#jacobProfile').mouseup(function() {
    $('#jacobProfileLink')[0].click();
});