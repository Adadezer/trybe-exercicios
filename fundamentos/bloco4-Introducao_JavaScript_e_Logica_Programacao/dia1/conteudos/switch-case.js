let estadoCandidato = 'lista';

switch (estadoCandidato) {
    case 'aprovada':
        console.log('Parabéns, você foi aprovada(o)!')
        break;

    case 'lista':
        console.log('Você está na nossa lista de espera');
        break;

    default:
        console.log('Você foi reprovada(o)!');
        break;
}