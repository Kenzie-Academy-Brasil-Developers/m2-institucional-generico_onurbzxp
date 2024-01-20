var modal = document.getElementById("modal");
var btnHeader = document.querySelector(".header__button");
var btnFaq = document.querySelector(".faq__button");
var span = document.getElementsByClassName("close-button")[0];

btnHeader.onclick = function () {
    modal.style.display = "block";
}
btnFaq.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
