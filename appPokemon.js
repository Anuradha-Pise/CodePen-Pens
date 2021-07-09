// https: //raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i < 899; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.append(pokemon);
}

// const generations = {
//     1: {
//         id: 'firstGen',
//         name: 'First Generation Pokemons',
//         first: 1,
//         last: 151
//     },
//     2: {
//         id: 'secondGen',
//         name: 'Second Generation Pokemons',
//         first: 152,
//         last: 251
//     },
//     3: {
//         id: 'thirdGen',
//         name: 'Third Generation Pokemons',
//         first: 252,
//         last: 386
//     },
//     4: {
//         id: 'fourthGen',
//         name: 'Fourth Generation Pokemons',
//         first: 387,
//         last: 494
//     },
//     5: {
//         id: 'fifthGen',
//         name: 'Fifth Generation Pokemons',
//         first: 495,
//         last: 649
//     },
//     6: {
//         id: 'sixthGen',
//         name: 'Sixth Generation Pokemons',
//         first: 650,
//         last: 721
//     },
//     7: {
//         id: 'sevenhGen',
//         name: 'Seventh Generation Pokemons',
//         first: 722,
//         last: 898
//     }
// }

// const numGenerations=Object.keys(generations).length;



