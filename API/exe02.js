fetch('http://pokeapi.co/api/v2/pokemon/charmander')
.then(response=> response.json())
.then(data=>{
    console.log('Altura:',data.height);
});