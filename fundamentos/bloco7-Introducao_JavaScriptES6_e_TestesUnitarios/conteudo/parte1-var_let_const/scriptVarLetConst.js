// TROQUE VAR POR LET E CONST E VEJA A DIFERENÇA

if (true) {
    // inicio do escopo do if
    const userAge = "20";
    console.log('dentro do if: '+ userAge); // 20
    // fim do escopo do if
}
console.log('fora do if: '+ userAge); // 20

////////////////////////////////////////////////////////////////////////////////

// var pode ser redeclarado sem gerar erros, let e const não
let userName = "Isabella";
let userName = "Lucas";
console.log(userName); // Resultado: Lucas

// mais informações no evernote