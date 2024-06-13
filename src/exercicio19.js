/* Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let horarios = [];

function validarHorario(horario) {
    const partes = horario.split('.');
    if (partes.length !== 3) return false;

    const [hh, mm, ss] = partes;
    if (hh.length !== 2 || mm.length !== 2 || ss.length !== 2) return false;

    const hora = parseInt(hh, 10);
    const minuto = parseInt(mm, 10);
    const segundo = parseInt(ss, 10);

    if (isNaN(hora) || isNaN(minuto) || isNaN(segundo)) return false;
    if (hora < 0 || hora > 23) return false;
    if (minuto < 0 || minuto > 59) return false;
    if (segundo < 0 || segundo > 59) return false;

    return true;
}

function lerHorario(i) {
    rl.question(`Digite o horário ${i + 1} no formato HH.MM.SS: `, function(horario) {
        if (validarHorario(horario)) {
            horarios.push(horario);
            if (horarios.length < 5) {
                lerHorario(horarios.length);
            } else {
                exibirHorarios();
                rl.close();
            }
        } else {
            console.log('Horário inválido. Tente novamente.');
            lerHorario(i);
        }
    });
}

function exibirHorarios() {
    console.log("\nHorários fornecidos:");
    horarios.forEach(horario => console.log(horario));
}

lerHorario(0);
