//conce PAC 10 a 23% Densidade 1,15 a 1,28

//Variáveis Globais
var gConcPacSelecionada
var gVazaoPAC
var gConcentracaoPAC
var gDensidadePAC
var gResultadoVolumePAC



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

        gConcPacSelecionada = 12    //12% = 120 g/L

        ConcPd.innerHTML = `Valor Padrão ${gConcPacSelecionada}%`

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

    let mostra = document.getElementById("DadosProcesso")

    if (SelecaoTipoConcPAC[1].checked) {

        let Concentracao = document.querySelector('input#ConcRealPAC')

        let VerificaCampo = Preenchimento(Concentracao.value, 30, 8)

        console.log(VerificaCampo)

        if (VerificaCampo == true) {

            gConcPacSelecionada = Concentracao.value

            mostra.style.display = "block"

        }



    } else {

        mostra.style.display = "block"
    }

    console.log(`A concentração selecionada foi ${gConcPacSelecionada}%`)

}

function CalcularVolumePAC() {

    let Vazao = document.querySelector('input#ConcDesejadaProcesso')
    let ConcDesejada = document.querySelector('input#VazaoProcesso')
    let DensPAC = document.querySelector('input#DensidadePAC')

    let mostra = document.getElementById("ResultadoPAC")

    let VerificaCampo = VerPreenchimentoMultiplo(Vazao.value, ConcDesejada.value, DensPAC.value)

    console.log(`Resultado da verificação de todos os campo é ${VerificaCampo}`)

    if (VerificaCampo == true) {

        gVazaoPAC = Vazao.value
        gConcentracaoPAC = ConcDesejada.value
        gDensidadePAC = DensPAC.value

        mostra.style.display = "block"

        console.log("Dentro do IF que mostra o resultado")

    }

    ResultadoPAC(gVazaoPAC,gConcentracaoPAC,gConcPacSelecionada)

}

function ResultadoPAC(VazPAC, ConPAC, ConcPadPAC) {



}

/* ======================= FUNÇÕES GERAIS ==================== */

//FUNÇÃO QUE VERIFICA ARGUMENTO POR ARGUMENTO, INDEPENDENTE DA QUANTIDADE ENVIADA PARA A FUNÇÃO
function VerPreenchimentoMultiplo() {

    var verificacao

    let i

    console.log(arguments.length)

    for (i = 0; i < arguments.length; i++) {
        verificacao = Preenchimento(arguments[i], 99999, 0)

        if (verificacao == false) {
            //SE A PRIMEIRA VERIFICAÇÃO FOR FALSA, ELE INTERROMPE PARA NÃO FICAR
            //MOSTRANDO TODAS AS MENSAGENS DE PREENCHER CAMPOS

            i = arguments.length

            console.log(`Campo Não preenchido`)
        }

        console.log(`Argumento verificado ${i}`)
        console.log(`Argumento com retorno ${verificacao}`)
    }

    return verificacao

}


function Preenchimento(Valor, valorMaximo, ValorMinimo) {

    if (Valor < ValorMinimo && Valor != '') {

        alert(`Valor menor que o ${ValorMinimo}`)
        return false;

    } else if (Valor > valorMaximo && Valor != '') {

        alert(`Valor maior que o ${valorMaximo}`)
        return false;

    } else if (Valor == '') {

        alert('Preencher Campo')
        return false;

    } else {

        return true

    }


}

function ExportarValores(PAC100, PAC10, PAC1, HIPO100, HIPO10, HIPO1, ALC100, ALC10, ALC1, FLU100, FLU10, FLU1, iTempoFloc, itempoDec, VolumeFloculadorETA, VolumeDecantadorETA, NomeArquivo) {

    console.log('Dentro da Função ExportarValores')

    var DadosProcesso = new Array(16)
    var DadosConcatenados = "DOSAGENS E TEMPOS UTILIZADOS NO JARTEST\r\n"

    DadosProcesso[0] = 'Dosagem de PAC Concentrada = ' + String(PAC100) + 'mL'
    DadosProcesso[1] = 'Dosagem de PAC 10% = ' + String(PAC10) + 'mL'
    DadosProcesso[2] = 'Dosagem de PAC 1% = ' + String(PAC1) + 'mL'
    DadosProcesso[3] = 'Dosagem de Hipoclorito na pré Concentrada = ' + String(HIPO100) + 'mL'
    DadosProcesso[4] = 'Dosagem de Hipoclorito na pré 10% = ' + String(HIPO10) + 'mL'
    DadosProcesso[5] = 'Dosagem de Hipoclorito na pré 1% = ' + String(HIPO1) + 'mL'
    DadosProcesso[6] = 'Dosagem de Alcalinizante Concentrada = ' + String(ALC100) + 'mL'
    DadosProcesso[7] = 'Dosagem de Alcalinizante 10% = ' + String(ALC10) + 'mL'
    DadosProcesso[8] = 'Dosagem de Alcalinizante 1% = ' + String(ALC1) + 'mL'
    DadosProcesso[9] = 'Dosagem de Fluoreto Concentrada = ' + String(FLU100) + 'mL'
    DadosProcesso[10] = 'Dosagem de Fluoreto 10% = ' + String(FLU10) + 'mL'
    DadosProcesso[11] = 'Dosagem de Fluoreto 1% = ' + String(FLU1) + 'mL'
    DadosProcesso[12] = 'Tempo do Floculador no Jar Test ' + String(iTempoFloc) + ' segundos'
    DadosProcesso[13] = 'Tempo do Decantador no Jar Test ' + String(itempoDec) + ' segundos'
    DadosProcesso[14] = 'Volume de cada Floculador da ETA ' + String(VolumeFloculadorETA) + ' m³'
    DadosProcesso[15] = 'Volume de cada Decantador da ETA ' + String(VolumeDecantadorETA) + ' m³'

    /*for (let i = 0; i < DadosProcesso.length; i++) {

        console.log(DadosProcesso[i])

    }*/

    for (let i = 0; i < DadosProcesso.length; i++) {

        DadosConcatenados += DadosProcesso[i] + "\r\n"  

    }

    DownloadFile(DadosConcatenados, NomeArquivo)

}

function NomeArquivoTexto() {

    console.log('Dentro Função NomeArquivoTexto')

    var DataAtualizada = new Date()

    var dia = String(DataAtualizada.getDate())
    var mes = String(DataAtualizada.getMonth())
    var ano = String(DataAtualizada.getFullYear())
    var hora = String(DataAtualizada.getHours())
    var minuto = String(DataAtualizada.getMinutes())
    var segundo = String(DataAtualizada.getSeconds())

    var NomeArquivo = 'JarTest_' + ano + '_' + mes + '_' + dia + '_' + hora + '_' + minuto + '_' + segundo + '.txt'

    console.log(NomeArquivo);

    return NomeArquivo


}


//Salvar o arquivo gerado
function DownloadFile(data, file_name, file_type) {
    if (!file_type) {
        file_type = 'application/octet-stream';
    }

    var file = new Blob([data], { type: file_type });
    var a = document.createElement("a"),
        url = URL.createObjectURL(file);
    a.href = url;
    a.download = file_name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}