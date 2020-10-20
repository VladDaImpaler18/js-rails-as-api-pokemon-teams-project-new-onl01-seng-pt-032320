const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

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
}

function addPokemon(pokemon){
    let pokemonUI = document.querySelector(`UI for ${pokemon.trainer_id}`)
    const listNode = document.createElement("li");
    let pokemonName = document.createTextNode(pokemon.nickname);
    let releaseButton = document.createElement("BUTTON");
        releaseButton.textContent="Release";
        releaseButton.classList.add("release");
        releaseButton.dataset.id=pokemon.id;

}