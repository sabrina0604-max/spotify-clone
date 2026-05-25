const btnEsquerdo = document.querySelectorAll(".btn-esquerdo");
const btnDireito = document.querySelectorAll(".btn-direito");
const carrosel = document.querySelectorAll(".container-carrosel");

btnEsquerdo.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        carrosel[index].scrollLeft -=200;
    })
})

btnDireito.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        carrosel[index].scrollLeft +=200;
    })
})