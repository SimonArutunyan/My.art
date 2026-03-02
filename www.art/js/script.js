// Этот скрипт добавляет простые анимации при прокрутке страницы.
// Для более сложных эффектов можно использовать библиотеки вроде AOS (Animate On Scroll)

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero');
    const aboutPreviewSection = document.querySelector('.about-preview');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const footer = document.querySelector('footer');

    // Функция для добавления класса анимации при появлении элемента
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        // Анимация заголовка и текста на главной странице
        if (heroSection) {
            const heroTop = heroSection.getBoundingClientRect().top;
            if (heroTop < windowHeight - 100) { // Показываем, когда верх секции на 100px от низа экрана
                // Анимации для h1 и p уже заданы в CSS через @keyframes и применяются при загрузке
            }
        }

        // Анимация секции "Обо мне" (превью)
        if (aboutPreviewSection) {
            const aboutTop = aboutPreviewSection.getBoundingClientRect().top;
            if (aboutTop < windowHeight - 100) {
                aboutPreviewSection.classList.add('animated', 'slideInUp');
            }
        }

        // Анимация элементов галереи
        galleryItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight - 100) {
                item.classList.add('animated', 'bounceIn');
            }
        });

        // Анимация футера
        if (footer) {
            const footerTop = footer.getBoundingClientRect().top;
            if (footerTop < windowHeight - 100) {
                footer.classList.add('animated', 'fadeInUp');
            }
        }
    };

    // Вызываем функцию при загрузки страницы
    revealOnScroll();

    // Вызываем функцию при прокрутке
    window.addEventListener('scroll', revealOnScroll);
});