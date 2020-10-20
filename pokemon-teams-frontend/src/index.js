const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", () => {
    const trainers = getTrainers();
    trainers.array.forEach(element => {
        trainerCard(element);
    });
})


function trainerCard(trainer){
    let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.dataset.id = trainer.id;
    let trainerName = document.createElement("p");
        trainerName.textContent=trainer.name
    let addButton = document.createElement("BUTTON");
        addButton.textContent = "Add Pokemon";
        addButton.dataset.id = trainer.id;
    let pokemonUl = document.createElement("ul");
        pokemonUl.id = `UI for ${trainer.id}`;

    cardDiv.appendChild(trainerName);
    cardDiv.appendChild(addButton);
    cardDiv.appendChild(pokemonUl);
    //do some sort of foreach loop through the trainer's Pokemons
    //and add them using addPokemon function
}

function addPokemon(pokemon){
    let pokemonUl = document.querySelector(`UI for ${pokemon.trainer_id}`)
    const listNode = document.createElement("li");
    let pokemonName = document.createTextNode(pokemon.nickname);
    let releaseButton = document.createElement("BUTTON");
        releaseButton.textContent="Release";
        releaseButton.classList.add("release");
        releaseButton.nodeValue=pokemon.id;
    listNode.appendChild.pokemonName;
    listNode.appendChild(releaseButton);
    pokemonUl.appendChild(listNode);
}

function getTrainers()
{
    
    return JSON.parse(result);
}