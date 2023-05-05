const API_ALL_CHARACTERS = 'https://demon-slayer-api.onrender.com/v1/'

const listWrapper = document.querySelector('.ul')

const apiBaseImage = '/characters'
const details = 'https://demon-slayer-api.onrender.com/v1/'

getData(API_ALL_CHARACTERS)
ShowCharacters()

function getData(url){
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
        console.log(data)
        ShowCharacters(data)
    })
}

function ShowCharacters(data) {
    listWrapper.innerHTML = ''
    data.forEach(character => {
        const {
           name,
        } = character  
        
        const urlDetails = details + name

        const imageCharacters = apiBaseImage + '/' + name + '.png'

        const characterElement = document.createElement('li')
        characterElement.classList.add('card')
        characterElement.innerHTML = `
        <img src="${imageCharacters}" alt="">
        <div class="details">
            <p>Personagem</p>
            <h3>${name}</h3>
        </div>
        `
        listWrapper.appendChild(characterElement)
    });
}


