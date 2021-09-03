// Array contendo a lista de emails.
const emailList = [
    "isa@myemail.com",
    "lipe@myemail.com",
    "digo@myemail.com",
    "greg@myemail.com"
];
  
// Função callback que recebe o array emailList como parâmetro.
const showEmailList = (list) => {
    const div = document.querySelector("#email-list");
    div.innerHTML = ''; // a cada click, essa linha apaga o conteudo da div (q é o paragrafo criado mais a frente no código), isso evita de ter varios paragafos repetidos a cada click

    // Para cada e-mail da lista, a função cria uma tag <p> com a frase '${email}: Enviado com sucesso'
    list.forEach((email) => {
      const p = document.createElement("p");
      p.innerHTML = `${email} : Enviado com sucesso!`;
      div.appendChild(p);
    });
}
  
const btnFilter = document.querySelector("#btn-filter");
btnFilter.addEventListener("click", () => showEmailList(emailList));
  