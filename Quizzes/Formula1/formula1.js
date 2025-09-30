// Pilotos (objetos simples)
        const pilotos = {
            verstappen: { nome: 'Max Verstappen', desc: 'Agressivo e ousado, como o campeão atual!' },
            hamilton: { nome: 'Lewis Hamilton', desc: 'Estrategista e lendário, mestre das pistas!' },
            leclerc: { nome: 'Charles Leclerc', desc: 'Talentoso e consistente, futuro da F1!' },
            alonso: { nome: 'Fernando Alonso', desc: 'Experiente e inteligente, o veterano astuto!' },
            russell: { nome: 'George Russell', desc: 'Jovem e adaptável, promessa em ascensão!' }
        };

        const perguntas = [
            { titulo: 'Estilo de pilotagem?', opcoes: [
                { texto: 'Agressivo e ousado', pontos: {verstappen:3, hamilton:1, leclerc:2, alonso:2, russell:1} },
                { texto: 'Estratégico e calmo', pontos: {verstappen:1, hamilton:3, leclerc:2, alonso:3, russell:2} },
                { texto: 'Consistente e adaptável', pontos: {verstappen:2, hamilton:2, leclerc:3, alonso:1, russell:3} }
            ]},
            { titulo: 'Sob pressão?', opcoes: [
                { texto: 'Acelero mais', pontos: {verstappen:3, hamilton:2, leclerc:1, alonso:2, russell:1} },
                { texto: 'Mantenho a calma', pontos: {verstappen:1, hamilton:3, leclerc:3, alonso:2, russell:3} },
                { texto: 'Analiso e ajusto', pontos: {verstappen:2, hamilton:2, leclerc:2, alonso:3, russell:2} }
            ]},
            { titulo: 'Ultrapassagens?', opcoes: [
                { texto: 'Sempre, mesmo arriscado', pontos: {verstappen:3, hamilton:1, leclerc:2, alonso:2, russell:1} },
                { texto: 'No momento certo', pontos: {verstappen:1, hamilton:3, leclerc:3, alonso:3, russell:2} },
                { texto: 'Avalio o risco', pontos: {verstappen:2, hamilton:2, leclerc:2, alonso:2, russell:3} }
            ]},
            { titulo: 'Preparação?', opcoes: [
                { texto: 'Simulador e dados', pontos: {verstappen:2, hamilton:3, leclerc:3, alonso:2, russell:3} },
                { texto: 'Treino físico', pontos: {verstappen:3, hamilton:2, leclerc:1, alonso:3, russell:2} },
                { texto: 'Estudo da pista', pontos: {verstappen:1, hamilton:2, leclerc:2, alonso:2, russell:2} }
            ]},
            { titulo: 'Trabalho em equipe?', opcoes: [
                { texto: 'Colaborativo total', pontos: {verstappen:1, hamilton:3, leclerc:3, alonso:2, russell:3} },
                { texto: 'Foco no meu desempenho', pontos: {verstappen:3, hamilton:2, leclerc:1, alonso:3, russell:1} },
                { texto: 'Equilíbrio', pontos: {verstappen:2, hamilton:2, leclerc:2, alonso:2, russell:2} }
            ]},
            { titulo: 'Má qualificação?', opcoes: [
                { texto: 'Recupero na corrida', pontos: {verstappen:3, hamilton:2, leclerc:2, alonso:3, russell:1} },
                { texto: 'Analiso dados', pontos: {verstappen:1, hamilton:3, leclerc:3, alonso:2, russell:3} },
                { texto: 'Ajusto estratégia', pontos: {verstappen:2, hamilton:2, leclerc:2, alonso:2, russell:2} }
            ]},
            { titulo: 'Regras?', opcoes: [
                { texto: 'Testo limites', pontos: {verstappen:3, hamilton:1, leclerc:1, alonso:2, russell:1} },
                { texto: 'Respeito estrito', pontos: {verstappen:1, hamilton:3, leclerc:3, alonso:2, russell:3} },
                { texto: 'Busco vantagens legais', pontos: {verstappen:2, hamilton:2, leclerc:2, alonso:3, russell:2} }
            ]},
            { titulo: 'Mídia e fãs?', opcoes: [
                { texto: 'Direto e focado', pontos: {verstappen:3, hamilton:1, leclerc:2, alonso:2, russell:2} },
                { texto: 'Engajo ativamente', pontos: {verstappen:1, hamilton:3, leclerc:3, alonso:1, russell:2} },
                { texto: 'Equilíbrio', pontos: {verstappen:2, hamilton:2, leclerc:2, alonso:3, russell:3} }
            ]},
            { titulo: 'Pista molhada?', opcoes: [
                { texto: 'Mostro habilidade', pontos: {verstappen:3, hamilton:2, leclerc:2, alonso:3, russell:1} },
                { texto: 'Sigo estratégia', pontos: {verstappen:1, hamilton:3, leclerc:3, alonso:2, russell:3} },
                { texto: 'Adapto pilotagem', pontos: {verstappen:2, hamilton:2, leclerc:2, alonso:2, russell:2} }
            ]},
            { titulo: 'Filosofia de vitória?', opcoes: [
                { texto: 'A qualquer custo', pontos: {verstappen:3, hamilton:2, leclerc:1, alonso:2, russell:1} },
                { texto: 'Bem executada', pontos: {verstappen:1, hamilton:3, leclerc:3, alonso:2, russell:3} },
                { texto: 'Habilidade + estratégia', pontos: {verstappen:2, hamilton:2, leclerc:2, alonso:3, russell:2} }
            ]}
        ];

        class Quiz {
            constructor() {
                this.indice = 0;
                this.pontos = {verstappen:0, hamilton:0, leclerc:0, alonso:0, russell:0};
                this.selecoes = new Array(10).fill(null);
                this.init();
            }

            init() {
                this.telaInicial = document.getElementById('tela-inicial');
                this.telaPerguntas = document.getElementById('tela-perguntas');
                this.telaResultado = document.getElementById('tela-resultado');
                this.comecarBtn = document.getElementById('comecar');
                this.proximaBtn = document.getElementById('proxima');
                this.reiniciarBtn = document.getElementById('reiniciar');
                this.titulo = document.getElementById('titulo-pergunta');
                this.opcoesDiv = document.getElementById('opcoes');
                this.progresso = document.getElementById('progresso');
                this.resultado = document.getElementById('resultado');
                this.voltarMenuBtn = document.getElementById('voltarMenu');

                this.voltarMenuBtn.onclick = () => this.voltarAoMenuPrincipal();
                this.comecarBtn.onclick = () => this.start();
                this.proximaBtn.onclick = () => this.next();
                this.reiniciarBtn.onclick = () => this.restart();
            }

            start() {
                this.telaInicial.classList.remove('active');
                this.telaPerguntas.classList.add('active');
                this.indice = 0;
                this.showPergunta();
            }

            showPergunta() {
                if (this.indice >= 10) {
                    this.showResultado();
                    return;
                }
                const p = perguntas[this.indice];
                this.titulo.textContent = p.titulo;
                this.progresso.textContent = `Pergunta ${this.indice + 1} de 10`;
                this.opcoesDiv.innerHTML = '';
                p.opcoes.forEach((op, i) => {
                    const div = document.createElement('div');
                    div.className = 'opcao';
                    div.textContent = op.texto;
                    div.onclick = () => this.selecionar(i, div);
                    this.opcoesDiv.appendChild(div);
                });
                this.proximaBtn.disabled = true;
            }

            selecionar(indice, elemento) {
                document.querySelectorAll('.opcao').forEach(el => el.classList.remove('selecionada'));
                elemento.classList.add('selecionada');
                this.selecoes[this.indice] = indice;
                this.proximaBtn.disabled = false;
            }

            next() {
                if (this.selecoes[this.indice] !== null) {
                    const op = perguntas[this.indice].opcoes[this.selecoes[this.indice]];
                    Object.keys(this.pontos).forEach(piloto => {
                        this.pontos[piloto] += op.pontos[piloto];
                    });
                }
                this.indice++;
                this.showPergunta();
            }

            showResultado() {
                this.telaPerguntas.classList.remove('active');
                this.telaResultado.classList.add('active');
                let max = 0;
                let vencedor = 'verstappen';
                Object.keys(this.pontos).forEach(p => {
                    if (this.pontos[p] > max) {
                        max = this.pontos[p];
                        vencedor = p;
                    }
                });
                const pil = pilotos[vencedor];
                this.resultado.innerHTML = `
                    <img src="${pil.img}" alt="${pil.nome}">
                    <h3>${pil.nome}</h3>
                    <div class="pontuacao">Pontos: ${max}</div>
                    <p>${pil.desc}</p>
                `;
            }

            restart() {
                this.indice = 0;
                this.pontos = {verstappen:0, hamilton:0, leclerc:0, alonso:0, russell:0};
                this.selecoes.fill(null);
                this.telaResultado.classList.remove('active');
                this.telaInicial.classList.add('active');
            }

            voltarAoMenuPrincipal() {
                window.location.href = '../../index.html';
            }
        }

        new Quiz();