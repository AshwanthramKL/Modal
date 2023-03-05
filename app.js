// Select required elements

var modalBtn = document.querySelector('.modal-btn');
var modal = document.querySelector('.modal-overlay');
var closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', modifyModal);
closeBtn.addEventListener('click', modifyModal);

function modifyModal(){
    modal.classList.toggle('open-modal');
}

