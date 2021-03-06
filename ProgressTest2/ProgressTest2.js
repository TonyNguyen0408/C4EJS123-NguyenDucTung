const charactersList = document.getElementById('charactersList');
let data = [];
const loadCharacters = async () => {
    const response = await fetch('https://hp-api.herokuapp.com/api/characters');
    data = await response.json();
    displayCharacters(data);
};
const displayCharacters = (characters) => {
    const htmlString = characters.map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};
loadCharacters(data);
