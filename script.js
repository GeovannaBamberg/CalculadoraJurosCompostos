function calcularJuros(){
    var ValorInicial=Number(document.getElementById("valor-inicial").value)
    var ValorMensal= Number(document.getElementById("valor-mensal").value)
    var TaxaJuros= Number(document.getElementById("taxa-juros").value)
    var Periodo= Number(document.getElementById("periodo").value)

    var montate = (ValorInicial*((1+TaxaJuros)**Periodo))
    alert(montate)
}

function limparDados(){

}