const welcomeScreen = document.getElementById('welcome-screen'), startBtn = document.getElementById('start-btn'), quizScreen = document.getElementById('quiz-screen'), questionText = document.getElementById('question-text'), optionsContainer = document.getElementById('options-container'), nextBtn = document.getElementById('next-btn'), resultScreen = document.getElementById('result-screen'), resultTitle = document.getElementById('result-title'), characterImage = document.getElementById('character-image'), characterName = document.getElementById('character-name'), characterDescription = document.getElementById('character-description'), characterScore = document.getElementById('character-score'), restartBtn = document.getElementById('restart-btn'), backToMenuBtn = document.getElementById('back-to-menu-btn'), progressFill = document.getElementById('progress-fill');

class Character {
    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.score = 0;
    }
}

const frigg = new Character('Frigg, a Sábia de Asgard', 'Você possui a sabedoria e a intuição de Frigg, a rainha de Asgard. Sua maior força reside na sua capacidade de ver além do presente e de tecer o destino com cautela e graça.', 'https://img.freepik.com/premium-photo/nordic-goddess-frigg-norse-germanic-mythology_1040474-9844.jpg');
const thor = new Character('Thor, o Trovão de Asgard', 'Você é forte, corajoso e leal, como Thor, o deus do trovão. Sua força é inigualável e você não hesita em lutar por aquilo que é justo.', 'https://cdn.pixabay.com/photo/2025/02/13/14/16/thor-9403973_1280.png');
const loki = new Character('Loki, o Astuto de Asgard', 'Você é um mestre da astúcia e da transformação, assim como Loki. Sua mente é seu principal campo de batalha.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdhaFgjYZWXT8Kun3aVbnU27vN7hK4tWNNg&s');
const heimdall = new Character('Heimdall, o Vigilante de Asgard', 'Você possui a visão aguçada e a vigilância de Heimdall, o guardião da Bifrost.', 'https://th.bing.com/th/id/R.558e9c6657eda9d7a1f3662b800dc1c4?rik=gdzrfFAYiDLd7A&pid=ImgRaw&r=0');

let characters = [frigg, thor, loki, heimdall];
let currentQuestionIndex = 0;
let selectedOptionIndex = null;

