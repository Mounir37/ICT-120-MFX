document.addEventListener("DOMContentLoaded", init);

function settings()
{

}

function init()
{
    cmd_settings.addEventListener("click", settings);
}

$(document).ready(function burger() {

    $('.first-button').on('click', function () {

        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {

        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {

        $('.animated-icon3').toggleClass('open');
    });
});