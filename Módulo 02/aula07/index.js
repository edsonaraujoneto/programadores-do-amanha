const button = document.getElementById('ibutton')

fetch("https://loginvalidatorapi-mmwp.onrender.com/")
    .then(res => res.json())
    .then(data => {
        button.addEventListener('click', () => {
            const span = document.createElement("span")
            span.innerHTML = JSON.stringify(data)
            document.body.appendChild(span)

            const span2 = document.createElement("span")
            span2.innerHTML = JSON.parse(data)
            document.body.appendChild(span2)

            const span3 = document.createElement("span")
            span3.innerHTML = data.message.toUpperCase()
            document.body.appendChild(span3)
        })

    })

