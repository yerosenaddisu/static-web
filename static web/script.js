document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.gallery-item');

    portfolioItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });
});
