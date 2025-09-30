const personagens = {
  naruto:  { nome: 'Naruto Uzumaki',  desc: 'Determinado, leal e movido pela Vontade do Fogo.', img: 'assets/naruto.jpg' },
  sasuke:  { nome: 'Sasuke Uchiha',   desc: 'Focado, ambicioso e em busca de superação constante.', img: 'assets/sasuke.jpg' },
  sakura:  { nome: 'Sakura Haruno',   desc: 'Disciplinada, empática e resiliente. Mente afiada e punho certeiro.', img: 'assets/sakura.jpg' },
  kakashi: { nome: 'Kakashi Hatake',  desc: 'Calmo, estratégico e observador. O plano certo na hora certa.', img: 'assets/kakashi.jpg' },
  itachi:  { nome: 'Itachi Uchiha',   desc: 'Silencioso, complexo e sacrificial. A missão acima de si.', img: 'assets/itachi.jpg' },
};

const perguntas = [
  { titulo: 'Como você encara um desafio ninja difícil?', opcoes: [
    { texto: 'Vou na coragem e não desisto.', pontos: {naruto:3, sasuke:0, sakura:1, kakashi:1, itachi:0} },
    { texto: 'Analiso o inimigo e ataco o ponto fraco.', pontos: {naruto:0, sasuke:1, sakura:1, kakashi:3, itachi:2} },
    { texto: 'Ajo nas sombras, rápido e preciso.', pontos: {naruto:0, sasuke:2, sakura:0, kakashi:1, itachi:3} },
  ]},
  { titulo: 'Cenário preferido em Konoha/Missões:', opcoes: [
    { texto: 'Centro da Vila da Folha.', pontos: {naruto:3, sasuke:0, sakura:2, kakashi:0, itachi:0} },
    { texto: 'Campo de batalha aberto.', pontos: {naruto:1, sasuke:3, sakura:0, kakashi:1, itachi:0} },
    { texto: 'Operações furtivas fora da vila.', pontos: {naruto:0, sasuke:1, sakura:0, kakashi:2, itachi:3} },
  ]},
  { titulo: 'Qual desses termos combina mais com você?', opcoes: [
    { texto: 'Vontade do Fogo.', pontos: {naruto:3, sasuke:0, sakura:1, kakashi:2, itachi:0} },
    { texto: 'Ambição e superação.', pontos: {naruto:0, sasuke:3, sakura:0, kakashi:1, itachi:1} },
    { texto: 'Sacrifício silencioso.', pontos: {naruto:0, sasuke:1, sakura:0, kakashi:1, itachi:3} },
  ]},
  { titulo: 'Diante de uma perigo na vila, você…', opcoes: [
    { texto: 'Defende quem precisa, mesmo sem plano perfeito.', pontos: {naruto:3, sasuke:0, sakura:1, kakashi:1, itachi:0} },
    { texto: 'Resolve com as próprias mãos, sem depender de ninguém.', pontos: {naruto:0, sasuke:3, sakura:0, kakashi:0, itachi:1} },
    { texto: 'Age com cautela para evitar o pior.', pontos: {naruto:0, sasuke:1, sakura:0, kakashi:2, itachi:3} },
  ]},
  { titulo: 'No time você é…', opcoes: [
    { texto: 'A chama que inspira e lidera pelo exemplo.', pontos: {naruto:3, sasuke:1, sakura:0, kakashi:1, itachi:0} },
    { texto: 'O duelista que vira o jogo com poder.', pontos: {naruto:0, sasuke:3, sakura:0, kakashi:1, itachi:1} },
    { texto: 'A mente tática que mantém todos vivos.', pontos: {naruto:1, sasuke:0, sakura:2, kakashi:3, itachi:1} },
  ]},
  { titulo: 'Treino ideal:', opcoes: [
    { texto: 'Ninjutsu', pontos: {naruto:3, sasuke:0, sakura:1, kakashi:1, itachi:0} },
    { texto: 'Taijutsu.', pontos: {naruto:0, sasuke:3, sakura:0, kakashi:1, itachi:2} },
    { texto: 'Leitura e estratégia .', pontos: {naruto:0, sasuke:1, sakura:2, kakashi:3, itachi:1} },
  ]},
  { titulo: 'Valor que mais pesa:', opcoes: [
    { texto: 'Amizade e lealdade.', pontos: {naruto:3, sasuke:0, sakura:2, kakashi:2, itachi:0} },
    { texto: 'Força e independência.', pontos: {naruto:0, sasuke:3, sakura:0, kakashi:1, itachi:1} },
    { texto: 'Paz da vila acima de tudo.', pontos: {naruto:1, sasuke:0, sakura:0, kakashi:2, itachi:3} },
  ]},
  { titulo: 'Como reage a uma missão rank A?', opcoes: [
    { texto: 'Aceito de cara.', pontos: {naruto:3, sasuke:0, sakura:1, kakashi:1, itachi:0} },
    { texto: 'Só vou se puder enfrentar alguém à altura.', pontos: {naruto:0, sasuke:3, sakura:0, kakashi:0, itachi:1} },
    { texto: 'Estudo a missão e preparo um plano.', pontos: {naruto:0, sasuke:1, sakura:1, kakashi:3, itachi:2} },
  ]},
  { titulo: 'Estilo de combate preferido:', opcoes: [
    { texto: 'Ataque frontal com muita energia.', pontos: {naruto:3, sasuke:1, sakura:0, kakashi:1, itachi:0} },
    { texto: 'Precisão, genjutsu e finalização rápida.', pontos: {naruto:0, sasuke:2, sakura:0, kakashi:1, itachi:3} },
    { texto: 'Versatilidade e leitura do adversário.', pontos: {naruto:1, sasuke:1, sakura:2, kakashi:3, itachi:1} },
  ]},
  { titulo: 'Aliado ideal:', opcoes: [
    { texto: 'Um mentor que aponte o caminho.', pontos: {naruto:2, sasuke:0, sakura:1, kakashi:3, itachi:1} },
    { texto: 'Um rival forte para evoluir.', pontos: {naruto:1, sasuke:3, sakura:0, kakashi:1, itachi:1} },
    { texto: 'Ninguém. Missão é minha responsabilidade.', pontos: {naruto:0, sasuke:1, sakura:0, kakashi:1, itachi:3} },
  ]},
];

