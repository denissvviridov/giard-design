

export function mobileMenu() {
    let menuBtn = document.querySelector('.menu_btn')
    let mobileMenu = document.querySelector('.mobile_menu');
    let menuOverlay = document.querySelector('.menu_overlay')
    let content = document.querySelector('.mobile_menu .content')
    let close = document.querySelector('.mobile_menu .content .close')


    menuBtn.addEventListener('click', showMenu)
    close.addEventListener('click', closeMenu)
    menuOverlay.addEventListener('click', closeMenu)


    function showMenu() {
        content.style.display = 'block'
        document.body.style.overflow = 'hidden'
        menuOverlay.style.display = 'block'
        mobileMenu.style.width = '70%'
    }


    function closeMenu() {
        content.style.display = 'none'
        document.body.style.overflow = 'scroll'
        menuOverlay.style.display = 'none'
        mobileMenu.style.width = '0'
    }


}
