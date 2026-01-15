export type Card = {
// ordinamento 
  title: string;          // Nome della carta
  category: string;       // Set di appartenenza: Lorwyn, Morningtide, Shadowmoor, Eventide

// filtri principali 
  colors: ("White" | "Blue" | "Black" | "Red" | "Green")[];
  manaCost: number;       // Converted mana cost
  types: ("Creature" | "Artifact" | "Enchantment" | "Planeswalker" | "Instant" | "Sorcery" | "Land")[];
  subtypes: string[];     // Es: ["Goblin", "Shaman"]

//filtri secondari
  power?: number;
  toughness?: number;

  text?: string; // Oracle text
  rarity: "Common" | "Uncommon" | "Rare" | "Mythic";
  theme?: "Tribal" | "Persist" | "Changeling" | "Elemental";
  
  //img
  imageUrl: string;

};