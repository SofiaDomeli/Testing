let quadrado = document.getElementById("quadrado")
const botao = document.querySelector("button")

console.log(quadrado)
mudarCor(cor.value)

function mudarCor(cor) {
    quadrado.style.background = cor    
}

botao.addEventListener("click", () => {
    const cor = document.querySelector("#cor")
    mudarCor(cor.value)
})

