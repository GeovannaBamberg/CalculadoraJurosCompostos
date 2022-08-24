function calcularJuros(){
    var valorInicial=Number(document.getElementById("valor-inicial").value)
    var valorMensal= Number(document.getElementById("valor-mensal").value)
    var elementoTaxaJuros= Number(document.getElementById("taxa-juros").value)
    var elementoPeriodo= Number(document.getElementById("periodo").value)
    var valorFinal=0
    var valorJuros=tipostaxasJuros(elementoTaxaJuros)
    var tempoInvestido = periodoTempo(elementoPeriodo)

    for (let index = 0; index <= tempoInvestido; index++) {
        montate= valorInicial+(valorInicial/100*valorJuros)
        valorInicial= montate+valorMensal
        valorFinal=montate
    }
    valorFinal= valorFinal.toLocaleString('pt-BR',{style:'currency', currency:'BRL'});
    mostrarNaTela(valorFinal)
}
function tipostaxasJuros(taxaJuros) {
    var elementoTipoJuros = document.querySelector('select','#tipoTaxas' )
    var optionSelecionadoJuros = elementoTipoJuros.options[elementoTipoJuros.selectedIndex].value;
   if (optionSelecionadoJuros==="taxaAnual") {
        var valorTaxaMensal = taxaJuros/12
        return valorTaxaMensal
   } else {
        return taxaJuros
   }
}
function periodoTempo(tempo) {
    var elementoTiposPeriodos = document.getElementById('tiposPeriodos')
    var optionSelecionadoPeriodos = elementoTiposPeriodos.options[elementoTiposPeriodos.selectedIndex].value;
    
    if (optionSelecionadoPeriodos=="anual") {
        var tempoConvertido = (tempo*12)
        return tempoConvertido
    } else {
        return tempo
    }

}
function mostrarNaTela(resultado) {
    var elementoDados= document.getElementById("dados")
    return elementoDados.innerHTML=`<p class="dados">${resultado}</p>`;
}



/*function limparDados(valorInicial,valorMensal,taxaJuros, periodo){
return valorInicial.innerText= '0'
}*/