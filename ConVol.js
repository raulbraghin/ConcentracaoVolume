//Variáveis Globais



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

    let ConcPd = document.querySelector('p#ValorConcPadrao')
    let ConcMn = document.querySelector('p#ValorConcManual')

    


    if (SelecaoTipoConcPAC[0].checked) {

        ConcPd.innerHTML = 'Valor Padrão xxx mg/L'
        ConcMn.innerHTML = ''
    }
    
    if (SelecaoTipoConcPAC[1].checked) {

        ConcPd.innerHTML = ''
        ConcMn.innerHTML = 'Valor Manual xxx mg/L'
    }


}