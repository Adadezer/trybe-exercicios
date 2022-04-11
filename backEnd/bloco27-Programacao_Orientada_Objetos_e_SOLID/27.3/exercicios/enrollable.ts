// Exercicio 2 - C : Por último crie uma nova interface que será implementada por nossas classes estudante e funcionário, que dirá que a instância delas deve ser matriculável.

export default interface Enrollable {
    enrollment: string, // numero da matricula (ou registro, os dois são a mesma coisa)
    generateEnrollment(): string,
}