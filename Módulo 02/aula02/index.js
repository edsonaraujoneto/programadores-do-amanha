const lista = document.getElementById('lista');

for (var i = 0; i < 10; i++) {
    var li = document.createElement('li');
    li.innerHTML = ` Posição ${i}`;
    lista.append(li);
}

