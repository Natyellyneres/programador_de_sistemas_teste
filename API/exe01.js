fetch('http://pokeapi.co/api/v2/pokemon/pikachu')//realiza solicitação
.then(response=> response.json())//guarda as informações da solicitação
.then(data=>{
    console.log('peso:',data.order);//mostra a innformação solicitada
});