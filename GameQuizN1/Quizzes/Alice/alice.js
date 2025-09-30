const personagens = [
    {nome:"Alice", sobre: "Curiosa e lógica - Sua curiosidade é o que a leva à aventura, mas é sua necessidade de encontrar lógica e ordem no caos que a define. Ela representa a inocência da infância confrontada com o ilógico e imprevisível do País das Maravilhas.", score: 0, imagem:"img/alice.jpg"},
    {nome:"Chapeleiro Maluco", sobre: "Excêntrico e imprevisível - personificação do caos e do absurdo. Ele vive em uma festa do chá perpétua com a Lebre de Março e aterroriza o Tempo. Seu comportamento é volátil, mudando de amigável para rude sem aviso prévio.", score: 0, imagem:"img/Chapeleiro.jpg"},
    {nome:"Coelho Branco", sobre: "Ansioso e apressado - Ele está sempre correndo, preocupado em se atrasar para seus compromissos, agindo de forma subserviente com seus superiores e pomposa com os que considera inferiores.", score: 0, imagem:"img/coelho.jpg"}
];

const perguntas = [
    {
        texto: "Qual é a sua cor favorita?",
        opcoes: [
            {texto: "Cores claras", score: [3,1,2]},
            {texto: "Cores vibrantes e misturadas", score: [1,3,2]},
            {texto: "Branco" , score: [2,1,3]}
        ]
    },
    {
        texto: "O que mais te incomoda na interação com as outras pessoas?",
        opcoes: [
            {texto: "O desrespeito à pontualidade e às formalidades" , score: [2,1,3]},
            {texto: "A falta de lógica e o comportamento imprevisível " , score: [3,1,2]},
            {texto: "Pessoas que levam tudo a sério e tentam impor regras ou lógica" , score: [1,3,2]}
        ]
    },
    {
        texto: "Como você lida com a sensação de estar sem tempo?",
        opcoes: [
            {texto: "Tenta se organizar e entender a situação" , score: [3,1,2]},
            {texto: "Ignora completamente o conceito de tempo" , score: [1,3,2]},
            {texto: "Entra em pânico e ansiedade" , score: [2,1,3]}
        ]
    },
    {
        texto: "O que você mais valoriza em uma pessoa?",
        opcoes: [
            {texto: "Originalidade e criatividade", score: [1,3,2]},
            {texto: "Lógica, curiosidade e bom senso" , score: [3,1,2]},
            {texto: "Pontualidade e senso de responsabilidade", score: [2,1,3]}
        ]
    },
    {
        texto: "Qual é o seu maior medo?",
        opcoes: [
            {texto: "Perder sua identidade ", score: [3,2,1]},
            {texto: "Ser 'normal' ou ter que se conformar às regras da sociedade", score: [2,3,1]},
            {texto: "Chegar atrasado ou decepcionar uma autoridade.", score: [2,1,3]}
        ]
    },
    {
        texto: "Qual é a sua maior prioridade?",
        opcoes: [
            {texto: "Manter-se pontual e cumprir seus deveres para evitar problemas", score: [2,1,3]},
            {texto: "Descobrir e entender o mundo ao seu redor, navegando pelas situações com lógica", score: [3,1,2]},
            {texto: "Se divertir, criar caos e viver de forma imprevisível, sem se preocupar com o tempo", score: [2,3,1]}
        ]
    },
    {
        texto: "Qual ferramenta você escolheria?",
        opcoes: [
            {texto: "Um pote de cola", score: [2,3,1]},
            {texto: "Um relógio de bolso", score: [2,1,3]},
            {texto: "Um livro de instruções", score: [3,1,2]}
        ]
    },
    {
        texto: "Como você reage ao perigo?",
        opcoes: [
            {texto: "Entra em pânico e procura escapar rapidamente", score: [1,2,3]},
            {texto: "Tenta enfrentar o perigo com coragem", score: [3,2,1]},
            {texto: "Sua reação é imprevisível. Pode ignorar o perigo ou rir dele", score: [1,3,2]}
        ]
    },
    {
        texto: "Qual papel prefere em um grupo?",
        opcoes: [
            {texto: "O de observador e questionador.", score: [3,1,2]},
            {texto: "O de mensageiro ou executor", score: [1,2,3]},
            {texto: "O de centro das atenções", score: [2,3,1]}
        ]
    },
    {
        texto: "Qual valor você mais preza?",
        opcoes: [
            {texto: "A ordem e a conformidade", score: [2,1,3]},
            {texto: "A curiosidade e a autodescoberta", score: [3,2,1]},
            {texto: "A individualidade e a criatividade", score: [1,3,2]}
        ]
    },
    {
        texto: "Como seus amigos te descrevem?",
        opcoes: [
            {texto: "Curioso(a), inteligente e um pouco teimoso(a)", score: [3,2,1]},
            {texto: "Excêntrico(a), imprevisível e divertido(a)", score: [1,3,2]},
            {texto: "Ansioso(a), estressado(a) e sempre com pressa", score: [2,1,3]}
        ]
    }
];


