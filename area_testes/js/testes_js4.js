let data_hora = new Date();
let dia_semana = data_hora.getDay();
switch (dia_semana) {
    case 0: alert('Domingo de descanso merecido');
        break;
    case 5: alert('Chegou a sexta-feira, isso é legal!');
        break;
    case 6: alert('Maravilha, sábado chegou!!');
        break;
    default: alert('Que semana longa!!');
}