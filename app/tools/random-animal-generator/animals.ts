export type AnimalCategory = 'mammals' | 'birds' | 'reptiles' | 'sea' | 'insects';

export const animals: Record<AnimalCategory, string[]> = {
  mammals: [
    'Elephant', 'Lion', 'Tiger', 'Giraffe', 'Zebra', 'Kangaroo', 'Panda', 'Koala',
    'Wolf', 'Fox', 'Bear', 'Rabbit', 'Squirrel', 'Deer', 'Horse', 'Cow',
    'Sheep', 'Goat', 'Pig', 'Dog', 'Cat', 'Monkey', 'Gorilla', 'Chimpanzee',
    'Hedgehog', 'Otter', 'Hippopotamus', 'Rhinoceros', 'Camel', 'Llama',
  ],
  birds: [
    'Eagle', 'Owl', 'Parrot', 'Penguin', 'Flamingo', 'Peacock', 'Robin', 'Sparrow',
    'Hummingbird', 'Woodpecker', 'Swan', 'Duck', 'Goose', 'Chicken', 'Turkey', 'Pigeon',
    'Seagull', 'Pelican', 'Toucan', 'Ostrich', 'Crow', 'Falcon', 'Hawk', 'Stork',
    'Canary', 'Kingfisher', 'Crane', 'Magpie', 'Cardinal', 'Blue jay',
  ],
  reptiles: [
    'Crocodile', 'Alligator', 'Tortoise', 'Turtle', 'Iguana', 'Chameleon', 'Gecko', 'Lizard',
    'Snake', 'Python', 'Cobra', 'Komodo dragon', 'Frog', 'Toad', 'Salamander', 'Newt',
    'Bearded dragon', 'Skink', 'Tree frog', 'Bullfrog', 'Box turtle', 'Sea turtle', 'Monitor lizard', 'Anole',
    'Tuatara', 'Gila monster', 'Caiman', 'Terrapin', 'Axolotl', 'Horned lizard',
  ],
  sea: [
    'Dolphin', 'Whale', 'Shark', 'Octopus', 'Jellyfish', 'Starfish', 'Seahorse', 'Crab',
    'Lobster', 'Shrimp', 'Clownfish', 'Pufferfish', 'Stingray', 'Swordfish', 'Tuna', 'Salmon',
    'Eel', 'Sea otter', 'Seal', 'Walrus', 'Manatee', 'Narwhal', 'Orca', 'Cuttlefish',
    'Squid', 'Anglerfish', 'Coral', 'Sea urchin', 'Manta ray', 'Hermit crab',
  ],
  insects: [
    'Butterfly', 'Bee', 'Ant', 'Ladybug', 'Grasshopper', 'Dragonfly', 'Beetle', 'Moth',
    'Caterpillar', 'Firefly', 'Cricket', 'Praying mantis', 'Spider', 'Snail', 'Worm', 'Centipede',
    'Millipede', 'Wasp', 'Bumblebee', 'Flea', 'Mosquito', 'Cockroach', 'Stick insect', 'Cicada',
    'Termite', 'Scorpion', 'Tick', 'Earwig', 'Aphid', 'Weevil',
  ],
};

export const categoryLabels: Record<AnimalCategory, string> = {
  mammals: 'Mammals',
  birds: 'Birds',
  reptiles: 'Reptiles & amphibians',
  sea: 'Sea life',
  insects: 'Insects & bugs',
};
