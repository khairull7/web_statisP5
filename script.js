// Animasi sederhana menggunakan JavaScript
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.animate-text');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
        }, index * 200);
    });
});

document.querySelectorAll('.animate-text').forEach(element => {
    element.style.transform = 'translateY(20px)';
    element.style.opacity = '0';
});
