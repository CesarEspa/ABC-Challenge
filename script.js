const letrasVistas = new Set();

function voltear(elemento) {
    elemento.classList.toggle('volteada');
    const letra = elemento.querySelector('h1').textContent;

    if (elemento.classList.contains('volteada')) {
        if (!letrasVistas.has(letra)) {
            letrasVistas.add(letra);
            document.getElementById('contaVistas').textContent = letrasVistas.size;
        }
    }
}

function filtrar(tipo) {
    const cards = document.querySelectorAll('.card-container');
    cards.forEach(card => {
        if (tipo === 'todas') {
            card.style.display = 'block';
        } else {
            card.style.display = card.getAttribute('data-tipo') === tipo ? 'block' : 'none';
        }
    });
}
