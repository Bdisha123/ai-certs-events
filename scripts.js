// Countdown Timer
const eventDate = new Date('June 1, 2024 00:00:00').getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "Event Started!";
    }
}, 1000);

// Collapsible Sections
const collapsibles = document.getElementsByClassName('collapsible');

for (let i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Tabs
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    const tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.newsletter-signup form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for signing up!');
    });
});



// scroll



window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var heroSection = document.querySelector('.hero');

    if (window.scrollY >= heroSection.offsetHeight) {
        navbar.style.position = 'fixed'; // or 'sticky' for a sticky navbar
        navbar.style.backgroundColor = '#000';
        navbar.style.width = '98%'; // Set width to 100% or 100vw
    } else {
        navbar.style.position = 'sticky'; // Reset to default position
        navbar.style.backgroundColor = 'transparent';
        navbar.style.width = 'auto'; // Reset width to default
    }
});



// -------------------------------------





document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var cross = document.querySelector('.cross');
    var menuList = document.querySelector('.menu-list');

    window.openMenu = function () {
        menuList.classList.add('show');
        hamburger.style.display = 'none';
        cross.style.display = 'block';
        document.body.classList.add('menu-open');
    };

    window.closeMenu = function () {
        menuList.classList.remove('show');
        cross.style.display = 'none';
        hamburger.style.display = 'block';
        document.body.classList.remove('menu-open');
    };

    hamburger.addEventListener('click', openMenu);
    cross.addEventListener('click', closeMenu);

    menuList.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', closeMenu);
    });
});

// ---------------------------------------------


document.addEventListener('DOMContentLoaded', function () {
    const animatedHeading = document.getElementById('animated-heading');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Add active class to trigger animation
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    });

    observer.observe(animatedHeading); // Start observing the element
});




// -------------
// script.js
let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
});

function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}


// ----------------------
document.getElementById('enrollment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Example form submission logic
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const eventName = document.getElementById('eventname').value;
    
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Contact:', contact);
    console.log('Event Name:', eventName);
    
    // Here you can add your form submission logic, like sending data to a server
});