const questions = [
    { text: 'Em uma batalha, qual seria a sua abordagem?', options: [
        { text: 'Procurar uma solução diplomática para evitar o conflito.', points: { 'Frigg': 3, 'Thor': 1, 'Loki': 2, 'Heimdall': 1 } },
        { text: 'Avançar com força total para esmagar os inimigos.', points: { 'Frigg': 1, 'Thor': 3, 'Loki': 2, 'Heimdall': 1 } },
        { text: 'Usar truques e ilusões para confundir o oponente.', points: { 'Frigg': 2, 'Thor': 1, 'Loki': 3, 'Heimdall': 1 } },
        { text: 'Monitorar a ameaça de longe, esperando o momento exato para soar o alarme.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 1, 'Heimdall': 3 } }
    ] },
    { text: 'Qual artefato você buscaria nos Nove Reinos?', options: [
        { text: 'O Anel de Andvaranaut, que garante riqueza infinita.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 3, 'Heimdall': 1 } },
        { text: 'O Mjolnir, o martelo capaz de destruir montanhas.', points: { 'Frigg': 1, 'Thor': 3, 'Loki': 2, 'Heimdall': 1 } },
        { text: 'O Fuso de Völundr, que pode tecer o destino.', points: { 'Frigg': 3, 'Thor': 2, 'Loki': 1, 'Heimdall': 1 } },
        { text: 'O Gjallarhorn, o chifre cujo som alerta todos os reinos.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 1, 'Heimdall': 3 } }
    ] },
    { text: 'Sua maior virtude é...', options: [
        { text: 'A paciência e a capacidade de planejar com antecedência.', points: { 'Frigg': 3, 'Thor': 2, 'Loki': 1, 'Heimdall': 2 } },
        { text: 'A lealdade e a coragem inabalável.', points: { 'Frigg': 1, 'Thor': 3, 'Loki': 1, 'Heimdall': 1 } },
        { text: 'A adaptabilidade e o pensamento rápido.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 3, 'Heimdall': 1 } },
        { text: 'A vigilância ininterrupta e a antecipação de eventos.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 1, 'Heimdall': 3 } }
    ] },
    { text: 'Qual seria seu papel em Asgard?', options: [
        { text: 'Conselheiro e guardião dos segredos divinos.', points: { 'Frigg': 3, 'Thor': 1, 'Loki': 2, 'Heimdall': 1 } },
        { text: 'Protetor dos Nove Reinos, liderando exércitos.', points: { 'Frigg': 1, 'Thor': 3, 'Loki': 1, 'Heimdall': 1 } },
        { text: 'O artista e contador de histórias, que inspira e confunde.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 3, 'Heimdall': 1 } },
        { text: 'O sentinela da Bifröst, o primeiro a ver o perigo.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 1, 'Heimdall': 3 } }
    ] },
    { text: 'Você prefere resolver um problema...', options: [
        { text: 'Estudando todas as variáveis até encontrar a solução ideal.', points: { 'Frigg': 3, 'Thor': 1, 'Loki': 1, 'Heimdall': 2 } },
        { text: 'Usando sua força e poder para superá-lo.', points: { 'Frigg': 1, 'Thor': 3, 'Loki': 1, 'Heimdall': 1 } },
        { text: 'Com uma solução inesperada e criativa.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 3, 'Heimdall': 1 } },
        { text: 'Observando e esperando, agindo com precisão no momento certo.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 1, 'Heimdall': 3 } }
    ] },
    { text: 'Seu passatempo favorito seria...', options: [
        { text: 'Aprender sobre o passado dos deuses e dos reinos.', points: { 'Frigg': 3, 'Thor': 1, 'Loki': 2, 'Heimdall': 1 } },
        { text: 'Treinar suas habilidades de combate e sua força.', points: { 'Frigg': 1, 'Thor': 3, 'Loki': 1, 'Heimdall': 1 } },
        { text: 'Inventar novos truques ou planejar uma pegadinha.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 3, 'Heimdall': 1 } },
        { text: 'Ficar de guarda, alerta, mesmo quando o perigo parece distante.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 1, 'Heimdall': 3 } }
    ] },
    { text: 'Qual é a sua principal motivação?', options: [
        { text: 'O desejo de proteger o conhecimento e a ordem.', points: { 'Frigg': 3, 'Thor': 2, 'Loki': 1, 'Heimdall': 1 } },
        { text: 'O dever de proteger os fracos e a honra da sua família.', points: { 'Frigg': 1, 'Thor': 3, 'Loki': 1, 'Heimdall': 1 } },
        { text: 'A busca por desafios e a emoção de ser imprevisível.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 3, 'Heimdall': 1 } },
        { text: 'O cumprimento rigoroso do dever de guardar a porta dos deuses.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 1, 'Heimdall': 3 } }
    ] },
    { text: 'Uma profecia anuncia o Ragnarök. Sua reação é...', options: [
        { text: 'Procurar uma maneira de evitar a catástrofe.', points: { 'Frigg': 3, 'Thor': 1, 'Loki': 1, 'Heimdall': 1 } },
        { text: 'Se preparar para lutar até o fim.', points: { 'Frigg': 1, 'Thor': 3, 'Loki': 1, 'Heimdall': 1 } },
        { text: 'Tentar manipular os eventos a seu favor.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 3, 'Heimdall': 1 } },
        { text: 'Ficar de prontidão, chifre na mão, esperando o sinal de ataque.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 1, 'Heimdall': 3 } }
    ] },
    { text: 'Se você pudesse ter um poder, qual seria?', options: [
        { text: 'Ver o futuro e entender as escolhas das pessoas.', points: { 'Frigg': 3, 'Thor': 1, 'Loki': 1, 'Heimdall': 2 } },
        { text: 'Controlar o clima e invocar trovões.', points: { 'Frigg': 1, 'Thor': 3, 'Loki': 1, 'Heimdall': 1 } },
        { text: 'Mudar de forma para se disfarçar e enganar.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 3, 'Heimdall': 1 } },
        { text: 'Ter sentidos tão apurados que nada no cosmos lhe escaparia.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 1, 'Heimdall': 3 } }
    ] },
    { text: 'Em uma situação de perigo, você confia...', options: [
        { text: 'Na sua intuição e no seu conhecimento.', points: { 'Frigg': 3, 'Thor': 1, 'Loki': 2, 'Heimdall': 1 } },
        { text: 'Na sua habilidade de combate e força bruta.', points: { 'Frigg': 1, 'Thor': 3, 'Loki': 1, 'Heimdall': 1 } },
        { text: 'Em sua capacidade de improvisação e truques.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 3, 'Heimdall': 1 } },
        { text: 'Na sua percepção de longo alcance para reagir antes de ser atingido.', points: { 'Frigg': 1, 'Thor': 1, 'Loki': 1, 'Heimdall': 3 } }
    ] }
];

const updateProgressBar = () => {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
};

const resetGame = () => {
    currentQuestionIndex = 0;
    characters.forEach(c => c.score = 0);
    selectedOptionIndex = null;
    updateProgressBar();
};

const showOptions = (question) => {
    resetOptions();
    question.options.forEach((option, index) => {
        const card = document.createElement('div');
        card.classList.add('option-card');
        card.textContent = option.text;
        card.dataset.index = index;
        card.addEventListener('click', () => selectOption(card, index));
        optionsContainer.appendChild(card);
    });
};

const showQuestion = () => {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.text;
    showOptions(question);
    updateProgressBar();
    nextBtn.classList.add('hidden');
};

const resetOptions = () => {
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
    selectedOptionIndex = null;
};

const selectOption = (card, index) => {
    optionsContainer.querySelectorAll('.option-card').forEach(opt => opt.classList.remove('selected'));
    card.classList.add('selected');
    selectedOptionIndex = index;
    nextBtn.classList.remove('hidden');
};

const showResult = () => {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    let finalCharacter = characters[0];
    let maxScore = characters[0].score;

    for (let i = 1; i < characters.length; i++) {
        if (characters[i].score > maxScore) {
            maxScore = characters[i].score;
            finalCharacter = characters[i];
        }
    }

    resultTitle.textContent = `Seu destino é ${finalCharacter.name.split(',')[0]}!`;
    characterImage.src = finalCharacter.image;
    characterName.textContent = finalCharacter.name;
    characterDescription.textContent = finalCharacter.description;
    characterScore.textContent = `Pontuação: ${finalCharacter.score} pontos`;
};

const nextQuestion = () => {
    if (selectedOptionIndex !== null) {
        const selectedPoints = questions[currentQuestionIndex].options[selectedOptionIndex].points;
        
        for (const charName in selectedPoints) {
            const character = characters.find(c => c.name.split(',')[0] === charName);
            if (character) {
                character.score += selectedPoints[charName];
            }
        }
        
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
};

const startGame = () => {
    welcomeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    resetGame();
    showQuestion();
};

const restartGame = () => {
    resultScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    resetGame();
};

const backToMenu = () => {
    window.location.href = '../../index.html';
};

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartGame);
backToMenuBtn.addEventListener('click', backToMenu);