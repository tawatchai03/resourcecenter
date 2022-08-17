const modal = document.querySelector(".modal-resource");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function getSearch() {
    document.getElementById("pages1").style.display = "none";
    document.getElementById("pages2").style.display = "block";
    document.getElementById("pages3").style.display = "none";
    document.getElementById("pages4").style.display = "none";
}

function getBacks() {
    document.getElementById("pages1").style.display = "block";
    document.getElementById("pages2").style.display = "none";
    document.getElementById("pages3").style.display = "none";
    document.getElementById("pages4").style.display = "none";
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

document.getElementById("pages1").style.display = "block";
document.getElementById("pages2").style.display = "none";
document.getElementById("pages3").style.display = "none";
document.getElementById("pages4").style.display = "none";