// Para Fixar

// property shorthand - quando temos uma função onde o nome dos parametros é igual ao nome das propriedades do objeto, ele nos permite colocar somente a chave. o Javascript entende que queremos atribuir o valor de uma propriedade com o mesmo nome que o parâmetro passado 

// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand

// const getPosition = (latitude, longitude) => ({
//     latitude: latitude,
//     longitude: longitude
// });

// console.log(getPosition(-19.8157, -43.9542));

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude
});

console.log(getPosition(-19.8157, -43.9542));