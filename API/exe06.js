fetch('http://pokeapi.co/api/v2/pokemon/charmander')
.then(response=> response.json())
.then(data=>{
    data.types.forEach(type=>{
          console.log('tipo:',type.type.name);
    });
 }); 
    
 