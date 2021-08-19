function estadosBrasileiros() {
    const selectEstado = document.getElementById('select-estado');
    const tagFielsset = document.getElementsByTagName('fieldset');

    let arraySiglaEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RS', 'RR', 'SC', 'SE', 'SP', 'TO'];

    let arrayTextoEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato rosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];


    for (let index = 0; index < arraySiglaEstado.length; index += 1) {
        let optionEstado = document.createElement('option');
        optionEstado.value = arraySiglaEstado[index];
        optionEstado.innerHTML = arrayTextoEstado[index];
        selectEstado.appendChild(optionEstado);
    }    
}
estadosBrasileiros();

function ultimoEmprego(event) {
    event.preventDefault();
    let inicioUltimoEmprego = document.getElementById('inicioUltimoEmprego').value;
    if (!inicioUltimoEmprego.includes('/')) { // se no valor do input inicioUltimoEmprego não tiver '/', mostra o alert
        alert('Erro: use barra ("/ ") para separar a data')
    }

    let ddmmaaaa = inicioUltimoEmprego.split('/', 3); 
    for (let index = 0; index < ddmmaaaa.length; index += 1) {
        ddmmaaaa[index] = parseInt(ddmmaaaa[index]);
    }

    if (ddmmaaaa[0] <=0 || ddmmaaaa[0] >31) {
        alert('Erro: dia tem que estar entre 1 e 31');
    }

    if (ddmmaaaa[1] <=0 || ddmmaaaa[1] >12) {
        alert('Erro: mês tem que estar entre 1 e 12');
    }

    if (ddmmaaaa[2] < 0) {
        alert('Erro: ano não pode ser negativo');
    }
}
const btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click', ultimoEmprego);

// let data = '20/10/2020'
// console.log(data.split('/', 3));

// split -> usado somente com strings ('separador', quantas vezes vai dividir a string, no caso ele separa do começo da string até achar o primeiro separador, divide ela, procura o segundo a partir do primeiro, divide ela... essa divisão é mostrada num array)