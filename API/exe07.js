fetch('http://pokeapi.co/api/v2/pokemon?limit=5')
.then(response=> response.json())
.then(data=>{
    data.results.forEach(pokemon=> {
          console.log('nome', pokemon.name);
    });
 }); 
    
 