const tarotCards = [
    // Major Arcana
    { name: "The Fool", image: "images/ar00.jpg" },
    { name: "The Magician", image: "images/ar01.jpg" },
    { name: "The High Priestess", image: "images/ar02.jpg" },
    { name: "The Empress", image: "images/ar03.jpg" },
    { name: "The Emperor", image: "images/ar04.jpg" },
    { name: "The Hierophant", image: "images/ar05.jpg" },
    { name: "The Lovers", image: "images/ar06.jpg" },
    { name: "The Chariot", image: "images/ar07.jpg" },
    { name: "Strength", image: "images/ar08.jpg" },
    { name: "The Hermit", image: "images/ar09.jpg" },
    { name: "Wheel of Fortune", image: "images/ar10.jpg" },
    { name: "Justice", image: "images/ar11.jpg" },
    { name: "The Hanged Man", image: "images/ar12.jpg" },
    { name: "Death", image: "images/ar13.jpg" },
    { name: "Temperance", image: "images/ar14.jpg" },
    { name: "The Devil", image: "images/ar15.jpg" },
    { name: "The Tower", image: "images/ar16.jpg" },
    { name: "The Star", image: "images/ar17.jpg" },
    { name: "The Moon", image: "images/ar18.jpg" },
    { name: "The Sun", image: "images/ar19.jpg" },
    { name: "Judgement", image: "images/ar20.jpg" },
    { name: "The World", image: "images/ar21.jpg" },

    // Minor Arcana - Cups
    { name: "Ace of Cups", image: "images/cuac.jpg" },
    { name: "Two of Cups", image: "images/cu02.jpg" },
    { name: "Three of Cups", image: "images/cu03.jpg" },
    { name: "Four of Cups", image: "images/cu04.jpg" },
    { name: "Five of Cups", image: "images/cu05.jpg" },
    { name: "Six of Cups", image: "images/cu06.jpg" },
    { name: "Seven of Cups", image: "images/cu07.jpg" },
    { name: "Eight of Cups", image: "images/cu08.jpg" },
    { name: "Nine of Cups", image: "images/cu09.jpg" },
    { name: "Ten of Cups", image: "images/cu10.jpg" },
    { name: "Page of Cups", image: "images/cupa.jpg" },
    { name: "Knight of Cups", image: "images/cukn.jpg" },
    { name: "Queen of Cups", image: "images/cuqu.jpg" },
    { name: "King of Cups", image: "images/cuki.jpg" },

    // Minor Arcana - Wands
    { name: "Ace of Wands", image: "images/waac.jpg" },
    { name: "Two of Wands", image: "images/wa02.jpg" },
    { name: "Three of Wands", image: "images/wa03.jpg" },
    { name: "Four of Wands", image: "images/wa04.jpg" },
    { name: "Five of Wands", image: "images/wa05.jpg" },
    { name: "Six of Wands", image: "images/wa06.jpg" },
    { name: "Seven of Wands", image: "images/wa07.jpg" },
    { name: "Eight of Wands", image: "images/wa08.jpg" },
    { name: "Nine of Wands", image: "images/wa09.jpg" },
    { name: "Ten of Wands", image: "images/wa10.jpg" },
    { name: "Page of Wands", image: "images/wapa.jpg" },
    { name: "Knight of Wands", image: "images/wakn.jpg" },
    { name: "Queen of Wands", image: "images/waqu.jpg" },
    { name: "King of Wands", image: "images/waki.jpg" },

    // Minor Arcana - Swords
    { name: "Ace of Swords", image: "images/swac.jpg" },
    { name: "Two of Swords", image: "images/sw02.jpg" },
    { name: "Three of Swords", image: "images/sw03.jpg" },
    { name: "Four of Swords", image: "images/sw04.jpg" },
    { name: "Five of Swords", image: "images/sw05.jpg" },
    { name: "Six of Swords", image: "images/sw06.jpg" },
    { name: "Seven of Swords", image: "images/sw07.jpg" },
    { name: "Eight of Swords", image: "images/sw08.jpg" },
    { name: "Nine of Swords", image: "images/sw09.jpg" },
    { name: "Ten of Swords", image: "images/sw10.jpg" },
    { name: "Page of Swords", image: "images/swpa.jpg" },
    { name: "Knight of Swords", image: "images/swkn.jpg" },
    { name: "Queen of Swords", image: "images/swqu.jpg" },
    { name: "King of Swords", image: "images/swki.jpg" },

    // Minor Arcana - Pentacles
    { name: "Ace of Pentacles", image: "images/peac.jpg" },
    { name: "Two of Pentacles", image: "images/pe02.jpg" },
    { name: "Three of Pentacles", image: "images/pe03.jpg" },
    { name: "Four of Pentacles", image: "images/pe04.jpg" },
    { name: "Five of Pentacles", image: "images/pe05.jpg" },
    { name: "Six of Pentacles", image: "images/pe06.jpg" },
    { name: "Seven of Pentacles", image: "images/pe07.jpg" },
    { name: "Eight of Pentacles", image: "images/pe08.jpg" },
    { name: "Nine of Pentacles", image: "images/pe09.jpg" },
    { name: "Ten of Pentacles", image: "images/pe10.jpg" },
    { name: "Page of Pentacles", image: "images/pepa.jpg" },
    { name: "Knight of Pentacles", image: "images/pekn.jpg" },
    { name: "Queen of Pentacles", image: "images/pequ.jpg" },
    { name: "King of Pentacles", image: "images/peki.jpg" }
];

