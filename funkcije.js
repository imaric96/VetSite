$(document).ready(function() {
    $('body').append('<div id="toTop" class="btn btn-info" title="Povratak na vrh stranice"><span class="fa fa-angle-up fa-2x"></span></div>');
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

function resetujFormu() {
    document.getElementById("form-prijava").reset();
    document.getElementById("form-registracija").reset();
    document.getElementById("form-resetovanje").reset();
}