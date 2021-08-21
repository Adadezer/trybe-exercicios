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

let data = document.getElementById('inicioUltimoEmprego').DatePickerX.init({format: 'dd/mm/yyyy'});