// Exercício 3 : Crie uma interface que representará um funcionário.

export default interface Employee {
  registration: string, // numero do registro
  salary: number, // valor do salário
  admissionDate: Date, // data de admissão
  generateRegistration(): string, // retorna uma string única gerada como registro
}