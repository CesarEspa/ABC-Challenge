function voltear(elemento) {
    // Girar la carta
    elemento.classList.toggle('volteada');
    // Actualizar el contador inmediatamente
    actualizarProgreso();
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

    // Al filtrar, el total de cartas cambia, así que recalculamos
    actualizarProgreso();
}

function actualizarProgreso() {
    // 1. Obtenemos todas las cartas
    const todasLasCartas = Array.from(document.querySelectorAll('.card-container'));
    
    // 2. Filtramos solo las que están visibles en pantalla actualmente
    const cartasVisibles = todasLasCartas.filter(card => card.style.display !== 'none');
    
    // 3. Contamos cuántas de esas visibles tienen la clase 'volteada'
    const totalVisibles = cartasVisibles.length;
    const totalVolteadas = cartasVisibles.filter(card => card.classList.contains('volteada')).length;

    // 4. Pintamos el resultado: "Volteadas/Totales"
    document.getElementById('contaVistas').textContent = `${totalVolteadas}/${totalVisibles}`;
}

// Ejecutamos una vez al cargar para que aparezca 0/26 desde el inicio
window.onload = actualizarProgreso;

// LOS COMENTARIOS FUERON PUESTO APROPOSITO PARA ENTENDER MAS LA LOGICA