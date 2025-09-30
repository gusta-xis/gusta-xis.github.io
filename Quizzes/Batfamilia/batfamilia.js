let personagens = [
    { nome: 'Bruce Wayne - Batman', pontos: 0, img: 'img/batman.png' },
    { nome: 'Dick Grayson - Asa Noturna', pontos: 0, img:'img/asa-noturna.png' },
    { nome: 'Jason Todd - Capuz Vermelho', pontos: 0, img: 'img/jason-todd.png' },
    { nome: 'Tim Drake - Robin Jovens Titans', pontos: 0, img: 'img/tim-drake.png' },
    { nome: 'Damian Wayne - Robin O Filho do Batman', pontos: 0, img: 'img/damian.png' },
    { nome: 'Barbara Gordon - BatGirl/Oraculo', pontos: 0, img: 'img/barbara-gordon.png' },
    { nome: 'Kate Kane - Batwoman', pontos: 0, img: 'img/kate-kane.png' },
    { nome: 'Cassandra Cain - BatGirl', pontos: 0, img: 'img/cassandra-cain.png' }
];

let pesos = {
    qualidade: {
        disciplina: { bruce: 3, tim: 2, cassandra: 1 },
        carisma: { dick: 3, barbara: 2, kate: 1 },
        determinacao: { damian: 3, jason: 2, bruce: 1 },
        coragem: { kate: 3, dick: 2, jason: 1 },
        resiliencia: { barbara: 3, tim: 2, cassandra: 1 }
    },
    luta: {
        krav_maga: { bruce: 3, kate: 2, jason: 1 },
        capoeira: { dick: 3, barbara: 2, tim: 1 },
        muay_thai: { jason: 3, damian: 2, dick: 1 },
        ninjutsu: { cassandra: 3, tim: 2, bruce: 1 },
        karate: { damian: 3, kate: 2, cassandra: 1 }
    },
    papel: {
        lider: { bruce: 3, kate: 2, dick: 1 },
        estrategista: { tim: 3, cassandra: 2, barbara: 1 },
        ginga: { dick: 3, damian: 2, jason: 1 },
        inspiracao: { barbara: 3, dick: 2, tim: 1 },
        executor: { jason: 3, damian: 2, cassandra: 1 }
    },
    autoridade: {
        obedece: { tim: 3, bruce: 2, kate: 1 },
        respeita: { dick: 3, cassandra: 2, barbara: 1 },
        rebeldia: { damian: 3, jason: 2, dick: 1 },
        logica: { barbara: 3, tim: 2, bruce: 1 },
        sentido: { kate: 3, cassandra: 2, jason: 1 }
    },
    fraqueza: {
        controlador: { bruce: 3, damian: 2, tim: 1 },
        inseguro: { dick: 3, barbara: 2, tim: 1 },
        raiva: { jason: 3, damian: 2, bruce: 1 },
        racional: { tim: 3, barbara: 2, cassandra: 1 },
        confianca: { cassandra: 3, kate: 2, dick: 1 }
    },
    investigacao: {
        pistas: { bruce: 3, tim: 2, cassandra: 1 },
        instinto: { dick: 3, barbara: 2, damian: 1 },
        acao_direta: { jason: 3, damian: 2, kate: 1 },
        hackear: { barbara: 3, tim: 2, bruce: 1 },
        observacao: { cassandra: 3, tim: 2, dick: 1 }
    },
    dor: {
        silencio: { cassandra: 3, bruce: 2, kate: 1 },
        motivacao: { dick: 3, tim: 2, barbara: 1 },
        vinganca: { jason: 3, damian: 2, bruce: 1 },
        aprendo: { tim: 3, barbara: 2, cassandra: 1 },
        forca_mental: { kate: 3, damian: 2, dick: 1 }
    },
    simbolo: {
        morcego: { bruce: 3, tim: 2, cassandra: 1 },
        asas: { dick: 3, barbara: 2, kate: 1 },
        craneo: { jason: 3, damian: 2, bruce: 1 },
        rede: { barbara: 3, tim: 2, dick: 1 },
        espada: { cassandra: 3, kate: 2, damian: 1 }
    },
    tecnologia: {
        cinto: { bruce: 3, tim: 2, barbara: 1 },
        bastoes: { dick: 3, cassandra: 2, kate: 1 },
        armas: { jason: 3, damian: 2, bruce: 1 },
        sistemas: { barbara: 3, tim: 2, cassandra: 1 },
        infiltracao: { cassandra: 3, kate: 2, dick: 1 }
    },
    missao: {
        justica: { bruce: 3, dick: 2, kate: 1 },
        equipe: { dick: 3, barbara: 2, damian: 1 },
        objetivo: { jason: 3, damian: 2, cassandra: 1 },
        planejamento: { tim: 3, barbara: 2, cassandra: 1 },
        sobrevivencia: { cassandra: 3, kate: 2, jason: 1 }
    }
};

function chamarResultado() {
    for (let i = 0; i < personagens.length; i++) {
        personagens[i].pontos = 0;
    }

    var respostas = document.querySelectorAll('input[type="radio"]:checked');

    for (let i = 0; i < respostas.length; i++) {
        var r = respostas[i];
        var categoria = r.name;
        var valor = r.value;

        var pontosResposta = pesos[categoria][valor];

        for (var percorrerArray in pontosResposta) {
            var pontos = pontosResposta[percorrerArray];

            for (let i = 0; i < personagens.length; i++) {
                if (personagens[i].nome.toLowerCase().indexOf(percorrerArray) != -1) {
                    personagens[i].pontos += pontos;
                }
            }
        }
    };

    personagens.sort((a, b) => b.pontos - a.pontos);

    let vencedor = personagens[0];

    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `<h2>Você é ${vencedor.nome}!</h2><img src="${vencedor.img}" alt="${vencedor.nome}">`;
    console.log(personagens);
    
};

this.voltarMenuBtn = document.getElementById('voltarMenu');
this.voltarMenuBtn.onclick = () => this.voltarAoMenuPrincipal();
this.voltarAoMenuPrincipal = function() {
        console.log('Voltando ao menu principal...');
        window.location.href = '../../index.html';
};