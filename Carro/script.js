function loadCharacters(){
    fetch("http://localhost:5501/api/carro")
    .then(response => response.json())
    .then(data=>{
        const list = document.getElementById("charcter-list");
        list.innerHtml = '';
        data.forEach(car)
    })
}