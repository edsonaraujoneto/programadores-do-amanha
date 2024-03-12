var id = 0;

class Pet {
    constructor(nome, animal, raca, idade) {
        this.id = id+1
        this.nome = nome
        this.animal = animal
        this.raca = raca
        this.idade = idade
        ++id
    }
}

function createCardPet(nomePm, animalPm, racaPm, idadePm) {
    const nome = document.createElement('h1')
    const animal = document.createElement('span')
    const raca = document.createElement('span')
    const idade = document.createElement('idade')

    const section = document.getElementById('card')

    nome.innerHTML = nomePm
    animal.innerHTML = animalPm
    raca.innerHTML = racaPm
    idade.innerHTML = idadePm

    let div = document.createElement('div')
    section.appendChild(div)
    div.appendChild(nome)
    div.appendChild(animal)
    div.appendChild(raca)
    div.appendChild(idade)

}

function criarPet() {
    const nome = document.getElementById('nome').value
    const animal = document.getElementById('animal').value
    const raca = document.getElementById('raca').value
    const idade = document.getElementById('idade').value
    const pet= new Pet(nome,animal,raca,idade)
    createCardPet(pet.nome, pet.animal,pet.raca, pet.idade)
}
