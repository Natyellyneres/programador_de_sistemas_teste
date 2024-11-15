fetch('http://pokeapi.co/api/v2/pokemon/squirtle')
.then(response=> response.json())
.then(data=>{
          console.log('Nome:',data.name.toUpperCase());
    });
    
 