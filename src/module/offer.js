export function offer() {
    let offerLink = document.querySelector('.navbar-item:first-child')
    let modalBl = document.querySelector('.modal_bl')

    offerLink.addEventListener('mouseenter', showModal)
    offerLink.addEventListener('mouseleave', closeModal)

    function showModal() {
        modalBl.style.transform = 'scale(1)'
    }

    function closeModal() {
        modalBl.style.transform = 'scale(0)'
    }


}