
export default function initScrollSuave(){
    const linkInterno=document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        const topo = section.offsetTop;
        console.log(topo)
        window.scrollTo({
            top:topo,
            behavior: 'smooth',
        })


    }

    linkInterno.forEach((link) =>{
        link.addEventListener('click', scrollToSection);

    })
}

