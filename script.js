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
    { name: "Ten of Pentacles", image: "images/pe10.jpg" }
];

const drawAnyButton = document.getElementById('drawAny');
const drawMajorButton = document.getElementById('drawMajor');
const drawMinorButton = document.getElementById('drawMinor');
const cardDisplay = document.getElementById('cardDisplay');
const cardImage = document.getElementById('cardImage');
const cardName = document.getElementById('cardName');

// Major Arcana: first 22 cards
const majorArcana = tarotCards.slice(0, 22);
// Minor Arcana: remaining cards
const minorArcana = tarotCards.slice(22);

function displayCard(deck) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const selectedCard = deck[randomIndex];

    cardImage.src = selectedCard.image;
    cardImage.alt = selectedCard.name;
    cardName.textContent = selectedCard.name;

    cardDisplay.classList.remove('hidden');

    // Re-trigger animation
    cardDisplay.style.animation = 'none';
    setTimeout(() => {
        cardDisplay.style.animation = '';
    }, 10);
}

drawAnyButton.addEventListener('click', () => {
    displayCard(tarotCards);
});

drawMajorButton.addEventListener('click', () => {
    displayCard(majorArcana);
});

drawMinorButton.addEventListener('click', () => {
    displayCard(minorArcana);
});
