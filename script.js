telaInputs()
function telaInputs() {
    const elementoDados= document.getElementById("dados");
    elementoDados.className="telaInputAberta"
    elementoDados.innerHTML=`
    <label>Deposito Inicial</label> <br>
    <input type="number" id="valor-inicial" >
    <br>`;
    elementoDados.innerHTML+=`
    <label>Deposito Mensal</label> <br>
    <input type="number" id="valor-mensal">
    <br>`;
    elementoDados.innerHTML+=`
    <label>Taxa de Juros</label> 
    <select id="tipoTaxas">
        <option value="taxaAnual">Ano</option>
        <option value="taxaMensal">Meses</option>
    </select>
    <br>`;
    elementoDados.innerHTML+=`<input type="number" id="taxa-juros">
    <br>`;
    elementoDados.innerHTML+=`
    <label>Periodo<label>                         
    <select id="tiposPeriodos">
        <option value="anual">Anos</option>
        <option value="mensal">Meses</option>
    </select> <br>
    <input type="number" id="periodo">
    <br>`;
}

function botaoCalcular(){
    const elementoDados= document.getElementById("dados");
    elementoDados.className=='telaInputFechada'? telaInputs():calcularJurosCompostos();
}
function limparDados(){
    return telaInputs();
}
function calcularJurosCompostos() {
    var valorInicial=Number(document.getElementById("valor-inicial").value);
    var valorMensal= Number(document.getElementById("valor-mensal").value);
    var taxaJuros= Number(document.getElementById("taxa-juros").value);
    var periodo= Number(document.getElementById("periodo").value);
    var valorFinal=0;
    var taxaJuros=tipostaxasJuros(taxaJuros);
    var periodo = conversorTempo(periodo);
    if ((taxaJuros=== 0)&&(periodo===0)) {
        alert('Não dar para continuar sem os dados da taxa de juros e o periodo');
    } else {
        for (let index = 0; index <= periodo; index++) {
            montate= valorInicial+(valorInicial/100*taxaJuros);
            valorInicial= montate+valorMensal;
            valorFinal=montate;
        }
        mostrarNaTela(valorFinal);
    }
}
function tipostaxasJuros(taxaJuros) {
    var elementoTipoJuros = document.querySelector('select','#tipoTaxas' );
    var optionSelecionadoJuros = elementoTipoJuros.options[elementoTipoJuros.selectedIndex].value;
   if (optionSelecionadoJuros==="taxaAnual") {
        var valorTaxaMensal = (taxaJuros/12);
        return valorTaxaMensal;
   } else {
        return taxaJuros;
    }
}
function conversorTempo(periodo) {
    var elementoTiposPeriodos = document.getElementById('tiposPeriodos');
    var optionSelecionadoPeriodos = elementoTiposPeriodos.options[elementoTiposPeriodos.selectedIndex].value;
    if (optionSelecionadoPeriodos=="anual") {
        var tempoConvertido = (periodo*12);
        return tempoConvertido;
    } else {
        return periodo;
    }
}
function mostrarNaTela(valorFinal) {
    valorFinal= valorFinal.toLocaleString('pt-BR',{style:'currency', currency:'BRL'});
    const elementoDados= document.getElementById("dados");
    elementoDados.className="telaInputFechada";
    elementoDados.innerHTML= `<div class="resultado"><Label>Valor Final</Label><br>
    <div id="localResultado" >${valorFinal}</div> </div>`;
}