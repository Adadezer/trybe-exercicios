let peca = "torre";

switch (peca.toLowerCase()) {
    case 'peão':
        console.log('Peão -> O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal')
        break;
    
    case 'rei':
        console.log('Rei -> O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.')
        break;

    case 'rainha':
        console.log('Rainha -> A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.')
        break;

    case 'torre':
        console.log('Torre -> A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.')
        break;

    case 'bispo':
        console.log('Bispo -> O bispo move-se ao longo da diagonal. Não pode pular outras peças')
        break;

    case 'cavalo':
        console.log('Cavalo -> É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.')
        break;

    default:
        console.log('erro: não é uma peça válida');
        break;
}