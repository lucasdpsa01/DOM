let botao = document.getElementById("botao");


botao.addEventListener("click", function() {
    document.getElementById("titulo"). textContent = "Agora você é!!!"
});

let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    document.getElementById("texto").style.color = "red";
});