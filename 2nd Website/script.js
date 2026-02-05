// ==================== Capability Card Flip on Click ====================
const capabilityCards = document.querySelectorAll('.capability-card');

capabilityCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Toggle flip state
        card.classList.toggle('flipped');
    });
});

// ==================== Mobile Menu Toggle ====================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

const closeMobileMenu = () => {
    if (navMenu) {
        navMenu.classList.remove('active');
    }
    if (menuToggle) {
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
};

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', String(isActive));
    });
}

// ==================== Dropdown Menu for Mobile ====================
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
            
            // Toggle this dropdown
            dropdown.classList.toggle('active');
        }
    });
});

// Close menu when a non-dropdown link is clicked
const navLinks = document.querySelectorAll('.nav-menu > li:not(.dropdown) > .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Close mobile menu when dropdown menu item is clicked
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            closeMobileMenu();
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// ==================== Smooth Scroll Navigation ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Skip if it's a dropdown link
        if (this.parentElement.classList.contains('dropdown')) {
            return;
        }
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 70; // Account for sticky navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== Contact Form Handling ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        try {
            // For now, log the data and show success message
            // In production, this would send to a backend API
            console.log('Form submitted:', formData);
            
            // Show success message
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Message Sent! ?';
            submitBtn.style.backgroundColor = '#10b981';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
            }, 3000);

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again later.');
        }
    });
}

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe capability cards for fade-in animation
document.querySelectorAll('.capability-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe client logos
document.querySelectorAll('.client-logo').forEach(logo => {
    logo.style.opacity = '0';
    logo.style.transform = 'translateY(20px)';
    logo.style.transition = 'all 0.6s ease';
    observer.observe(logo);
});

// ==================== Active Navigation Link ====================
const updateActiveNav = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.style.color = 'var(--secondary-color)';
        }
    });
};

window.addEventListener('scroll', updateActiveNav);

// ==================== Navbar Shadow on Scroll ====================
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop;
});

// ==================== Image Lazy Loading Fallback ====================
if (!('loading' in HTMLImageElement.prototype)) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('loading');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ==================== Utility: Add Loading State to Buttons ====================
const addButtonLoadingState = (button, duration = 2000) => {
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Loading...';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, duration);
};

// Make it globally available
window.addButtonLoadingState = addButtonLoadingState;

// ==================== Initialize ====================
console.log('Website initialized successfully');
