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
            "Goooooooooooolll do Flamengooooo!!!!",
            "Goooooooooooolll do Vascooooo!!!!",
            "Escanteio para o Flamengo!",
            "Escanteio para o Vasco!",
            "Falta para o Flamengo!",
            "Falta para o Vasco!",
            "Flamengo avança!",
            "Vasco avança!",
            "Flamengo recua.",
            "Vasco recua.",
            "Flamengo e Vasco se respeitam."
        ];
        // Define as variáveis de
        var lance = "";
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
            for (i=0; i<=9; i++) {
                // Gera um número inteiro aleatório de 0 a 10
                lance = parseInt(Math.random()*10);
                // Insere um lance aleatório do array lancesPossiveis na div #minuto-a-minuto
                $(`#minuto-a-minuto`).append(`${lancesPossiveis[lance]}<br/>`);
                // Verifica se algum time marcou, se sim, insere +1 no placar para o time verificado.
                if (lance == 0) {
                    flamengo = ++flamengo;
                } else if (lance == 1) {
                    vasco = ++vasco;
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