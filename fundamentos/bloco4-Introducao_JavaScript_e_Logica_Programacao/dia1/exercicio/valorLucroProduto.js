let valorCusto = 10;
let valorVenda = 20;

if (valorCusto >=0 && valorVenda >=0) {

    let imposto = valorCusto * 0.2; 

    let valorCustoTotal = valorCusto + imposto;
    let lucro = (valorVenda - valorCustoTotal) * 1000; 
    
    console.log(lucro);
}else{
    console.log('erro: valor negativo')
}