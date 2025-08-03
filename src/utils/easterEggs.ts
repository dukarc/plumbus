// Rick & Morty Easter Eggs and Whimsy Utilities

export const rickQuotes = [
  "*burp* Whatever, Morty. Just... just buy the plumbus.",
  "Listen, I've seen a lot of plumbuses across infinite realities, and this one doesn't completely suck.",
  "Wubba lubba dub dub! *burp* Everyone needs a plumbus, Morty!",
  "Science, Morty! The plumbus is peak interdimensional engineering!",
  "I don't care if you understand it, Morty. Just... *burp* ...just get the plumbus.",
  "Morty, *burp* this plumbus is scientifically proven to be 47% more efficient than Jerry.",
  "Listen Morty, in all my years of interdimensional travel, I've never seen a plumbus this... this functional.",
  "It's not about the money, Morty. It's about the science! *burp* Also the money."
];

export const mortyQuotes = [
  "Aw geez Rick, I-I don't know about this plumbus thing...",
  "W-wow Rick, this plumbus actually works really well!",
  "Rick, are you sure this plumbus is safe? It looks kinda... gross.",
  "Oh man, my parents are gonna love this plumbus!",
  "Gee Rick, I never knew plumbuses were so... useful?",
  "Aw geez, even Jerry could probably use this plumbus!"
];

export const jerryPhrases = [
  "I don't really understand how this works, but okay!",
  "This plumbus is definitely not as good as my idea for a better plumbus.",
  "I bet I could improve this plumbus design...",
  "Wow, even I can use this! That's... that's actually pretty good.",
  "I'm not saying this plumbus is perfect, but it's... adequate."
];

export const squanchReplacements = [
  "squanch", "love", "use", "enjoy", "appreciate", "want", "need", "buy"
];

export const dimensionReferences = [
  "C-137", "J19-Zeta-7", "35-C", "C-500A", "Dimension 35-C", "Cronenberg Dimension"
];

export const scienceWords = [
  "quantum", "interdimensional", "fleeb-based", "schlami-approved", 
  "grumbo-enhanced", "dingle-bop powered", "scientifically proven"
];

// Easter egg click counters
export class EasterEggCounter {
  private counts: Map<string, number> = new Map();
  private callbacks: Map<string, (count: number) => void> = new Map();

  increment(key: string): number {
    const current = this.counts.get(key) || 0;
    const newCount = current + 1;
    this.counts.set(key, newCount);
    
    const callback = this.callbacks.get(key);
    if (callback) {
      callback(newCount);
    }
    
    return newCount;
  }

  getCount(key: string): number {
    return this.counts.get(key) || 0;
  }

  reset(key: string): void {
    this.counts.set(key, 0);
  }

  onTrigger(key: string, threshold: number, callback: () => void): void {
    this.callbacks.set(key, (count: number) => {
      if (count >= threshold) {
        callback();
        this.reset(key);
      }
    });
  }
}

// Global easter egg counter instance
export const globalEasterEggs = new EasterEggCounter();

// Random quote generators
export const getRandomRickQuote = (): string => {
  return rickQuotes[Math.floor(Math.random() * rickQuotes.length)];
};

export const getRandomMortyQuote = (): string => {
  return mortyQuotes[Math.floor(Math.random() * mortyQuotes.length)];
};

export const getRandomJerryPhrase = (): string => {
  return jerryPhrases[Math.floor(Math.random() * jerryPhrases.length)];
};

export const getRandomDimension = (): string => {
  return dimensionReferences[Math.floor(Math.random() * dimensionReferences.length)];
};

// Text replacement utilities
export const addBurps = (text: string): string => {
  const burpPositions = [0.3, 0.6, 0.9];
  let result = text;
  
  burpPositions.forEach(pos => {
    const index = Math.floor(text.length * pos);
    if (Math.random() > 0.7) { // 30% chance of burp
      result = result.slice(0, index) + ' *burp* ' + result.slice(index);
    }
  });
  
  return result;
};

export const replaceWithSquanch = (text: string, probability: number = 0.3): string => {
  let result = text;
  
  squanchReplacements.forEach(word => {
    if (Math.random() < probability) {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      result = result.replace(regex, 'squanch');
    }
  });
  
  return result;
};

// Console easter eggs
export const logEasterEgg = (message: string, type: 'rick' | 'morty' | 'jerry' | 'squanch' = 'rick'): void => {
  const styles: Record<string, string> = {
    rick: 'color: #00ff00; font-weight: bold; font-size: 14px;',
    morty: 'color: #ffff00; font-style: italic; font-size: 12px;',
    jerry: 'color: #ff6b6b; opacity: 0.7; font-size: 11px;',
    squanch: 'color: #ff69b4; font-weight: bold; font-size: 13px;'
  };
  
  console.log(`%c🛸 ${message}`, styles[type]);
};

// Fun sound effect descriptions (for future implementation)
export const soundEffects = {
  portalGun: "🌀 *portal opening sound*",
  rickBurp: "🍺 *burp*",
  mortyStutter: "😰 *nervous Morty sounds*",
  squanchNoise: "🦄 *squanching intensifies*",
  jerryFail: "🤦 *Jerry being Jerry*",
  meeseeksAppear: "💙 *poof* Look at me!",
  scienceSuccess: "🧪 *science happens*"
};

// Konami code for ultimate easter egg
export const konamiCode = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
  'KeyB', 'KeyA'
];

export class KonamiCodeListener {
  private sequence: string[] = [];
  private onComplete: () => void;

  constructor(onComplete: () => void) {
    this.onComplete = onComplete;
    this.listen();
  }

  private listen(): void {
    document.addEventListener('keydown', (event) => {
      this.sequence.push(event.code);
      
      // Keep only the last 10 keys
      if (this.sequence.length > konamiCode.length) {
        this.sequence.shift();
      }
      
      // Check if sequence matches
      if (this.sequence.length === konamiCode.length) {
        const matches = this.sequence.every((key, index) => key === konamiCode[index]);
        if (matches) {
          this.onComplete();
          this.sequence = []; // Reset
        }
      }
    });
  }
}

// Ultimate easter egg messages
export const ultimateEasterEggs = [
  "🎉 Wubba lubba dub dub! You've unlocked the ultimate Rick & Morty easter egg!",
  "🛸 Congratulations! You've transcended dimensions and found the secret!",
  "🧪 *burp* Well, well, well... looks like we got ourselves a true fan here, Morty!",
  "🌀 You've activated the portal gun! Prepare for interdimensional awesomeness!",
  "💙 Ooh, can do! Mr. Meeseeks is proud of your easter egg hunting skills!"
];