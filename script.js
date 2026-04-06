let contador = 0;

function voltear(elemento) {

    let estaVolteada = elemento.classList.toggle("volteada");

    if (estaVolteada) {
        contador = contador + 1;
    } else {
        contador = contador - 1;
    }

    document.getElementById("contaVistas").textContent = contador;
}