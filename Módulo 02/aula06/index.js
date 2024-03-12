class BreakingBad {
    constructor(name, age, profession, linkImg) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.linkImg = linkImg;
    }
}

let walterWhite = new BreakingBad('Walter White',50,'Chemical Teacher','./imagens/Walter_White_S5B.png')

createCharacter(walterWhite.name, walterWhite.age, walterWhite.profession, walterWhite.linkImg)

function createCharacter (name, age, profession, linkImg) {
    let container = document.createElement("div")
    document.body.appendChild(container)

    container.classList.add('container')

    let linkFc = document.createElement("img")
    linkFc.src = linkImg

    let nameFc = document.createElement("h1")
    nameFc.innerHTML = name
    
    let ageFc = document.createElement("span")
    ageFc.innerHTML = age

    let professionFc = document.createElement("span")
    professionFc.innerHTML = profession

    container.appendChild(linkFc)
    container.appendChild(nameFc)
    container.appendChild(ageFc)
    container.appendChild(professionFc)

}