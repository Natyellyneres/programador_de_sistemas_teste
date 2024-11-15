fetch('http://pokeapi.co/api/v2/pokemon/pikachu')
.then(response=> response.json())
.then(data=>{
    const isEletric =data.types.some(type => type.type.name === 'electric')
          console.log('Pikachu é eletrico:', isEletric);
    });
