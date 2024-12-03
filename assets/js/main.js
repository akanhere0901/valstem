// Form validation
(() => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                // Here you would typically send the form data to a server
                // For now, we'll just show a success message
                showSuccessMessage();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

// Success message function
function showSuccessMessage() {
    const form = document.getElementById('contactForm');
    const successAlert = document.createElement('div');
    successAlert.className = 'alert alert-success mt-3';
    successAlert.role = 'alert';
    successAlert.innerHTML = 'Thank you for your message! We will get back to you soon.';
    form.insertAdjacentElement('afterend', successAlert);
    form.reset();
    form.classList.remove('was-validated');
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successAlert.remove();
    }, 5000);
}

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Add animation to stats counters
$(document).ready(function() {
    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

// Add scroll-triggered animations
$(window).scroll(function() {
    // Navbar color change on scroll
    if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
    
    // Animate elements when they come into view
    $('.animate-on-scroll').each(function() {
        if (isElementInViewport(this)) {
            $(this).addClass('animate-fadeInUp');
        }
    });
});

// Add cookie consent functionality
function showCookieConsent() {
    if (!localStorage.getItem('cookieConsent')) {
        const consentBanner = `
            <div class="cookie-banner">
                <p>We use cookies to improve your experience. 
                   <button class="btn btn-sm btn-primary ms-3" onclick="acceptCookies()">Accept</button>
                </p>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', consentBanner);
    }
}
  