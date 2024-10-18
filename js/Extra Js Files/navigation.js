document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.getElementById('nav-bar');
    const links = navBar.querySelectorAll('.nav-link');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Get the target element
            const targetId = this.getAttribute('href').replace('#', '');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Smoothly scroll to the target
                const topOffset = 60;
                window.scrollTo({
                    top: targetElement.offsetTop - topOffset,
                    behavior: 'smooth'
                });

                // Remove active class from all links
                links.forEach(function(lnk) {
                    lnk.classList.remove('active');
                });

                // Add active class to the clicked link
                this.classList.add('active');
            } else {
                console.error("Invalid target:", targetId);
            }
        });
    });
});

