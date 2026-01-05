// Typing animation for name
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Keep cursor blinking after typing is complete
            document.querySelector('.cursor').style.animation = 'blink 1s infinite';
        }
    }
    
    type();
}

// Start typing animation when page loads
window.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('typing-name');
    if (nameElement) {
        // Small delay before starting animation
        setTimeout(() => {
            typeWriter(nameElement, 'ADARSH KATARE', 150);
        }, 500);
    }
});
// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");
        if (href.startsWith("#")) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });
});

// Highlight active nav link on scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    let fromTop = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (fromTop >= sectionTop && fromTop < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll(".card, section").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
});





// Typing animation for name
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Keep cursor blinking after typing is complete
            document.querySelector('.cursor').style.animation = 'blink 1s infinite';
        }
    }
    
    type();
}
