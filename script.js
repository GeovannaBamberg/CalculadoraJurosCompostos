function calcularJuros(){
    var ValorInicial=Number(document.getElementById("valor-inicial").value)
    var ValorMensal= Number(document.getElementById("valor-mensal").value)
    var TaxaJuros= Number(document.getElementById("taxa-juros").value)
    var Periodo= Number(document.getElementById("periodo").value)

    TaxaJuros=(1+(TaxaJuros/100))
    var montate = (ValorInicial*(Math.pow(TaxaJuros, Periodo)))

    alert(montate.toFixed(2))
}

function limparDados(){

}