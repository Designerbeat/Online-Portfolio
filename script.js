//Add DOMcontentloaded function
document.addEventListener('DOMContentLoaded', function() {

// const header = document.querySelector('header');
// header.addEventListener('click', function() {
//   header.style.backgroundColor = 'red';

// });

  

    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
      container.addEventListener('mousemove', e => {
        const text = container.querySelector('.image-text');
        const rect = container.getBoundingClientRect();
    
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
    
        text.style.left = `${x}px`;
        text.style.top = `${y}px`;
      });
    });


    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    });

 
});

