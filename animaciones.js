function mostrar(element) {
    const detalle = element.nextElementSibling;
    const escondido = detalle.style.display === 'none' || !detalle.style.display;
    detalle.style.display = escondido ? 'block' : 'none';
    element.querySelector('span').textContent = escondido ? '-' : '+';
}

const carrusel = document.querySelector('.tendencias-carrusel');
    const items = document.querySelectorAll('.tendencia-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;

    function moveCarrusel(index) {
        const itemWidth = items[0].clientWidth + 20; 
        carrusel.scrollTo({
            left: index * itemWidth,
            behavior: 'smooth'
        });
    }

    function siguiente() {
        currentIndex = (currentIndex + 1) % items.length;
        moveCarrusel(currentIndex);
    }

    function anterior() {
        currentIndex = (currentIndex - 1 + items.length) % items.length; 
        moveCarrusel(currentIndex);
    }

    nextButton.addEventListener('click', siguiente);
    prevButton.addEventListener('click', anterior);

    setInterval(siguiente, 5000);

