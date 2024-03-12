let darkModeButton = document.getElementById('darkModeButton')
let darkModeRadius = document.getElementById('darkModeRadius') 
let body = document.getElementsByTagName('body')[0]

let isLight = true;

darkModeButton.addEventListener('click', () => {
    if (isLight) {
        body.style.backgroundColor = 'black'
        body.style.transition = '.5s'
        body.style.color = 'white'
        darkModeButton.style.justifyContent = 'end'
        isLight = false
        console.log('true')
    } else {
        body.style.backgroundColor = 'white'
        body.style.transition = '.5s'
        body.style.color = 'black'
        darkModeButton.style.justifyContent = 'start'
        isLight = true
    }
})