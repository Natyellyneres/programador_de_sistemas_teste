fetch('http://pokeapi.co/api/v2/pokemon/ditto')
.then(response=> {
    if(response.ok){
        console.log('ditto existe');
    }else{
        console.log('Ditto não encontrado');
    }
});

    
 