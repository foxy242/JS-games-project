const closeButton = document.querySelector('.first-page-backdrop__close');
const modal = document.querySelector('.first-page-backdrop');
function closeModal() {
    modal.classList.add('first-page-is-hidden');
}
closeButton.addEventListener('click', function() {
    modal.style.opacity = '0';
});
