const tarotCards = [
    // Major Arcana
    { name: "The Fool", meaning: "New beginnings, innocence, spontaneity, and a free spirit." },
    { name: "The Magician", meaning: "Manifestation, resourcefulness, power, and inspired action." },
    { name: "The High Priestess", meaning: "Intuition, sacred knowledge, the subconscious mind, and mystery." },
    { name: "The Empress", meaning: "Femininity, beauty, nature, nurturing, and abundance." },
    { name: "The Emperor", meaning: "Authority, establishment, structure, and father figure." },
    { name: "The Hierophant", meaning: "Spiritual wisdom, religious beliefs, conformity, and tradition." },
    { name: "The Lovers", meaning: "Love, harmony, relationships, values alignment, and choices." },
    { name: "The Chariot", meaning: "Control, willpower, success, action, and determination." },
    { name: "Strength", meaning: "Inner strength, courage, patience, control, and compassion." },
    { name: "The Hermit", meaning: "Soul searching, introspection, being alone, and inner guidance." },
    { name: "Wheel of Fortune", meaning: "Good luck, karma, life cycles, destiny, and turning points." },
    { name: "Justice", meaning: "Justice, fairness, truth, cause and effect, and law." },
    { name: "The Hanged Man", meaning: "Pause, surrender, letting go, and new perspectives." },
    { name: "Death", meaning: "Endings, transformation, transition, and letting go." },
    { name: "Temperance", meaning: "Balance, moderation, patience, purpose, and meaning." },
    { name: "The Devil", meaning: "Shadow self, attachment, addiction, restriction, and sexuality." },
    { name: "The Tower", meaning: "Sudden change, upheaval, chaos, revelation, and awakening." },
    { name: "The Star", meaning: "Hope, faith, purpose, renewal, and spirituality." },
    { name: "The Moon", meaning: "Illusion, fear, anxiety, subconscious, and intuition." },
    { name: "The Sun", meaning: "Positivity, fun, warmth, success, and vitality." },
    { name: "Judgement", meaning: "Reflection, reckoning, inner calling, and absolution." },
    { name: "The World", meaning: "Completion, accomplishment, travel, and fulfillment." },

    // Minor Arcana - Cups
    { name: "Ace of Cups", meaning: "Love, new relationships, compassion, and creativity." },
    { name: "Two of Cups", meaning: "Unified love, partnership, mutual attraction, and connection." },
    { name: "Three of Cups", meaning: "Celebration, friendship, creativity, and collaborations." },
    { name: "Four of Cups", meaning: "Meditation, contemplation, apathy, and reevaluation." },
    { name: "Five of Cups", meaning: "Regret, failure, disappointment, and pessimism." },
    { name: "Six of Cups", meaning: "Revisiting the past, childhood memories, innocence, and joy." },
    { name: "Seven of Cups", meaning: "Opportunities, choices, wishful thinking, and illusion." },
    { name: "Eight of Cups", meaning: "Disappointment, abandonment, withdrawal, and escapism." },
    { name: "Nine of Cups", meaning: "Contentment, satisfaction, gratitude, and wish come true." },
    { name: "Ten of Cups", meaning: "Divine love, blissful relationships, harmony, and alignment." },

    // Minor Arcana - Wands
    { name: "Ace of Wands", meaning: "Inspiration, new opportunities, growth, and potential." },
    { name: "Two of Wands", meaning: "Future planning, progress, decisions, and discovery." },
    { name: "Three of Wands", meaning: "Progress, expansion, foresight, and overseas opportunities." },
    { name: "Four of Wands", meaning: "Celebration, joy, harmony, relaxation, and homecoming." },
    { name: "Five of Wands", meaning: "Conflict, disagreements, competition, and tension." },
    { name: "Six of Wands", meaning: "Success, public recognition, progress, and self-confidence." },
    { name: "Seven of Wands", meaning: "Challenge, competition, perseverance, and protection." },
    { name: "Eight of Wands", meaning: "Movement, fast paced change, action, and alignment." },
    { name: "Nine of Wands", meaning: "Resilience, courage, persistence, and boundaries." },
    { name: "Ten of Wands", meaning: "Burden, extra responsibility, hard work, and completion." },

    // Minor Arcana - Swords
    { name: "Ace of Swords", meaning: "Breakthroughs, new ideas, mental clarity, and success." },
    { name: "Two of Swords", meaning: "Difficult decisions, weighing options, stalemate, and avoidance." },
    { name: "Three of Swords", meaning: "Heartbreak, emotional pain, sorrow, and grief." },
    { name: "Four of Swords", meaning: "Rest, relaxation, meditation, and contemplation." },
    { name: "Five of Swords", meaning: "Conflict, defeat, winning at all costs, and tension." },
    { name: "Six of Swords", meaning: "Transition, change, rite of passage, and moving on." },
    { name: "Seven of Swords", meaning: "Betrayal, deception, getting away with something, and strategy." },
    { name: "Eight of Swords", meaning: "Negative thoughts, self-imposed restriction, and imprisonment." },
    { name: "Nine of Swords", meaning: "Anxiety, worry, fear, depression, and nightmares." },
    { name: "Ten of Swords", meaning: "Painful endings, deep wounds, betrayal, and loss." },

    // Minor Arcana - Pentacles
    { name: "Ace of Pentacles", meaning: "Opportunity, prosperity, new venture, and manifestation." },
    { name: "Two of Pentacles", meaning: "Multiple priorities, time management, prioritization, and adaptability." },
    { name: "Three of Pentacles", meaning: "Teamwork, collaboration, learning, and implementation." },
    { name: "Four of Pentacles", meaning: "Saving money, security, conservatism, and control." },
    { name: "Five of Pentacles", meaning: "Financial loss, poverty, lack mindset, and isolation." },
    { name: "Six of Pentacles", meaning: "Giving, receiving, sharing wealth, generosity, and charity." },
    { name: "Seven of Pentacles", meaning: "Long-term view, sustainable results, perseverance, and investment." },
    { name: "Eight of Pentacles", meaning: "Apprenticeship, skill development, quality, and mastery." },
    { name: "Nine of Pentacles", meaning: "Abundance, luxury, self-sufficiency, and financial independence." },
    { name: "Ten of Pentacles", meaning: "Wealth, financial security, family, long-term success, and legacy." }
];

const drawButton = document.getElementById('drawCard');
const cardDisplay = document.getElementById('cardDisplay');
const cardName = document.getElementById('cardName');
const cardMeaning = document.getElementById('cardMeaning');

drawButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const selectedCard = tarotCards[randomIndex];

    cardName.textContent = selectedCard.name;
    cardMeaning.textContent = selectedCard.meaning;

    cardDisplay.classList.remove('hidden');

    // Re-trigger animation
    cardDisplay.style.animation = 'none';
    setTimeout(() => {
        cardDisplay.style.animation = '';
    }, 10);
});
