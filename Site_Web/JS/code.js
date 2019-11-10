<!--Titre:      Site_Web_Exa
    Auteur:     Mounir Fiaux
    Date:       10.11.19
    Version:    0.9
-->
document.addEventListener("DOMContentLoaded", init);
linkObject.disabled = true;
function settings()
{

}

function init()
{

}
<!-- code du fonctionnement du menu burger déroulant -->
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

//code du modal pop-up
var modal = document.getElementById("myModal");

//gere tout le contenu du modal
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//fermeture du modal pop-up
span.onclick = function() {
    modal.style.display = "none";
}

