

    document.addEventListener("DOMContentLoaded", function () {
        const menuTrigger = document.querySelector('.menu-trigger');
        const navMenu = document.querySelector('.nav');

        menuTrigger.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });
    });

       document.addEventListener("DOMContentLoaded", function () {
            const navLinks = document.querySelectorAll('.scroll-to-section a');

            navLinks.forEach(link => {
                link.addEventListener('click', function (event) {
                    event.preventDefault();

                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 50, // Sesuaikan dengan kebutuhan Anda
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });

        const productItems = document.querySelectorAll('.product-item');

        productItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'scale(1.1)';
                item.querySelector('img').style.transform = 'scale(1.1)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'scale(1)';
                item.querySelector('img').style.transform = 'scale(1)';
            });
        });

