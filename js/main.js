const form = document.getElementById('form1');
let linhas = '';
const imgAprovado = '<img src="./images/party.png" alt="Emoje Aprovado"/>'
const imgReprovado = '<img src="./images/sad.png" alt="Emoje Reprovado"/>'
const atividades = []
const notas = []
const entrada = parseInt(prompt('Informe a média.'))

form.addEventListener('submit', (e) => {
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
    atualizaNotaFinal()

})

function adicionaLinha() {
    const inputName = document.getElementById('name');
    const inputNota = document.getElementById('nota');
    
    if (atividades.includes(inputName.value)) {
        alert(`A atividade ${inputName} já está registrada!`)
        return;
    }
    atividades.push(inputName.value)
    notas.push(parseFloat(inputNota.value))

    
    let linha = '<tr>';
    linha += `<td>${inputName.value}</td>`
    linha += `<td>${inputNota.value}</td>`
    linha += `<td>${inputNota.value >= entrada ? imgAprovado : imgReprovado}</td>`
    linha + '</tr>'

    linhas += linha;

    inputName.value = ''
    inputNota.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaNotaFinal() {

    const mediaFinal = cauculaMedia()
    const tdMedia = document.getElementById("media")
    const tdResult = document.querySelector("#infoResult")
    tdResult.innerHTML =""
    
    
    const result = mediaFinal >= entrada ? 'Aprovado' : 'Reprovado'
    let spanResult = document.createElement('span')
    spanResult.className
    if (mediaFinal >= entrada) {
        spanResult.className = "approved"
    }else{
        spanResult.className = "failed"
    }

    spanResult.innerHTML = result

    tdMedia.innerHTML = mediaFinal
    tdResult.appendChild(spanResult)
}

function cauculaMedia() {
    let somaNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i]
        
    }

    return somaNotas / notas.length
}

