/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', async (event) => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
async function getDatasByModalButton() {
    await fetch("frontend/datas/data.json")
        .then(res => res.json()) 
        .then((datas) =>{
            const buttonsModal = document.querySelectorAll('.btnProject')
            for (let i = 0; i < buttonsModal.length; i++) {
                 buttonsModal[i].addEventListener('click', (e)=>{
                    e.preventDefault()
                    localStorage.setItem('basket', JSON.stringify(datas[i]))
                    const basket = JSON.parse(localStorage.getItem('basket'));
                    const modalImage1 = document.getElementById("modalImage1")
                    modalImage1.setAttribute('src', basket.image1)
                    const modalImage2 = document.getElementById("modalImage2")
                    modalImage2.setAttribute('src', basket.image2)
                    const modalImage3 = document.getElementById("modalImage3")
                    modalImage3.setAttribute('src', basket.image3)
                    const title = document.getElementById('modalFadeLabel')
                    title.textContent = basket.name
                })   
            }
        })
        .catch(error => console.error(error))
}

function zoomImages() {
    const containers = document.querySelectorAll(".carousel-image")
    containers.forEach(container => {
        const image = container.querySelector("img")
        container.addEventListener('mousemove', (e)=>{
        const x = e.clientX - e.target.offsetLeft
        const y = e.clientY - e.target.offsetTop    

        image.style.transformOrigin = `${x}px ${y}px`
        image.style.transform = "scale(1.5)"
    })

    container.addEventListener('mouseleave', ()=>{
        image.style.transformOrigin = "center"
        image.style.transform = "scale(1)"
    })
    });
    
    
    
}
zoomImages()
getDatasByModalButton()

} );

 