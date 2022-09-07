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
    * 
    */
    const navElem = document.querySelector('#list_nav')
    const allSections = document.querySelectorAll('section');
    const formElem = document.querySelector('form');
    /**
     * End Global Variables
     * Start Helper Functions
     * 
    */

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

    // build the nav


    let historyNavElem = document.createElement('li');
    historyNavElem.innerHTML = '<a href="#history">History</a>';
    historyNavElem.classList.add('menu__link');
    historyNavElem.classList.add('history-scroll');
    navElem.append(historyNavElem)

    let recordsNavElem = document.createElement('li');
    recordsNavElem.innerHTML = '<a href="#records">Records</a>';
    recordsNavElem.classList.add('menu__link');
    recordsNavElem.classList.add('records-scroll');
    navElem.append(recordsNavElem)

    let ownershipNavElem = document.createElement('li');
    ownershipNavElem.innerHTML = '<a href="#ownership">Ownership</a>';
    ownershipNavElem.classList.add('menu__link');
    ownershipNavElem.classList.add('ownership-scroll');
    navElem.append(ownershipNavElem)

    let squadNavElem = document.createElement('li');
    squadNavElem.innerHTML = '<a href="#squad">Squad</a>';
    squadNavElem.classList.add('menu__link');
    squadNavElem.classList.add('squad-scroll');
    navElem.append(squadNavElem)

    let formNavElem = document.createElement('li');
    formNavElem.innerHTML = '<a href="#form">Subscribe</a>';
    formNavElem.classList.add('menu__link');
    formNavElem.classList.add('form-scroll');
    navElem.append(formNavElem)


    const historyNav = document.querySelector('.history-scroll');
    const historySection = document.querySelector('#history');
    const ownershipNav = document.querySelector('.ownership-scroll');
    const ownershipSection = document.querySelector('#ownership');
    const squadNav = document.querySelector('.squad-scroll');
    const squadSection = document.querySelector('#squad');
    const formNav = document.querySelector('.form-scroll');
    const formSection = document.querySelector('#form');

    // Add class 'active' to section when near top of viewport

    // Scroll to anchor ID using scrollTO event

    /**
     * End Main Functions
     * Begin Events
     * 
    */



    // Build menu 

    // Scroll to section on link click



    window.addEventListener('scroll', () => {
        // add event on scroll
        allSections.forEach(element => {
            //for each .thisisatest
            if (isInViewport(element)) {
                //if in Viewport
                element.classList.add("your-active-class");
                return;
            }
            element.classList.remove('your-active-class');
        });
    });
    
    // Set sections as active

    historyNav.addEventListener('click', (e) => {
        e.preventDefault();
        historySection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        historyNav.classList.add('active');
        ownershipNav.classList.remove('active')
        recordsNav.classList.remove('active')
        squadNav.classList.remove('active')
        formNav.classList.remove('active')
    })

    ownershipNav.addEventListener('click', (e) => {
        e.preventDefault();
        ownershipSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        historyNav.classList.remove('active');
        ownershipNav.classList.add('active')
        recordsNav.classList.remove('active')
        squadNav.classList.remove('active')
        formNav.classList.remove('active')

    })

    squadNav.addEventListener('click', (e) => {
        e.preventDefault();
        squadSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        historyNav.classList.remove('active');
        ownershipNav.classList.remove('active')
        recordsNav.classList.remove('active')
        squadNav.classList.add('active')
        formNav.classList.remove('active')
    })

    const recordsNav = document.querySelector('.records-scroll');
    const recordsSection = document.querySelector('#records');

    recordsNav.addEventListener('click', (e) => {
        e.preventDefault();
        recordsSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        historyNav.classList.remove('active');
        ownershipNav.classList.remove('active')
        recordsNav.classList.add('active')
        squadNav.classList.remove('active')
        formNav.classList.remove('active')
    })

    formNav.addEventListener('click', (e) => {
        e.preventDefault();
        formSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        historyNav.classList.remove('active');
        ownershipNav.classList.remove('active')
        recordsNav.classList.remove('active')
        squadNav.classList.remove('active')
        formNav.classList.add('active')
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