class QuizGame {
    constructor(personagens, perguntas) {
        this.personagens = personagens;
        this.perguntas = perguntas;
        this.currentIndex = 0;
        this.respostas = new Array(perguntas.length).fill(null);

        this.telaInicial = document.getElementById("tela-inicial");
        this.quizContainer = document.getElementById("quiz-container");
        this.resultadoEl = document.getElementById("resultado");
        this.perguntaEl = document.getElementById("pergunta");
        this.opcoesEl = document.getElementById("opcoes");
        this.voltarBtn = document.getElementById("voltar");
        this.proximaBtn = document.getElementById("proxima");

        document.getElementById("botaoInicial")
            .addEventListener("click", () => this.start());
        this.proximaBtn.addEventListener("click", () => this.proximaPergunta());
        this.voltarBtn.addEventListener("click", () => this.voltarPergunta());
    }

    voltarAoMenuPrincipal() {
        window.location.href = '../../index.html'; 
    }

    start() {
        this.telaInicial.style.display = "none";
        this.resultadoEl.style.display = "none";
        this.quizContainer.style.display = "block";
        this.currentIndex = 0;
        this.respostas.fill(null);
        this.renderPergunta();
    }

    renderPergunta() {
        const pergunta = this.perguntas[this.currentIndex];
        this.perguntaEl.textContent = pergunta.texto;

        this.opcoesEl.innerHTML = "";

        pergunta.opcoes.forEach((opcao, index) => {
            const btn = document.createElement("button");
            btn.textContent = opcao.texto;
            btn.className = "opcao";

            if (this.respostas[this.currentIndex] === index) {
                btn.classList.add('selected'); 
            }

            btn.addEventListener("click", () => {
                this.opcoesEl.querySelectorAll('.opcao').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');

                this.respostas[this.currentIndex] = index;
            });

            this.opcoesEl.appendChild(btn);
        });

        this.voltarBtn.disabled = this.currentIndex === 0;
        this.proximaBtn.textContent =
            this.currentIndex === this.perguntas.length - 1 ? "Finalizar" : "Próxima";
    }

    proximaPergunta() {
        if (this.respostas[this.currentIndex] === null) return alert("Escolha uma opção!");
        if (this.currentIndex < this.perguntas.length - 1) {
            this.currentIndex++;
            this.renderPergunta();
        } else {
            this.finalizar();
        }
    }

    voltarPergunta() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderPergunta();
        }
    }

    finalizar() {
        this.personagens.forEach(p => p.score = 0);

        this.respostas.forEach((resp, i) => {
            if (resp !== null) {
                const pontos = this.perguntas[i].opcoes[resp].score;
                this.personagens.forEach((p, idx) => p.score += pontos[idx]);
            }
        });

        let vencedor = this.personagens.reduce((a, b) => a.score > b.score ? a : b);

        this.quizContainer.style.display = "none";
        this.resultadoEl.style.display = "block";
        
        this.resultadoEl.innerHTML = `
            <h2>Seu personagem é: ${vencedor.nome}</h2>
            <img src="${vencedor.imagem}" alt="${vencedor.nome}" style="max-width:200px; border-radius:10px; margin:15px 0;">
            <p>${vencedor.sobre}</p>
            <p><b>Pontos:</b> ${vencedor.score}</p>
            
            <div class="botoes-resultado-wrapper">
                <button onclick="jogo.start()" class="botao-resultado">Jogar novamente</button>
                <button onclick="jogo.voltarAoMenuPrincipal()" class="botao-resultado botao-secundario">Voltar ao Menu</button>
            </div>
        `;
    }
}

const jogo = new QuizGame(personagens, perguntas);