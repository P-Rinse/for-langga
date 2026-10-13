function createHearts() {
    const container = document.getElementById('hearts-box');
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's'; 
            heart.style.width = heart.style.height = Math.random() * 15 + 10 + 'px';
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 7000);
        }, i * 300);
    }
}

createHearts();
setInterval(createHearts, 6000);

function createBouquet() {
    const card = document.querySelector('.card');
    const message = document.querySelector('.message');
    
    const container = document.createElement('div');
    container.classList.add('bouquet-container');
    
    for (let i = 0; i < 5; i++) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('rose-wrapper');
        
        const head = document.createElement('div');
        head.classList.add('rose-head');
        
        for (let j = 0; j < 3; j++) {
            const petal = document.createElement('div');
            petal.classList.add('rose-petal');
            head.appendChild(petal);
        }
        
        const stem = document.createElement('div');
        stem.classList.add('rose-stem');
        
        const leafL = document.createElement('div');
        leafL.classList.add('rose-leaf', 'left');
        const leafR = document.createElement('div');
        leafR.classList.add('rose-leaf', 'right');
        
        stem.appendChild(leafL);
        stem.appendChild(leafR);
        wrapper.appendChild(head);
        wrapper.appendChild(stem);
        container.appendChild(wrapper);
    }
    
    card.insertBefore(container, message);
}

function revealGift() {
    const lid = document.getElementById('box-lid');
    const giftScreen = document.getElementById('gift-screen');
    const cardScreen = document.getElementById('card-screen');
    const music = document.getElementById('birthday-music');

    music.volume = 0.3;
    music.play().catch(error => {
        console.log(error);
    });

    lid.style.transform = 'translateY(-60px) rotate(20deg)';
    
    setTimeout(() => {
        giftScreen.style.opacity = '0';
        setTimeout(() => {
            giftScreen.style.display = 'none';
            cardScreen.style.display = 'block';
            createBouquet();
            setTimeout(() => {
                cardScreen.style.opacity = '1';
            }, 50);
        }, 600);
    }, 500);
}
