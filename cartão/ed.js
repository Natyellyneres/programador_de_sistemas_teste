function ira() {
    let text = document.getElementById('info');
    if (text.style.display === "none") {
        text.innerHTML = "Como profissional de Educação Física, acredito que o movimento é a chave para uma vida equilibrada. Cada passo, cada alongamento e cada meta alcançada é um investimento na saúde e no bem-estar que transforma vidas."; // Define o conteúdo do texto
        text.style.display = "block"; // Mostra o texto
    } else {
        text.style.display = "none"; // Oculta o texto
    }
}
function insta(){
    window.open("https://www.instagram.com/movimentoeducacaofisica/"); 
}
function link(){
    window.open("https://www.linkedin.com/in/tatiane-gon%C3%A7alves-profissional-de-ed-f%C3%ADsica-809a6a54/")
}
function whats(){
    window.open("https://api.whatsapp.com/send?phone=(61)9-1234-5678&");
}