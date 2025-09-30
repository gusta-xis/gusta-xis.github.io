const universes = [
    {
        id: 'asgard',
        title: 'Asgard',
        subtitle: 'Reino dos Deuses Nórdicos',
        description: 'Entre no majestoso reino de Asgard, lar dos deuses nórdicos. Descubra se você possui a sabedoria de Odin, a força de Thor ou a astúcia de Loki.',
        tags: ['Mitologia', 'Deuses', 'Vikings'],
        imageUrl: 'https://64.media.tumblr.com/237f1a1830a113b85ca5f081d48215a3/3fc3ccbb50440ee3-a7/s1280x1920/bfd688495178be404bb46faaf2e9934956ae7ae2.jpg'
    },
    {
        id: 'alice',
        title: 'Alice no País das Maravilhas',
        subtitle: 'Um mundo de fantasia e surrealismo',
        description: 'Explore o País das Maravilhas, um mundo onde a lógica é invertida e a imaginação não tem limites. Encontre seu personagem nesse universo intrigante',
        tags: ['Fantasia', 'Literatura Infantil', 'Fantasico'],
        imageUrl: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/9b138ef4-f8f2-45b8-a57c-a1b7bd3a77b4/compose?aspectRatio=1.78&format=webp&width=1200'
    },
    {
        id: 'batfamilia',
        title: 'Batfamília',
        subtitle: 'Heróis de Gotham',
        description: 'Mergulhe no universo sombrio de Gotham City e descubra qual membro da Batfamília você é. Será que você tem a determinação de Bruce Wayne.',
        tags: ['Heróis', 'Quadrinhos', 'Ação'],
        imageUrl: 'https://i.redd.it/bpb1s6de5aub1.jpg'
    },
    {
        id: 'kaijuu',
        title: 'Kaijuu No. 8',
        subtitle: 'Monstros Gigantes e Heróis',
        description: 'Entre no mundo de Kaijuu No. 8, onde monstros gigantes ameaçam a humanidade e heróis corajosos lutam para protegê-la. Descubra se você tem o que é preciso para enfrentar essas criaturas colossais.',
        tags: ['Monstros', 'Ação', 'Aventura'],
        imageUrl: 'https://stateless-fueradefoco.storage.googleapis.com/wp-content/uploads/2025/04/22144007/kaiju.webp'
    },
    {
        id: 'naruto',
        title: 'Naruto',
        subtitle: 'Ninja do Mundo Shinobi',
        description: 'Descubra qual personagem de Naruto você mais se parece! Dentre Naruto, Sasuke, Sakura, Kakashi e Itachi, quem reflete melhor sua personalidade e estilo ninja?',
        tags: ['Anime', 'Ninja', 'Ação'],
        imageUrl: 'https://sociedadegeek.com.br/wp-content/uploads/2025/09/Naruto-e-amigos-1024x532.png'
    },
    {
        id: 'formula1',
        title: 'Fórmula 1',
        subtitle: 'Velocidade e Adrenalina nas Pistas',
        description: 'Quem é você no mundo da Fórmula 1? Descubra qual dos grandes pilotos você mais se parece, desde a ousadia de Verstappen até a precisão de Hamilton.',
        tags: ['Esporte', 'Corrida', 'Automobilismo'],
        imageUrl: 'https://mcdn.wallpapersafari.com/medium/65/44/xkwzSW.jpg'
    }
];

class Carousel3D {
    constructor() {
        this.currentIndex = 0;
        this.items = [];
        this.track = document.getElementById('carousel3DTrack');
        this.indicators = document.getElementById('indicators3D');
        this.prevBtn = document.getElementById('prev3DBtn');
        this.nextBtn = document.getElementById('next3DBtn');
        this.autoRotateInterval = null;
        this.isHovering = false;
        
        this.init();
    }

    init() {
        this.createCards();
        this.createIndicators();
        this.attachEventListeners();
        this.updateCarousel();
        this.startAutoRotate();
    }

    createCards() {
        universes.forEach((universe, index) => {
            const card = document.createElement('div');
            card.className = 'carousel-3d-item';
            card.innerHTML = `
                <div class="universe-card">
                    <div class="universe-card-image" style="background-image: url('${universe.imageUrl}')"></div>
                    <div class="universe-card-content">
                        <h3 class="universe-card-title">${universe.title}</h3>
                        <p class="universe-card-subtitle">${universe.subtitle}</p>
                        <p class="universe-card-description">${universe.description}</p>
                        <div class="universe-card-tags">
                            ${universe.tags.map(tag => `<span class="universe-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => this.handleCardClick(universe, index));
            card.addEventListener('mouseenter', () => this.isHovering = true);
            card.addEventListener('mouseleave', () => this.isHovering = false);
            
            this.track.appendChild(card);
            this.items.push(card);
        });
    }

    createIndicators() {
        universes.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-3d-dot';
            dot.addEventListener('click', () => this.goToSlide(index));
            this.indicators.appendChild(dot);
        });
    }

    attachEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        let touchStartX = 0;
        let touchEndX = 0;
        this.track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        this.track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });

        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        if (endX < startX - swipeThreshold) {
            this.next();
        } else if (endX > startX + swipeThreshold) {
            this.prev();
        }
    }

    handleKeyPress(e) {
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
            return;
        }

        if (e.key === 'ArrowLeft') {
            this.prev();
            e.preventDefault(); 
        } else if (e.key === 'ArrowRight') {
            this.next();
            e.preventDefault();
        }
    }   

    updateCarousel() {
        const total = this.items.length;
        
        this.items.forEach((item, index) => {
            item.className = 'carousel-3d-item';
            
            if (index === this.currentIndex) {
                item.classList.add('active');
            } else if (index === (this.currentIndex + 1) % total) {
                item.classList.add('next');
            } else if (index === (this.currentIndex - 1 + total) % total) {
                item.classList.add('prev');
            } else {
                item.classList.add('far');
            }
        });

        const dots = this.indicators.querySelectorAll('.carousel-3d-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updateCarousel();
        this.resetAutoRotate();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.updateCarousel();
        this.resetAutoRotate();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
        this.resetAutoRotate();
    }

    handleCardClick(universe, index) {
        if (index !== this.currentIndex) {
            this.goToSlide(index);
            return;
        }

        if (universe.id === 'asgard') {
            window.location.href = 'Quizzes/Asgard/asgard.html';

        } else if (universe.id === 'alice') {
            window.location.href = 'Quizzes/Alice/alice.html';

        } else if (universe.id === 'batfamilia') {
            window.location.href = 'Quizzes/Batfamilia/batfamilia.html';
            
        } else if (universe.id === 'kaijuu') {
            window.location.href = 'Quizzes/Kaijuu/kaijuu.html';

        } else if (universe.id === 'naruto') {
            window.location.href = 'Quizzes/Naruto/naruto.html';

        } else if (universe.id === 'formula1') {
            window.location.href = 'Quizzes/Formula1/formula1.html';

        } else {
            alert(`Universo ${universe.title} em breve! Continue explorando o Multiversal.`);
        }
    }

    startAutoRotate() {
        this.autoRotateInterval = setInterval(() => {
            if (!this.isHovering) {
                this.next();
            }
        }, 4000);
    }

    resetAutoRotate() {
        clearInterval(this.autoRotateInterval);
        this.startAutoRotate();
    }
}

const carousel = new Carousel3D();