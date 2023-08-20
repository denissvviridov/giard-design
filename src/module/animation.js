export function animation() {
    let servicesBlock = document.querySelector( '.services .service_info')
    let aboutBlock = document.querySelector('.about .info ')
    window.addEventListener('scroll', scrollDistance)
    let yBlock = servicesBlock.offsetTop - 300
    let yAbout = aboutBlock.offsetTop - 300

    function repeat() {

        let y = window.scrollY


        if (y >= yBlock) {
            servicesBlock.style.animationName = 'slidein'
            servicesBlock.style.animationDuration = '1s'
        } else {
            servicesBlock.style.animationName = ''
        }

        if (y >= yAbout) {
            aboutBlock.style.animationName = 'slideAbout'
            aboutBlock.style.animationDuration = '1s'
        } else {
            aboutBlock.style.animationName = ''
        }
    }


    function scrollDistance() {
        repeat()
    }

}