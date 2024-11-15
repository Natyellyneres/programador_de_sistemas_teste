fetch('http://pokeapi.co/api/v2/pokemon/bulbasaur')
.then(response=> response.json())
.then(data=>{
          console.log('numero de movimentos',data.moves.length);
    });
    
 