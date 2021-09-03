// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const funcionario = (params) => {
    const tratamento = params.split(' ').join('_').toLowerCase();
    // split transforma a string num array de substring, e com ele divido nome e sobrenome
    //join une esse array em um string novamente com o caracter '_'
    //toLowerCase pega essa string criada no join e coloca todas elas em letra minuscula

    const objFuncionario = {
        nomeCompleto: params,
        email: `${tratamento}@trybe.com`
    }
    return objFuncionario;
};
// console.log(funcionario('AdaDeZer'));

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas

      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas

      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees(funcionario));