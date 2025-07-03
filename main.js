
window.addEventListener('DOMContentLoaded', () => {
    const fill = document.querySelector('.progress-fill');

    setTimeout(() => {
      fill.style.width = '100%'; 
    }, 200); 
});

const scrollBtn = document.querySelector('.scroll-top-btn1');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
});

scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
