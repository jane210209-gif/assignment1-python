?variant="standard" id="62843" title="Portfolio JavaScript"}
```javascript
// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


// Reveal sections while scrolling

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('visible');

        }

    });

}, {
    threshold: 0.15
});


document.querySelectorAll('.section, .hero').forEach(section => {

    section.classList.add('reveal');

    observer.observe(section);

});
```
