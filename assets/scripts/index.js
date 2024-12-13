document.addEventListener('DOMContentLoaded', function() {
    const headerMain = document.querySelector('.header__main');
    const scrollThreshold = 38;

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            headerMain.classList.add('fixed-menu');
        } else {
            headerMain.classList.remove('fixed-menu');
        }
    });
});