class Quiz {
  constructor() {
    this.indice = 0;
    this.pontos = {naruto:0, sasuke:0, sakura:0, kakashi:0, itachi:0};
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
    this.pontos = {naruto:0, sasuke:0, sakura:0, kakashi:0, itachi:0};
    this.selecoes.fill(null);
    this.showPergunta();
  }

  showPergunta() {
    if (this.indice >= perguntas.length) {
      this.showResultado();
      return;
    }
    const p = perguntas[this.indice];
    this.titulo.textContent = p.titulo;
    this.progresso.textContent = `Pergunta ${this.indice + 1} de ${perguntas.length}`;
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
      Object.keys(this.pontos).forEach(pers => {
        this.pontos[pers] += op.pontos[pers];
      });
    }
    this.indice++;
    this.showPergunta();
  }

  showResultado() {
    this.telaPerguntas.classList.remove('active');
    this.telaResultado.classList.add('active');

    let max = -1;
    let vencedor = 'naruto';
    Object.keys(this.pontos).forEach(k => {
      if (this.pontos[k] > max) { max = this.pontos[k]; vencedor = k; }
    });

    const pers = personagens[vencedor];
    const listaPontuacao = Object.entries(this.pontos)
      .sort((a,b)=>b[1]-a[1])
      .map(([k,v]) => `<div class="score">${personagens[k].nome}: <strong>${v} pts</strong></div>`)
      .join('');

    this.resultado.innerHTML = `
      <div class="card">
        <img src="${pers.img}" alt="${pers.nome}">
        <div>
          <h3>${pers.nome}</h3>
          <div class="score">Pontuação vencedora: <strong>${max} pts</strong></div>
          <p>${pers.desc}</p>
        </div>
      </div>
      <h4>Demais pontuações</h4>
      ${listaPontuacao}
    `;
  }

  restart() {
    this.indice = 0;
    this.pontos = {naruto:0, sasuke:0, sakura:0, kakashi:0, itachi:0};
    this.selecoes.fill(null);
    this.telaResultado.classList.remove('active');
    this.telaInicial.classList.add('active');
  }

  voltarAoMenuPrincipal() {
        console.log('Voltando ao menu principal...');
        window.location.href = '../../index.html'; 
  }
}

new Quiz();
