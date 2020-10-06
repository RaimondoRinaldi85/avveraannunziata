

document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "smooth";
    }, 1000);
});





const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    burger.classList.toggle('show-x');
    ul.classList.toggle('show');
});




/* modal1 */

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}







/* modal2 */



openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal2 = document.querySelector(button.dataset.modalTarget)
        openModal(modal2)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal2.active')
    modals.forEach(modal2 => {
        closeModal(modal2)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal2 = button.closest('.modal2')
        closeModal(modal2)
    })
})

function openModal(modal2) {
    if (modal2 == null) return
    modal2.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal2) {
    if (modal2 == null) return
    modal2.classList.remove('active')
    overlay.classList.remove('active')
}