const majorArcana = tarotCards.slice(0, 22);
const minorArcana = tarotCards.slice(22);

// --- State ---
let activeDeck = 'any';
let handSize = 3;
let currentHand = [];       // array of card objects or null (empty slot)
let selectedIndices = new Set();

// --- DOM refs ---
const handDisplay = document.getElementById('handDisplay');
const actionButtons = document.getElementById('actionButtons');
const discardSelectedBtn = document.getElementById('discardSelected');
const drawReplacementsBtn = document.getElementById('drawReplacements');
const handSizeDisplay = document.getElementById('handSizeDisplay');

// --- Deck helpers ---
function getSourceDeck() {
    if (activeDeck === 'major') return majorArcana;
    if (activeDeck === 'minor') return minorArcana;
    return tarotCards;
}

function getAvailablePool() {
    const source = getSourceDeck();
    const inHand = new Set(currentHand.filter(c => c !== null).map(c => c.name));
    return source.filter(c => !inHand.has(c.name));
}

function pickRandom(pool) {
    return pool[Math.floor(Math.random() * pool.length)];
}

// --- Core actions ---
function drawHand() {
    const pool = getSourceDeck().slice();
    // Fisher-Yates shuffle then take handSize
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    currentHand = pool.slice(0, handSize);
    selectedIndices.clear();
    renderHand();
}

function toggleSelect(i) {
    if (currentHand[i] === null) return;
    if (selectedIndices.has(i)) {
        selectedIndices.delete(i);
    } else {
        selectedIndices.add(i);
    }
    renderHand();
}

function discardSelected() {
    for (const i of selectedIndices) {
        currentHand[i] = null;
    }
    selectedIndices.clear();
    renderHand();
}

function drawReplacements() {
    for (let i = 0; i < currentHand.length; i++) {
        if (currentHand[i] === null) {
            const pool = getAvailablePool();
            if (pool.length > 0) {
                currentHand[i] = pickRandom(pool);
            }
        }
    }
    renderHand();
}

// --- Render ---
function renderHand() {
    handDisplay.style.setProperty('--hand-size', currentHand.length);
    handDisplay.innerHTML = '';
    handDisplay.classList.remove('hidden');

    for (let i = 0; i < currentHand.length; i++) {
        const card = currentHand[i];
        const el = document.createElement('div');

        if (card === null) {
            el.className = 'hand-card empty';
        } else {
            const isSelected = selectedIndices.has(i);
            el.className = 'hand-card' + (isSelected ? ' selected' : '');
            el.innerHTML = `
                <img src="${card.image}" alt="${card.name}">
                <div class="hand-card-name">${card.name}</div>
            `;
            el.addEventListener('click', () => toggleSelect(i));
        }

        handDisplay.appendChild(el);
    }

    // Show/hide action buttons
    const hasSelected = selectedIndices.size > 0;
    const hasEmpty = currentHand.some(c => c === null);

    if (hasSelected || hasEmpty) {
        actionButtons.classList.remove('hidden');
    } else {
        actionButtons.classList.add('hidden');
    }

    discardSelectedBtn.style.display = hasSelected ? '' : 'none';
    drawReplacementsBtn.style.display = hasEmpty ? '' : 'none';
}

// --- Button wiring ---
document.getElementById('drawAny').addEventListener('click', () => setDeck('any'));
document.getElementById('drawMajor').addEventListener('click', () => setDeck('major'));
document.getElementById('drawMinor').addEventListener('click', () => setDeck('minor'));

function setDeck(deck) {
    activeDeck = deck;
    document.querySelectorAll('.button-group .draw-button').forEach(btn => btn.classList.remove('active'));
    document.getElementById('draw' + deck.charAt(0).toUpperCase() + deck.slice(1)).classList.add('active');
}

document.getElementById('sizeDown').addEventListener('click', () => {
    if (handSize > 1) {
        handSize--;
        handSizeDisplay.textContent = handSize;
    }
});

document.getElementById('sizeUp').addEventListener('click', () => {
    if (handSize < 10) {
        handSize++;
        handSizeDisplay.textContent = handSize;
    }
});

document.getElementById('drawOne').addEventListener('click', () => {
    currentHand = [pickRandom(getSourceDeck())];
    selectedIndices.clear();
    renderHand();
});
document.getElementById('drawHand').addEventListener('click', drawHand);
discardSelectedBtn.addEventListener('click', discardSelected);
drawReplacementsBtn.addEventListener('click', drawReplacements);
