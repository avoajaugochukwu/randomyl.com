export type Style = 'fantasy' | 'realistic';
export type Gender = 'male' | 'female' | 'neutral';

export const firstNames: Record<Style, Record<Gender, string[]>> = {
  fantasy: {
    male: [
      'Eldrin', 'Thorne', 'Caelum', 'Aldric', 'Brannok', 'Fenwick', 'Galdor',
      'Roderyn', 'Theron', 'Varic', 'Drystan', 'Kaelen', 'Oryn', 'Bram',
      'Sylvan', 'Marek', 'Doran', 'Erevan', 'Halric', 'Loric', 'Tarvin',
      'Vaelor', 'Corwin', 'Daric', 'Elowen', 'Gaius', 'Joran', 'Riven',
      'Soren', 'Talon', 'Wynn', 'Zephyr', 'Aldous', 'Cael',
    ],
    female: [
      'Lyra', 'Sylvara', 'Elara', 'Mirelle', 'Faye', 'Rowena', 'Isolde',
      'Aeris', 'Brisa', 'Caltha', 'Delphine', 'Eowyn', 'Fenella', 'Gwyn',
      'Hespera', 'Ivanna', 'Lunara', 'Maeve', 'Nyssa', 'Orla', 'Phaedra',
      'Quilla', 'Seraphine', 'Thessaly', 'Vesper', 'Ysolde', 'Aluna', 'Briar',
      'Calla', 'Elina', 'Liora', 'Nimue', 'Tamsin', 'Yara',
    ],
    neutral: [
      'Ash', 'Rowan', 'Sage', 'Wren', 'Vale', 'Ember', 'Linden', 'Reed',
      'Sorrel', 'Bryn', 'Coral', 'Eden', 'Fenn', 'Gale', 'Haven', 'Indigo',
      'Juniper', 'Lark', 'Marlow', 'Onyx', 'Quill', 'River', 'Slate', 'Tova',
      'Vesper', 'Wynn', 'Aspen', 'Briar', 'Cypress', 'Frost', 'North', 'Sable',
      'Talwyn', 'Zephyr',
    ],
  },
  realistic: {
    male: [
      'James', 'Liam', 'Noah', 'Daniel', 'Mateo', 'Arjun', 'Kenji', 'Mohammed',
      'Lucas', 'Ethan', 'Diego', 'Hugo', 'Samuel', 'Marcus', 'Andre', 'Felix',
      'Omar', 'Raj', 'Chen', 'Tobias', 'Anton', 'Carlos', 'David', 'Elias',
      'Finn', 'Gabriel', 'Henry', 'Ibrahim', 'Jonas', 'Kai', 'Leon', 'Nikolai',
      'Oscar', 'Theo',
    ],
    female: [
      'Olivia', 'Emma', 'Sofia', 'Aisha', 'Mei', 'Priya', 'Isabella', 'Amara',
      'Chloe', 'Hana', 'Leila', 'Nadia', 'Yuki', 'Zara', 'Ava', 'Clara',
      'Elena', 'Fatima', 'Grace', 'Ingrid', 'Julia', 'Lena', 'Maya', 'Nora',
      'Ana', 'Bianca', 'Carmen', 'Diana', 'Esther', 'Freya', 'Iris', 'Lucia',
      'Naomi', 'Rosa',
    ],
    neutral: [
      'Alex', 'Jordan', 'Sam', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Jamie',
      'Avery', 'Quinn', 'Charlie', 'Robin', 'Dakota', 'Skylar', 'Cameron',
      'Reese', 'Rowan', 'Phoenix', 'Sage', 'Devon', 'Emerson', 'Frankie',
      'Harper', 'Kai', 'Logan', 'Micah', 'Noel', 'Parker', 'Remy', 'Sasha',
      'Toni', 'Val', 'Wren', 'Yael',
    ],
  },
};

export const lastNames: Record<Style, string[]> = {
  fantasy: [
    'Thornwood', 'Ashmere', 'Brightblade', 'Stormhold', 'Ravencrest',
    'Silverbrook', 'Duskbane', 'Frostvale', 'Emberfall', 'Nightwhisper',
    'Moonshadow', 'Ironheart', 'Wildfen', 'Goldleaf', 'Shadowmere',
    'Dawnrider', 'Stoneford', 'Hollowmere', 'Wyrmsbane', 'Lightwood',
    'Mistral', 'Oakenshield', 'Stareyes', 'Winterbourne', 'Crowfeather',
    'Briarmoor', 'Greywind', 'Hawthorne', 'Lorenfell', 'Marshlight',
    'Nethermoor', 'Pinewhistle', 'Quillfeather', 'Rosethorn', 'Stagmoor',
    'Tidewalker', 'Underhill', 'Vexholt', 'Whitethorn', 'Yarrowmere',
  ],
  realistic: [
    'Smith', 'Johnson', 'Garcia', 'Nguyen', 'Patel', 'Kim', 'Müller',
    'Rossi', 'Andersson', 'Okafor', 'Tanaka', 'Silva', 'Cohen', 'Khan',
    'Martinez', 'Brown', 'Wilson', 'Hernandez', 'Lopez', 'Kowalski',
    'Novak', 'Ahmed', 'Fischer', 'Dubois', 'Ferrari', 'Yilmaz', 'Petrov',
    'Santos', 'Adebayo', 'Lee', 'Wang', 'Reyes', 'Murphy', 'Olsen',
    'Bauer', 'Costa', 'Haddad', 'Ivanov', 'Jensen', 'Sato',
  ],
};
