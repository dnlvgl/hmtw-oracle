const tarotCards = [
    // Major Arcana
    { name: "The Fool", meaning: "New beginnings, innocence, spontaneity, and a free spirit.", image: "images/ar00.jpg" },
    { name: "The Magician", meaning: "Manifestation, resourcefulness, power, and inspired action.", image: "images/ar01.jpg" },
    { name: "The High Priestess", meaning: "Intuition, sacred knowledge, the subconscious mind, and mystery.", image: "images/ar02.jpg" },
    { name: "The Empress", meaning: "Femininity, beauty, nature, nurturing, and abundance.", image: "images/ar03.jpg" },
    { name: "The Emperor", meaning: "Authority, establishment, structure, and father figure.", image: "images/ar04.jpg" },
    { name: "The Hierophant", meaning: "Spiritual wisdom, religious beliefs, conformity, and tradition.", image: "images/ar05.jpg" },
    { name: "The Lovers", meaning: "Love, harmony, relationships, values alignment, and choices.", image: "images/ar06.jpg" },
    { name: "The Chariot", meaning: "Control, willpower, success, action, and determination.", image: "images/ar07.jpg" },
    { name: "Strength", meaning: "Inner strength, courage, patience, control, and compassion.", image: "images/ar08.jpg" },
    { name: "The Hermit", meaning: "Soul searching, introspection, being alone, and inner guidance.", image: "images/ar09.jpg" },
    { name: "Wheel of Fortune", meaning: "Good luck, karma, life cycles, destiny, and turning points.", image: "images/ar10.jpg" },
    { name: "Justice", meaning: "Justice, fairness, truth, cause and effect, and law.", image: "images/ar11.jpg" },
    { name: "The Hanged Man", meaning: "Pause, surrender, letting go, and new perspectives.", image: "images/ar12.jpg" },
    { name: "Death", meaning: "Endings, transformation, transition, and letting go.", image: "images/ar13.jpg" },
    { name: "Temperance", meaning: "Balance, moderation, patience, purpose, and meaning.", image: "images/ar14.jpg" },
    { name: "The Devil", meaning: "Shadow self, attachment, addiction, restriction, and sexuality.", image: "images/ar15.jpg" },
    { name: "The Tower", meaning: "Sudden change, upheaval, chaos, revelation, and awakening.", image: "images/ar16.jpg" },
    { name: "The Star", meaning: "Hope, faith, purpose, renewal, and spirituality.", image: "images/ar17.jpg" },
    { name: "The Moon", meaning: "Illusion, fear, anxiety, subconscious, and intuition.", image: "images/ar18.jpg" },
    { name: "The Sun", meaning: "Positivity, fun, warmth, success, and vitality.", image: "images/ar19.jpg" },
    { name: "Judgement", meaning: "Reflection, reckoning, inner calling, and absolution.", image: "images/ar20.jpg" },
    { name: "The World", meaning: "Completion, accomplishment, travel, and fulfillment.", image: "images/ar21.jpg" },

    // Minor Arcana - Cups
    { name: "Ace of Cups", meaning: "Love, new relationships, compassion, and creativity.", image: "images/cuac.jpg" },
    { name: "Two of Cups", meaning: "Unified love, partnership, mutual attraction, and connection.", image: "images/cu02.jpg" },
    { name: "Three of Cups", meaning: "Celebration, friendship, creativity, and collaborations.", image: "images/cu03.jpg" },
    { name: "Four of Cups", meaning: "Meditation, contemplation, apathy, and reevaluation.", image: "images/cu04.jpg" },
    { name: "Five of Cups", meaning: "Regret, failure, disappointment, and pessimism.", image: "images/cu05.jpg" },
    { name: "Six of Cups", meaning: "Revisiting the past, childhood memories, innocence, and joy.", image: "images/cu06.jpg" },
    { name: "Seven of Cups", meaning: "Opportunities, choices, wishful thinking, and illusion.", image: "images/cu07.jpg" },
    { name: "Eight of Cups", meaning: "Disappointment, abandonment, withdrawal, and escapism.", image: "images/cu08.jpg" },
    { name: "Nine of Cups", meaning: "Contentment, satisfaction, gratitude, and wish come true.", image: "images/cu09.jpg" },
    { name: "Ten of Cups", meaning: "Divine love, blissful relationships, harmony, and alignment.", image: "images/cu10.jpg" },

    // Minor Arcana - Wands
    { name: "Ace of Wands", meaning: "Inspiration, new opportunities, growth, and potential.", image: "images/waac.jpg" },
    { name: "Two of Wands", meaning: "Future planning, progress, decisions, and discovery.", image: "images/wa02.jpg" },
    { name: "Three of Wands", meaning: "Progress, expansion, foresight, and overseas opportunities.", image: "images/wa03.jpg" },
    { name: "Four of Wands", meaning: "Celebration, joy, harmony, relaxation, and homecoming.", image: "images/wa04.jpg" },
    { name: "Five of Wands", meaning: "Conflict, disagreements, competition, and tension.", image: "images/wa05.jpg" },
    { name: "Six of Wands", meaning: "Success, public recognition, progress, and self-confidence.", image: "images/wa06.jpg" },
    { name: "Seven of Wands", meaning: "Challenge, competition, perseverance, and protection.", image: "images/wa07.jpg" },
    { name: "Eight of Wands", meaning: "Movement, fast paced change, action, and alignment.", image: "images/wa08.jpg" },
    { name: "Nine of Wands", meaning: "Resilience, courage, persistence, and boundaries.", image: "images/wa09.jpg" },
    { name: "Ten of Wands", meaning: "Burden, extra responsibility, hard work, and completion.", image: "images/wa10.jpg" },

    // Minor Arcana - Swords
    { name: "Ace of Swords", meaning: "Breakthroughs, new ideas, mental clarity, and success.", image: "images/swac.jpg" },
    { name: "Two of Swords", meaning: "Difficult decisions, weighing options, stalemate, and avoidance.", image: "images/sw02.jpg" },
    { name: "Three of Swords", meaning: "Heartbreak, emotional pain, sorrow, and grief.", image: "images/sw03.jpg" },
    { name: "Four of Swords", meaning: "Rest, relaxation, meditation, and contemplation.", image: "images/sw04.jpg" },
    { name: "Five of Swords", meaning: "Conflict, defeat, winning at all costs, and tension.", image: "images/sw05.jpg" },
    { name: "Six of Swords", meaning: "Transition, change, rite of passage, and moving on.", image: "images/sw06.jpg" },
    { name: "Seven of Swords", meaning: "Betrayal, deception, getting away with something, and strategy.", image: "images/sw07.jpg" },
    { name: "Eight of Swords", meaning: "Negative thoughts, self-imposed restriction, and imprisonment.", image: "images/sw08.jpg" },
    { name: "Nine of Swords", meaning: "Anxiety, worry, fear, depression, and nightmares.", image: "images/sw09.jpg" },
    { name: "Ten of Swords", meaning: "Painful endings, deep wounds, betrayal, and loss.", image: "images/sw10.jpg" },

    // Minor Arcana - Pentacles
    { name: "Ace of Pentacles", meaning: "Opportunity, prosperity, new venture, and manifestation.", image: "images/peac.jpg" },
    { name: "Two of Pentacles", meaning: "Multiple priorities, time management, prioritization, and adaptability.", image: "images/pe02.jpg" },
    { name: "Three of Pentacles", meaning: "Teamwork, collaboration, learning, and implementation.", image: "images/pe03.jpg" },
    { name: "Four of Pentacles", meaning: "Saving money, security, conservatism, and control.", image: "images/pe04.jpg" },
    { name: "Five of Pentacles", meaning: "Financial loss, poverty, lack mindset, and isolation.", image: "images/pe05.jpg" },
    { name: "Six of Pentacles", meaning: "Giving, receiving, sharing wealth, generosity, and charity.", image: "images/pe06.jpg" },
    { name: "Seven of Pentacles", meaning: "Long-term view, sustainable results, perseverance, and investment.", image: "images/pe07.jpg" },
    { name: "Eight of Pentacles", meaning: "Apprenticeship, skill development, quality, and mastery.", image: "images/pe08.jpg" },
    { name: "Nine of Pentacles", meaning: "Abundance, luxury, self-sufficiency, and financial independence.", image: "images/pe09.jpg" },
    { name: "Ten of Pentacles", meaning: "Wealth, financial security, family, long-term success, and legacy.", image: "images/pe10.jpg" }
];

const drawAnyButton = document.getElementById('drawAny');
const drawMajorButton = document.getElementById('drawMajor');
const drawMinorButton = document.getElementById('drawMinor');
const cardDisplay = document.getElementById('cardDisplay');
const cardImage = document.getElementById('cardImage');
const cardName = document.getElementById('cardName');
const cardMeaning = document.getElementById('cardMeaning');

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
    cardMeaning.textContent = selectedCard.meaning;

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
