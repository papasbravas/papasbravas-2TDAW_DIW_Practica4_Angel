function mostrar(element) {
    const detalle = element.nextElementSibling;
    const escondido = detalle.style.display === 'none' || !detalle.style.display;
    detalle.style.display = escondido ? 'block' : 'none';
    element.querySelector('span').textContent = escondido ? '-' : '+';
}

