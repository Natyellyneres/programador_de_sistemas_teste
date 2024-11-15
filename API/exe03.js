fetch('http://pokeapi.co/api/v2/pokemon/squirtle')
.then(response=> response.json())
.then(data=>{
    console.log('nome',data.name);
    console.log('peso:',data.weight);
});