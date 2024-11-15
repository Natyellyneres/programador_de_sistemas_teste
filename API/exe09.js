fetch('http://pokeapi.co/api/v2/pokemon/pikachu')
.then(response=> response.json())
.then(data=>{
    data.moves.forEach(move=>{
          console.log('Habilidades',move.move.name);
    });
 }); 
    
 