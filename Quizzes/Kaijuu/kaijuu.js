
   
    const personagens = {
      kafka: { nome: 'Kafka Hibino (Kaijuu No. 8)', desc: 'Você é desajeitado, sonhador e com um forte senso de justiça, apesar dos contratempos. Sua determinação é inquebrável, e você sempre dá um jeito de superar os limites!', img: 'https://images6.alphacoders.com/136/1364726.jpeg' },
      mina: { nome: 'Mina Ashiro', desc: 'Você é focado, implacável no combate e mantém a compostura sob pressão. Um verdadeiro líder nato, usando precisão e poder para abater ameaças.', img: 'https://tse4.mm.bing.net/th/id/OIP.MvMrau-vd-6GftHLBj_OnQHaKe?rs=1&pid=ImgDetMain&o=7&rm=3' },
      kikoru: { nome: 'Kikoru Shinomiya', desc: 'Você é um prodígio ambicioso e extremamente talentoso, sempre buscando provar que é o melhor. Sua autoconfiança e dedicação ao treinamento são impecáveis!', img: 'https://anitrendz.net/news/wp-content/uploads/2024/03/kaiju-no-8-kikoru-character-visual-1-scaled.jpg' },
      reno: { nome: 'Reno Ichikawa', desc: 'Você é calmo, analítico e um aliado dedicado. Um parceiro confiável que enxerga o potencial nos outros, sendo um suporte tático fundamental.', img: 'https://placehold.co/150x150/4a4a4a/fffhttps://tse1.mm.bing.net/th/id/OIP.jeTuh0nGcVkSfpLtZ2xbTwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3fff?text=RENO' },
      hoshina: { nome: 'Soshiro Hoshina', desc: 'Você tem um jeito descontraído que esconde uma observação aguçada e um poder imenso. É um mestre tático e espadachim com estilo próprio.', img: 'https://static.animecorner.me/2024/03/1711802712-92373.png' },
    };

  
    const perguntas = [
      {
        titulo: '1. Qual é o seu objetivo principal na vida?', opcoes: [
          { texto: 'Alcançar um sonho antigo, não importa o quão tarde seja.', pontos: { kafka: 3, mina: 1, kikoru: 0, reno: 1, hoshina: 0 } },
          { texto: 'Manter a ordem e proteger os inocentes a qualquer custo.', pontos: { kafka: 1, mina: 3, kikoru: 1, reno: 2, hoshina: 2 } },
          { texto: 'Superar todos e provar que sou o melhor da minha área.', pontos: { kafka: 0, mina: 1, kikoru: 3, reno: 0, hoshina: 1 } },
        ]
      },
      {
        titulo: '2. No combate, você prefere...', opcoes: [
          { texto: 'Táticas de longo alcance e armamento pesado.', pontos: { kafka: 1, mina: 3, kikoru: 2, reno: 1, hoshina: 0 } },
          { texto: 'Combate corpo a corpo e armas brancas (lâminas).', pontos: { kafka: 0, mina: 0, kikoru: 1, reno: 1, hoshina: 3 } },
          { texto: 'Qualquer função, desde que eu esteja ajudando e no meio da ação.', pontos: { kafka: 3, mina: 2, kikoru: 0, reno: 3, hoshina: 1 } },
        ]
      },
      {
        titulo: '3. Como você reage a uma ameaça esmagadora?', opcoes: [
          { texto: 'Vou em frente, na esperança de que minha força inesperada resolva.', pontos: { kafka: 3, mina: 0, kikoru: 1, reno: 0, hoshina: 0 } },
          { texto: 'Analiso a ameaça e elaboro um plano tático rápido.', pontos: { kafka: 0, mina: 2, kikoru: 1, reno: 3, hoshina: 3 } },
          { texto: 'Mantenho a compostura e disparo com precisão para neutralizá-la.', pontos: { kafka: 1, mina: 3, kikoru: 2, reno: 1, hoshina: 1 } },
        ]
      },
      {
        titulo: '4. Seu ponto forte é...', opcoes: [
          { texto: 'Minha lealdade e confiabilidade como parceiro.', pontos: { kafka: 1, mina: 2, kikoru: 0, reno: 3, hoshina: 1 } },
          { texto: 'Minha força bruta e resistência acima do comum.', pontos: { kafka: 3, mina: 2, kikoru: 1, reno: 0, hoshina: 0 } },
          { texto: 'Meu talento natural e dedicação extrema ao treinamento.', pontos: { kafka: 0, mina: 1, kikoru: 3, reno: 1, hoshina: 2 } },
        ]
      },
      {
        titulo: '5. Qual é o seu maior medo ou receio?', opcoes: [
          { texto: 'Deixar as pessoas de quem gosto na mão (ou morrer sem realizar um sonho).', pontos: { kafka: 3, mina: 2, kikoru: 1, reno: 2, hoshina: 1 } },
          { texto: 'Ser superado por alguém que considero inferior.', pontos: { kafka: 0, mina: 1, kikoru: 3, reno: 0, hoshina: 0 } },
          { texto: 'Não ser forte o suficiente para proteger a sociedade do caos.', pontos: { kafka: 1, mina: 3, kikoru: 2, reno: 1, hoshina: 3 } },
        ]
      },
      {
        titulo: '6. O que você faz em um dia de folga da Força de Defesa?', opcoes: [
          { texto: 'Treino exaustivamente para melhorar minhas habilidades.', pontos: { kafka: 1, mina: 2, kikoru: 3, reno: 2, hoshina: 1 } },
          { texto: 'Passo o tempo com amigos e tento relaxar (com um pouco de bagunça).', pontos: { kafka: 3, mina: 1, kikoru: 0, reno: 1, hoshina: 0 } },
          { texto: 'Analiso relatórios ou observo o que está acontecendo ao meu redor.', pontos: { kafka: 0, mina: 3, kikoru: 1, reno: 2, hoshina: 3 } },
        ]
      },
      {
        titulo: '7. Como você lida com novatos ou subordinados?', opcoes: [
          { texto: 'Mantenho a distância e exijo resultados impecáveis.', pontos: { kafka: 0, mina: 3, kikoru: 2, reno: 0, hoshina: 1 } },
          { texto: 'Sou gentil, mas dou um empurrão para que eles tentem de novo.', pontos: { kafka: 3, mina: 1, kikoru: 1, reno: 3, hoshina: 0 } },
          { texto: 'Observo silenciosamente para ver quem tem potencial real.', pontos: { kafka: 1, mina: 2, kikoru: 0, reno: 1, hoshina: 3 } },
        ]
      },
      {
        titulo: '8. Qual tipo de equipamento Anti-Kaijuu te atrai mais?', opcoes: [
          { texto: 'Armas Numeradas de alto poder, que exigem um Release Force enorme.', pontos: { kafka: 0, mina: 2, kikoru: 3, reno: 1, hoshina: 1 } },
          { texto: 'Canhões ou armas de precisão para abater o alvo de longe.', pontos: { kafka: 1, mina: 3, kikoru: 2, reno: 1, hoshina: 0 } },
          { texto: 'Qualquer coisa que eu possa usar para dar um soco forte!', pontos: { kafka: 3, mina: 1, kikoru: 0, reno: 0, hoshina: 0 } },
        ]
      },
      {
        titulo: '9. Qual é a sua principal motivação para se juntar a uma grande organização?', opcoes: [
          { texto: 'Proteger o público e ser um herói para a nação.', pontos: { kafka: 2, mina: 3, kikoru: 1, reno: 2, hoshina: 2 } },
          { texto: 'Uma promessa feita a um amigo de infância.', pontos: { kafka: 3, mina: 2, kikoru: 0, reno: 1, hoshina: 0 } },
          { texto: 'Honrar o legado de minha família e ser o melhor entre todos.', pontos: { kafka: 0, mina: 1, kikoru: 3, reno: 1, hoshina: 1 } },
        ]
      },
      {
        titulo: '10. Qual característica você mais valoriza em um parceiro?', opcoes: [
          { texto: 'Foco total no objetivo, sem distrações sentimentais.', pontos: { kafka: 0, mina: 3, kikoru: 2, reno: 1, hoshina: 2 } },
          { texto: 'Lealdade inquestionável e dedicação ao trabalho em equipe.', pontos: { kafka: 1, mina: 1, kikoru: 0, reno: 3, hoshina: 1 } },
          { texto: 'Alguém que me empurre a tentar de novo, mesmo depois de falhar.', pontos: { kafka: 3, mina: 1, kikoru: 1, reno: 2, hoshina: 0 } },
        ]
      },
    ];

    
    class Quiz {
      constructor() {
        this.pontos = {};
        this.selecoes = new Array(perguntas.length).fill(null);
        this.totalPerguntas = perguntas.length;
        this.init();
      }

      init() {
        
        this.telaPerguntas = document.getElementById('tela-perguntas');
        this.telaResultado = document.getElementById('tela-resultado');
        this.quizContainer = document.getElementById('quiz-container');
        this.quizForm = document.getElementById('quiz-form');
        this.submitBtn = document.getElementById('ver-resultado');
        this.reiniciarBtn = document.getElementById('reiniciar');
        this.resultadoDiv = document.getElementById('resultado');
        this.voltarMenuBtn = document.getElementById('voltarMenu');

        this.voltarMenuBtn.onclick = () => this.voltarAoMenuPrincipal();
        this.quizForm.onsubmit = (e) => this.handleSubmit(e);
        this.reiniciarBtn.onclick = () => this.restart();
        this.quizContainer.onchange = () => this.trackSelections();
        
      }

      start() {
        this.pontos = Object.keys(personagens).reduce((acc, key) => ({ ...acc, [key]: 0 }), {});
        this.selecoes.fill(null);
        this.showAllPerguntas();
        this.trackSelections();
        
        this.telaResultado.classList.remove('active');
        this.telaPerguntas.classList.add('active'); 
      }

      showAllPerguntas() {
        let html = '';
        
        perguntas.forEach((p, qIndex) => {
          html += `<h2>${p.titulo}</h2><div class="question-options">`;
          
          p.opcoes.forEach((op, oIndex) => {
            const id = `q${qIndex}_o${oIndex}`;
            const name = `question_${qIndex}`;
            
            html += `
              <input type="radio" id="${id}" name="${name}" value="${oIndex}" data-q-index="${qIndex}">
              <label for="${id}" class="option-label">
                ${op.texto}
              </label>
            `;
          });
          html += '</div>';
        });
        
        this.quizContainer.innerHTML = html;
      }
      
      trackSelections() {
        let allAnswered = true;
        
        
        for (let i = 0; i < this.totalPerguntas; i++) {
          const radios = document.getElementsByName(`question_${i}`);
          let selectedValue = null;
          
          for (const radio of radios) {
            if (radio.checked) {
              selectedValue = parseInt(radio.value);
              break;
            }
          }
          
          this.selecoes[i] = selectedValue;
          
          if (selectedValue === null) {
            allAnswered = false;
          }
        }
        
    
        this.submitBtn.disabled = !allAnswered;
      }

      handleSubmit(e) {
        e.preventDefault(); 
        
        if (this.submitBtn.disabled) return;
        
        
        this.pontos = Object.keys(personagens).reduce((acc, key) => ({ ...acc, [key]: 0 }), {});
        
        this.selecoes.forEach((opcaoIndex, perguntaIndex) => {
          if (opcaoIndex !== null) {
            const op = perguntas[perguntaIndex].opcoes[opcaoIndex];
            
            Object.keys(this.pontos).forEach(pers => {
              this.pontos[pers] += op.pontos[pers];
            });
          }
        });
        
        
        this.showResultado();
      }

      showResultado() {
        this.telaPerguntas.classList.remove('active');
        this.telaResultado.classList.add('active');

       
        let max = -1;
        let vencedorKey = null;
        Object.keys(this.pontos).forEach(k => {
          if (this.pontos[k] > max) { max = this.pontos[k]; vencedorKey = k; }
        });
        
        const pers = personagens[vencedorKey];
        
        
        const listaPontuacao = Object.entries(this.pontos)
          .sort((a,b)=>b[1]-a[1]) 
          .map(([k,v]) => `<div class="score">${personagens[k].nome}: <strong>${v} pts</strong></div>`)
          .join('');

        
        this.resultadoDiv.innerHTML = `
          <div class="card">
            <img src="${pers.img}" alt="${pers.nome}">
            <div>
              <h3>Você é: ${pers.nome}</h3>
              <div class="score">Pontuação Máxima: <strong>${max} pts</strong></div>
              <p>${pers.desc}</p>
            </div>
          </div>
          <h4>Pontuação Detalhada:</h4>
          ${listaPontuacao}
        `;
      }

      restart() {
        
        this.quizContainer.innerHTML = ''; 
        this.start(); 
      }

      voltarAoMenuPrincipal() {
        window.location.href = '../../index.html'; 
      }
    }

    
    window.onload = () => {
        const quiz = new Quiz();
        quiz.start(); 
    }