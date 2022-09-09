/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


document.addEventListener('DOMContentLoaded', () => {
    /**
    * Define Global Variables
    */

    const navElem = document.querySelector('#list_nav')
    const allSections = document.querySelectorAll('section');
    const formElem = document.querySelector('form');

    /**
     * End Global Variables
     * Start Helper Functions
    */

    const titleCase = (string) => {
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }

    const isInViewport = (elem) => {
        const distance = elem.getBoundingClientRect();
        return (
            distance.top <= 150 &&
            distance.bottom >= 150
        );
    };

    /**
     * End Helper Functions
     * Begin Main Functions
     * 
    */

    // build the nav bar

    allSections.forEach((section) => {
        let navLink = document.createElement('li');
        navLink.innerHTML = `<a href="#${section.dataset.nav}">${titleCase(section.dataset.nav)}</a>`;
        navLink.classList.add('menu__link');
        navLink.classList.add(`${section.dataset.nav}-scroll`);
        navElem.append(navLink)
    })

    // add form to the nav bar

    let formNavElem = document.createElement('li');
    formNavElem.innerHTML = '<a href="#form">Subscribe</a>';
    formNavElem.classList.add('form__link');
    formNavElem.classList.add('form-scroll');
    navElem.append(formNavElem)

    const allNavLinks = document.querySelectorAll('.menu__link')
    const formNav = document.querySelector('.form-scroll');

    /**
     * End Main Functions
     * Begin Events
     * 
    */

    // Add class 'active' to section and nav link when section near top of viewport

    window.addEventListener('scroll', () => {
        // add event on scroll
        allNavLinks.forEach((link) => {
            link.classList.remove('active')
        })
        allSections.forEach(section => {
            //for each .thisisatest
            if (isInViewport(section)) {
                //if in Viewport
                section.classList.add("your-active-class");
                allNavLinks.forEach((link) => {
                    if (link.classList[1].includes(section.dataset.nav)) {
                        link.classList.add('active')
                    }
                    else {
                        link.classList.remove('active')
                    }
                })
                formNav.classList.remove('active');
                return;
            }
            section.classList.remove('your-active-class');
        });
        if (isInViewport(formElem)) {
            allNavLinks[allNavLinks.length - 1].classList.remove('active');
            formNav.classList.add('active');
        }
    });

    // Scroll to section on link click 
    allNavLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(allSections)
            let section = Array.from(allSections).find(node => link.classList[1].includes(node.dataset.nav))
            section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        })
    })

    formNav.addEventListener('click', (e) => {
        e.preventDefault();
        formElem.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    })

    formElem.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(formElem);
        let alertMessage = "";
        for (const pair of formData.entries()) {
            alertMessage += pair[0]
            alertMessage += ": "
            alertMessage += pair[1]
            alertMessage += "\n";
        }
        alert(alertMessage)
        formElem.reset();
    })
})