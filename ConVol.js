//conce PAC 10 a 23% Densidade 1,15 a 1,28

//Variáveis Globais
var ConcPacSelecionada



function CalculoPAC() {

    let MostrarSelecaoPAC = document.getElementById("PAC")
    let MostrarSelecaoHIPO = document.getElementById("Hipo")
    let MostrarSelecaoFluor = document.getElementById("Fluor")

    MostrarSelecaoPAC.style.display = "block"
    MostrarSelecaoHIPO.style.display = "none"
    MostrarSelecaoFluor.style.display = "none"

}

function SelecaoConcPAC() {

    let SelecaoTipoConcPAC = document.getElementsByName('SelecaoConc')

    let ConcPd = document.getElementById("ValorConcPadrao")
    let ConcRl = document.getElementById("ValorConcReal")


    if (SelecaoTipoConcPAC[0].checked) {

        ConcPacSelecionada = 12    //12% = 120 g/L
        
        ConcPd.innerHTML = `Valor Padrão ${ConcPacSelecionada}%`

        ConcPd.style.display = "block"
        ConcRl.style.display = "none"

    }

    if (SelecaoTipoConcPAC[1].checked) {

        ConcRl.style.display = "block"
        ConcPd.style.display = "none"

    }


}

function ConcSelecionadaPAC() {

    let SelecaoTipoConcPAC = document.getElementsByName('SelecaoConc')

    if (SelecaoTipoConcPAC[1].checked) {

        let Concentracao = document.querySelector('input#ConcRealPAC')
        ConcPacSelecionada = Concentracao.value

    }

    console.log(`A concentração selecionada foi ${ConcPacSelecionada}%`)


}