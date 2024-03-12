let time = 0;

function clicou() {
    if (time % 2 == 0) {
        const title = document.getElementById('title').style.color = "green"
        const button = document.getElementById('button').innerHTML = 'Acesso'
    } else {
        const title = document.getElementById('title').style.color = "red"
        const button = document.getElementById('button').innerHTML = 'Apagado'
    }
    time++
}