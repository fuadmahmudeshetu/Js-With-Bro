/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(fuad => {
    if (!fuad.ok) {
        throw new Error("Could no fetch the resource");
    }

    return fuad.json();
}).then(data => console.log(data.name)).catch(error => console.log(error));

*/

fetchData();
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch the resource");
        }

        const fuad = await response.json();
        const pokemonSprite = fuad.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    } catch (error) {
        console.log(error);
    }
}