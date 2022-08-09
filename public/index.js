// Projeto Simulador de Partida de Futebol -------------
// Dev: Denilson Brito ---------------------------------
// Linguagem: NodeJs -----------------------------------

$(document).ready(() => {
    escopo.iniciar();
});

escopo = {
    iniciar: function() {
        // Define o array de lances possíveis
        var lancesPossiveis = [
            "Goooooooooooolll do Flamengooooo!!!!",// 0
            "Goooooooooooolll do Vascooooo!!!!",// 1
            "Escanteio para o Flamengo!",// 2
            "Escanteio para o Vasco!",// 3
            "Falta para o Flamengo!",// 4
            "Falta para o Vasco!",// 5
            "Flamengo avança!",// 6
            "Vasco avança!",// 7
            "Flamengo recua.",// 8
            "Vasco recua.",// 9
            "Jogador do Flamengo está impedido!",// 10
            "Jogador do Vasco está impedido!",// 11
            "Flamengo e Vasco se respeitam.",// 12
            "Pênalti para o Flamengo!",// 13
            "Pênalti para o Vasco!",// 14
            "Substituição no Flamengo.",// 15
            "Substituição no Vasco.",// 16
            "As torcidas dão um show no estádio!",// 17
            "Flamengo prende a bola.",// 18
            "Vasco prende a bola."// 19
        ];
        // Define as variáveis de
        var lance = 0;
        var penalti = 0;
        var flamengo =  0;
        var vasco = 0;
        var historicoFlamengo = 0;
        var historicoVasco = 0;
        var historicoEmpate = 0;
        // Insere o placar na div #placar
        $(`#placar`).append(` ${flamengo} x ${vasco} `);
        // Registra a ação de click do botão #iniciarpartida
        $(`#iniciarPartida`).click(function() {
            // Reinicia o placar após o click do botão
            flamengo = 0;
            vasco = 0;
            $(`#minuto-a-minuto`).html(``);
            // Looping de lances
            for (i=0; i<=19; i++) {
                // Gera um número inteiro aleatório de 0 a 10
                lance = parseInt(Math.random()*20);
                console.log(lance)
                // Insere um lance aleatório do array lancesPossiveis na div #minuto-a-minuto
                $(`#minuto-a-minuto`).append(`${lancesPossiveis[lance]}<br/>`);
                // Verifica se algum time marcou, se sim, insere +1 no placar para o time verificado.
                if (lance == 0) {
                    flamengo = ++flamengo;
                } else if (lance == 1) {
                    vasco = ++vasco;
                } else if (lance == 13) {
                    penalti = parseInt(Math.random()*5);
                    if (penalti <= 2) {
                        $(`#minuto-a-minuto`).append(`${lancesPossiveis[0]}<br/>`);
                        flamengo = ++flamengo;
                    } else {
                        $(`#minuto-a-minuto`).append(`Pênalti perdido!<br/>`);
                    }
                } else if (lance == 14) {
                    penalti = parseInt(Math.random()*5);
                    if (penalti <= 2) {
                        $(`#minuto-a-minuto`).append(`${lancesPossiveis[1]}<br/>`);
                        vasco = ++vasco;
                    } else {
                        $(`#minuto-a-minuto`).append(`Pênalti perdido!<br/>`);
                    }
                }
                // Atualiza o placar na div #placar após a conclusão dos lances
                $(`#placar`).html(` ${flamengo} x ${vasco} `);
            }
            // Verifica resultado e armazena para criar o histórico
            if (flamengo > vasco) {
                historicoFlamengo = ++historicoFlamengo;
                $(`#minuto-a-minuto`).append(`<br/><b>Vitória do Flamengo!</b><br/>`);
                $(`#minuto-a-minuto`).append(`
                <br/>Vitórias do Flamengo: ${historicoFlamengo}
                <br/>Vitórias do Vasco: ${historicoVasco}
                <br/>Empates: ${historicoEmpate}
                `);
            } else if (flamengo < vasco) {
                historicoVasco = ++historicoVasco;
                $(`#minuto-a-minuto`).append(`<br/><b>Vitória do Vasco!</b><br/>`);
                $(`#minuto-a-minuto`).append(`
                <br/>Vitórias do Flamengo: ${historicoFlamengo}
                <br/>Vitórias do Vasco: ${historicoVasco}
                <br/>Empates: ${historicoEmpate}
                `);
            } else {
                historicoEmpate = ++historicoEmpate;
                $(`#minuto-a-minuto`).append(`<br/><b>A partida terminou EMPATADA!</b><br/>`);
                $(`#minuto-a-minuto`).append(`
                <br/>Vitórias do Flamengo: ${historicoFlamengo}
                <br/>Vitórias do Vasco: ${historicoVasco}
                <br/>Empates: ${historicoEmpate}
                `);
            }

        });
    }
}