fetch('http://pokeapi.co/api/v2/pokemon/pikachu')
.then(response=> response.json())
.then(data=>{
    data.abilities.forEach(ability=>{
          console.log('Habilidades',ability.ability.name);
    });
 }); 
    
 