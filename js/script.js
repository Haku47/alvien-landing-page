// Menunggu hingga seluruh konten halaman (DOM) selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // --- FUNGSI ANIMASI SAAT SCROLL ---
    const animatedElements = document.querySelectorAll('.content-section, .project-card');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    animatedElements.forEach(element => {
        observer.observe(element);
    });


    // --- HANYA FUNGSI UNTUK ACTIVE LINK NAVIGASI SAAT SCROLL ---
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 70) {
                current = section.getAttribute('id');
            }
        });

        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
            current = sections[sections.length - 1].getAttribute('id');
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

});