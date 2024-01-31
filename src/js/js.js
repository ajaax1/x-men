const characters = document.querySelectorAll('.card-character')

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {
        const selectCharacter = document.querySelector('.select')
        selectCharacter.classList.remove('select')
        character.classList.add('select')
        const bigCharacter = document.querySelector('.big-character')
        const idCharacter = character.attributes.id.value;
        bigCharacter.src = `./src/img/card-${idCharacter}.png`
        const nameCharacter = document.getElementById('name-character')
        nameCharacter.innerText = character.getAttribute('data-name')
        const descriptionCharacter = document.getElementById('description-character')
        descriptionCharacter.innerText = character.getAttribute('data-description')
    })
})