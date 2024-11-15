fetch('http://pokeapi.co/api/v2/pokemon/pikachu')
.then(response => response.json())
.then(data =>{
    console.log('Numero de habilidades:',
    data.abilities.length);
});