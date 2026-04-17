// Eastern Factions with 11 Frameworks
const easternFactionsData = {
  luxImperio: {
    name: "Lux Imperio (North)",
    descriptiveName: "Realm of Light",
    frameworks: {
      historical: "Founded Year 1,150 of 1st Myriad (Abs. 3,735). Theocratic dual government of Pope and Emperor. Eclipse doctrine (shadow supports light) declared heresy Year 2,000, driven underground.",
      political: "Dual Council: Pope + Emperor + Grand Matriarch. Light Tiers: Gifted (80%), Blessed (15%), Tribulation (5%). Eclipse outcasts now integrated.",
      mental: "Optimism as civic duty; Word-Fasting practiced. Pathology: False hope, denial of reality. Practice: Rite of Radiance.",
      spiritual: "Basilica Rites; Central Basilica + Eternal Flames. Eclipse shadow-rites for outcasts. Primary: Vertus (Hope).",
      social: "Light Tiers with social mobility through service. Eclipse integration after Year 7,000. Covenant-Keepers recognized by blue finger-cords.",
      cultural: "Echo-Chambers where whispers travel miles. The Silent Script for sacred texts. Ash-Marking during remembrance days.",
      economical: "Gold Aurei, Silver Tithe Marks, Copper Pilgrim Bits. Tithing system; agricultural surplus from Radiant Marches.",
      physiological: "Light-infused vitality (avg 150 yrs). Shadow fatigue resistance from Eclipse training. Luminescent aura in blessed.",
      territorial: "Northern realm; Radiant Marches (agricultural); City of Eternal Radiance (capital). Echo-Chamber mountains.",
      technological: "Radiance Lances, Beacon Towers, Radiant Walls, Seraph Gliders. Light-based communication systems.",
      military: "Eclipse Legions—'Shadow supports Light'. 50k active / 200k reserve. Radiance Stags, Shadow Wolves, Dawn Eagles."
    },
    primaryNode: "Transcendence",
    secondaryNode: "Pact",
    fatalRisk: "Purity Fervor",
    population: "50 million",
    military: "50k Active / 200k Reserve",
    protector: "Luminara",
    capital: "City of Eternal Radiance"
  },

  chuugoku: {
    name: "Empire of Chuugoku (East)",
    descriptiveName: "Realm of Elements",
    frameworks: {
      historical: "Founded Year 1,200 of 1st Myriad. Five Great Houses established through chi-cultivation mastery. Homura-ke (Fire) traditionally holds Dragon Throne.",
      political: "Dragon Throne (Great Lama + Emperor). Five Great Houses: Homura-ke, Seisui-ke, Iwayama-ke, Hayate-ke, Tamashii-ke. Cadet branch system.",
      mental: "Elemental attunement psychology. Fire: passionate; Water: adaptive; Earth: stubborn; Wind: free; Aether: transcendent. Pathology: Elemental imbalance.",
      spiritual: "Chi-cultivation through Five Elements. Temple blessing system. Dragon worship. Primary: Self (Discipline).",
      social: "House-based hierarchy with merit advancement. Chi-cultivation determines status. Elemental marriages create hybrid lineages.",
      cultural: "Five-element festivals. Dragon dances. Chi-crystal gardens. Elemental dueling as dispute resolution.",
      economical: "Crystal Credits, House Caravan Tokens, Aether Marks. Elemental resource trade: fire-stones, water-pearls, earth-ores, wind-crystals, aether-dust.",
      physiological: "Elemental attunement visible in aura colors. Chi circulation extends lifespan. Elemental sensitivity: feel ley-lines.",
      territorial: "Eastern realm; Five elemental domains (Spark, Mist, Stone, Sky, Aether). Dragon Capital at chi-convergence.",
      technological: "Chi-Foci, Flame Bastions, Wind Snares, Mist Generators. Elemental-powered machinery.",
      military: "House Legions—'Mixed harmony'. 80k active / 400k reserve. Phoenix Riders, Earth Beetles, Chi-Crystal artillery."
    },
    primaryNode: "Self",
    secondaryNode: "World",
    fatalRisk: "House Rivalry",
    population: "80 million",
    military: "80k Active / 400k Reserve",
    protector: "Ryūjin",
    capital: "Dragon Capital"
  },

  avalon: {
    name: "Seven Kingdoms of Avalon (West)",
    descriptiveName: "Realm of Magic",
    frameworks: {
      historical: "Founded Year 1,500 of 1st Myriad. Standing Stones of Glastonbury destroyed Year 7,584. Seven Kingdoms united under High King.",
      political: "High King + Council of Magisters (49 members). Royal Houses → Battlemage Aristocracy → Magisterial Class → Commoners.",
      mental: "Category-based cognition. Five Categories of Magic shape worldview. Pathology: Category Fracture—unable to use other magic types.",
      spiritual: "Fivefold Binding: Incantation, Sorcery, Ritual, Armament, Arcane. Category worship. The Lost (Category 5) as sacred mystery.",
      social: "Magical aptitude determines status. Category academies. Ley-attuned families intermarry. The Lost-bloods revered.",
      cultural: "Standing Stones ceremonies. Ley-line pilgrimages. Category festivals. Arcane duels as art form.",
      economical: "Rune-Coins, Favor Bonds, Artifact Scrip. Ley-crystal trade. Enchanted goods export.",
      physiological: "Mana sensitivity; category attunement. Ley-line resonance visible as glow. Extended lifespan through mana absorption.",
      territorial: "Western realm; Seven Kingdoms; Standing Stones; Ley Nexuses. Tower of Drowning Light (prison).",
      technological: "Ley Wards, Rune Walls, Binding Chains, Tide Circles. Magic-technology integration.",
      military: "Category Battlemages—'Adaptive Categories'. 60k active / 300k reserve. Ley Hounds, Griffins, Arcane artillery."
    },
    primaryNode: "Intuition",
    secondaryNode: "Science",
    fatalRisk: "Category Fracture",
    population: "60 million",
    military: "60k Active / 300k Reserve",
    protector: "Morvoren",
    capital: "Camelot (High King's Seat)"
  },

  helron: {
    name: "Helron State (South)",
    descriptiveName: "Realm of Knowledge",
    frameworks: {
      historical: "Founded Year 1,800 of 1st Myriad. Split from State Systematization over experimental uncertainty. Filwind Institute formed Year 4,385.",
      political: "Triumvirate (Director + President + High Command). Conglomerate Families with certification tiers. Augmentation Sacrament.",
      mental: "Scientific skepticism; doubt as virtue. Pathology: Measurement Trauma—paralysis from too much data. Practice: Null pilgrimages.",
      spiritual: "Wonder Rites; Null pilgrimages; doubt as sacrament. The Unknown worshipped. Primary: Science (Categorization).",
      social: "Cert Tiers—Port-augmented by implant certification. Augmentation determines status. Uncertainty priests.",
      cultural: "Null Chamber pilgrimages. Wonder festivals. Scientific method as meditation. Failure celebration.",
      economical: "Patent Credits (digital), Crystal Credits, Conglomerate Scrip. Research patents. Knowledge economy.",
      physiological: "Implant Adaptation—Serum boosts, neural port integration. Extended lifespan through bio-augmentation.",
      territorial: "Southern realm; Deep Veins; Null Chamber; Research Directorates. Vein Bunkers underground.",
      technological: "Paraformer Arrays, Null Shields, Resonance Towers, Drone-Bats. Mind-machine interface.",
      military: "Augmented Cohorts—'Adaptive uncertainty'. 100k active / 500k reserve. Uncertainty Phreaks, Cyber-Sharks."
    },
    primaryNode: "Science",
    secondaryNode: "Artifice",
    fatalRisk: "Measurement Trauma",
    population: "100 million",
    military: "100k Active / 500k Reserve",
    protector: "Mechanus",
    capital: "Tellerium (Research City)"
  }
};

// Western Factions with 11 Frameworks
const westernFactionsData = {
  centralContinent: {
    name: "Central Continent Factions",
    subFactions: {
      aureliusEmpire: {
        name: "Aurelius Empire",
        period: "Abs. ~12,000 - 16,723",
        description: "Founded by Aurelius the Great. Bloodline legitimacy through divine mandate. Fell due to aristocratic blood-feuds and imperial line extinguishment.",
        capital: "Argos City",
        legacy: "Five Great Houses (Titus, Varus, Marcellus, Cassius, Valerius)"
      },
      legion: {
        name: "The Legion",
        founded: "Abs. 21,325 by Aurelius Augustus Titus",
        description: "Military meritocracy; oath-backed currency. Professional soldiers bound by sacred oaths. Never initiated combat in 5,000 years.",
        structure: "Seven Cohorts; Oath-Registry; Blood-oath binding",
        currency: "Oath-Marks (bronze), Blood-Silver (earned through combat)"
      },
      republic: {
        name: "Republic of Argos",
        period: "Post-Abs. 16,723",
        description: "Coastal democratic traditions. Maritime bills of credit. Senate and Citizen Assemblies.",
        capital: "Argos City",
        government: "Senate + Citizen Assemblies"
      },
      neoImperium: {
        name: "Neo-Imperium",
        period: "Abs. 40,203-49,776",
        description: "Administrative efficiency focus. Second Metaphysical Embargo target. Centralized bureaucracy.",
        fate: "Collapsed under Great Exclusion"
      },
      dominionRepublic: {
        name: "Dominion Republic of Argos",
        proclaimed: "Abs. 51,200",
        firstConsuls: "Valeria Scipio and Marcus Varus",
        synthesis: "Three Traditions: Legion (military meritocracy), Republic (democratic traditions), Neo-Imperium (administrative efficiency)",
        fiveProvinces: ["Varus (Northern)", "Valerius (Eastern)", "Marcellus (Southern)", "Cassius (Western)", "Aurelius (Central)"],
        fiveHouses: ["Titus", "Varus Restored", "Marcellus Confirmed", "Cassius Reforged", "Valerius Reorganized"]
      }
    }
  },

  zhonggouContinent: {
    name: "Zhonggou Continent Factions",
    subFactions: {
      xiDynasty: {
        name: "Xi Dynasty",
        period: "Abs. 20,001 - 20,212",
        description: "Bureaucratic absolutism; perverted cultivation into rigid hierarchy. First Metaphysical Embargo target (Great Decay).",
        capital: "Xiajing",
        fate: "Collapsed under Great Decay; Federation emerged"
      },
      fiveKingdoms: {
        name: "Five Kingdoms Period",
        period: "Post-Abs. 20,212",
        description: "Warring states after Xi collapse. Chu, Qi, Yan, Han, Zhao kingdoms. Eventually unified into Ming."
      },
      mingDynasty: {
        name: "Ming Dynasty",
        period: "Abs. ~25,000 - 49,636",
        description: "Cultivation renaissance. Open to all citizens. Predecessor to Union.",
        capital: "Nanjing",
        legacy: "Seven Great Sects; Four Schools"
      },
      union: {
        name: "The Union",
        proclaimed: "Abs. 49,636",
        firstPM: "Gu Zu",
        government: "Democratic federal republic; cultivation open to all",
        principles: ["Unity through Diversity", "Consent of Governed", "Merit over Birth", "Liberty under Law", "Cultivation for All"],
        sevenSects: ["Mount Tai", "Mount Hua", "Mount Song", "Mount Heng", "Mount Wu", "Mount Qingcheng", "Mount Lu"],
        fourSchools: ["Legalist", "Liberalist", "Spiritualist", "Pragmatist"],
        infrastructure: ["Cloud-Ships", "Thousand-Li Chariots", "Divine Sense Networks", "Dragon Vein Reactors", "Crystal Credits"]
      }
    }
  },

  seventeenArchipelago: {
    name: "Seventeen Archipelago Factions",
    subFactions: {
      oldInstitute: {
        name: "Old Institute (Psionic Studies)",
        period: "Abs. 24,320 - 47,345",
        description: "Scientific/democratic (Round Table Protocol). Paraformer research. Seventeen independent research islands.",
        structure: "Round Table governance; equal voice for all researchers"
      },
      association: {
        name: "Association of Scientific Studies",
        period: "Abs. 24,320 - 47,345",
        description: "Democratic scientific collective. Seventeen Archipelagos of research. Round Table Protocol.",
        legacy: "Academia inherited democratic traditions"
      },
      council: {
        name: "Council of the Arcane",
        period: "Pre-Abs. 47,345",
        description: "Mystical transmission methods. The Lost research. Spirit-Naming traditions.",
        legacy: "Academia inherited mystical methods"
      },
      highTellerium: {
        name: "Tellerium High Society",
        period: "Abs. 47,345 - 49,634",
        description: "Centralized scientific-military dictatorship. Three castes: Luminary, Synthesis, Applied. Weaponized controlled Unbecoming.",
        castes: {
          luminary: "Seven Grand Architects; Guilds of Paraformer Engineers, Genetic Enhancement, Cybernetic Integration, Weapons Development",
          synthesis: "Bridge figures; Science-magic integration",
          applied: "Workers/operators; Cybernetic armies"
        },
        fate: "Defeated in Two-Millennia War; Trials of Tellerium"
      },
      neoMagicInstitute: {
        name: "Neo-Magic Research Institute",
        period: "Abs. 49,634 - Present",
        description: "Reformed synthesis of Science-Intuition-Artifice. Post-war redemption focus.",
        location: "Tellerium-Reformed",
        status: "Carefully monitored by Federation"
      }
    }
  },

  federation: {
    name: "Federation of Sixteen Independent Nations",
    founded: "Abs. 20,212 (3rd Myriad Y212)",
    principle: "Ascending Merit: Wave-Born → Covenant-Keeper → Ethereal-Touched → Star-Crowned → Elder of the Sixteen",
    frameworks: {
      historical: "Founded after Xi Dynasty collapse and Aurelius fragmentation. Treaty of Aethelgard established Principle of Ascending Merit. Great Divide (Abs. 28,223) led to 26,000-year isolation. Two-Millennia War (Abs. 47,502-49,634) tested neutrality.",
      political: "Council of Nations (Rigdun-Kevan) meets biannually. Five Voices (Ethereal priests) hold veto power. Keeper of the Sixteenth is always foreigner (currently Ming Dynasty cultivator).",
      mental: "Five-Fold Way psychology: Vertus (Hope), Minerva (Compassion), Serena (Order), Dionysus (Joy), Morpheus (Memory). Pathology: Anxiety of inadequacy; Covenant Depression.",
      spiritual: "Five Ethereals (Vertus, Minerva, Serena, Dionysus, Morpheus). Sixteenth Mystery = Spirit of Covenant itself. Oath before Flame; Stone-Sleep; Dream-Weaving.",
      social: "Five Ranks: Wave-Born → Covenant-Keeper → Ethereal-Touched → Star-Crowned → Elder. Clan formation requires unanimous consent. Sunset Protocol dissolves moribund lineages.",
      cultural: "Flow of Five (Living Calendar). Concord of Provinces every 10 years. Spiced Weddings (7-14 years). Silent Script (no phonetic component).",
      economical: "Covenant Marks (service hours), Bio-Mana Credits, Star-Silver, Memory-Stones. Reputation Capital and Service Exchange.",
      physiological: "Coastal: olive-bronze skin, robust lungs. Northern (Arctak): pale, wind-hardened. Numenor: elongated (Stone-Sleep). Coral Atolls: blue-green skin, webbed digits.",
      territorial: "Sixteen Nations: Core Triangle (Aethelgard, Portus Mare, Castelmar), Five Isles (Hope, Compassion, Order, Joy, Memory), Resource Archipelago, Frontier Realms.",
      technological: "Wind-Catcher Towers, Soul-Ships, Time-Dilation Fields, Bio-Mana Infusers, Experience Crystals, Distributed Hope Technology.",
      military: "Serene Fleet: Hope-Bringers, Compassion-Vessels, Order-Ships, Joy-Cutters, Memory-Fog. Has not fired in anger since Two-Millennia War."
    },
    sixteenNations: ["Aethelgard (Gwalakdon)", "Portus Mare (Gwandakur)", "Castelmar (Kunodun)", "Isle of Hope (Nemetak)", "Isle of Compassion (Brigak)", "Isle of Order (Rigdon)", "Isle of Joy (Gavos)", "Isle of Memory (Moridon)", "Vineland (Gworak)", "Silver Isle (Argantak)", "Coral Atolls (Korak)", "Numenor (Nemetar)", "Northern Reaches (Arctak)", "Southern Chain (Suludak)", "Eastern Shoals (Oriadak)", "Western Marches (Ocktar)"],
    capitals: "Aethelgard (spiritual), Castelmar (administrative), Portus Mare (commercial)"
  },

  lumeria: {
    name: "Library of Lumeria & Academia",
    library: {
      founded: "Abs. 5,000 by Kronos",
      nature: "Neutral archival institution; repository of all knowledge",
      governance: "Triadic Governance: Prime Librarian, Vice-Chair Internal, Chairman External",
      branchTiers: [
        { tier: "I", name: "Central Nexus", count: 1, example: "Lumeria (Vault of Seeds, Index)" },
        { tier: "II", name: "Grand Archives", count: 8, examples: "Alexandria, Argos Prime, Linzi, Portus, Chengdu, Castra Ferrum, Havenfire, Xeria Memorial" },
        { tier: "III", name: "Provincial Libraries", count: 24, examples: "Lupis-Varus, Valeria, Ying-Chu, Tellerium-Reformed" },
        { tier: "IV", name: "Satellite Stations", count: "100+", examples: "Caravan of Scribes, Floating Archives, Caves of Memory" }
      ],
      twelveCouncils: ["Scribes", "Researchers", "Custodians", "Metallurgy", "Artifacts", "Medical", "Sociological", "Jurisprudence", "Chronomancy", "Agricultural", "Technological", "External Libraries"],
      embargoStages: ["I: Notice (CUSTODIA-AMBER)", "II: Limitation (PRAECIDIO-YELLOW)", "III: Restriction (INTERDICT-ORANGE)", "IV: Embargo (SILENTIUM-RUBRUM)"]
    },
    academia: {
      founded: "Abs. 49,890 by Lucien Jela & Gaius",
      philosophy: "While Library preserves what WAS, Academia cultivates what WILL BE",
      sevenColleges: ["Preservation", "Interpretation", "Acquisition", "Medical Synthesis", "Sociological Studies", "Technological Synthesis", "Chronomancy & Mysteries"],
      fiveTiers: ["Seekers (Apprentice/Qi Gathering)", "Adepts (Journeyman/Foundation)", "Luminaries (Master/Core Formation)", "Rectors (Professor/Spirit Refinement)", "Archons (The 12/Chen Mastery)"],
      twelveArchipelagos: ["Argent Spire", "Hollow Hall", "Vitruvian Athenaeum", "Ocularium", "Unbound Scriptorium", "Cathedral of Doubt", "Ziggurat of Calculation", "Memory Gardens", "Round Table Seminary", "College of Bounded Artifice", "Invisible College", "Sanctuary of Thirteenth Hour"]
    }
  }
};

// Other Realms
const otherRealmsData = {
  meridianThreshold: {
    name: "Meridian Threshold",
    description: "Primary sealing point between Eastern and Western Planes. Gallian's anchor maintains the seal. Critical junction for planar travel.",
    significance: "The boundary-wood; passage between realms",
    guardian: "Gallian (First Guardian)",
    status: "Active seal; weakening for Convergence"
  },

  meridianDomain: {
    name: "Meridian Domain",
    description: "Fourth Lord's Sanctuary. Lucien Jela's retirement location. The Old Tree grows here—last remnant of Wild of Aletheia.",
    significance: "Liminal space between Two Trees; neutral ground",
    inhabitants: "Fourth Lord, Lucien Jela, Eida Jada (Copy XII)",
    features: "The Old Tree, Sanctuary of Eight Paths"
  },

  sanctuary: {
    name: "Sanctuary",
    description: "Domain of the Fourth Persona. Prevents the Two Trees from consuming each other. Place of hidden revelations.",
    significance: "The space between; mystery and magic",
    guardian: "Fourth Lord (Fourth Persona)",
    access: "Wanderer's Path eighth clue leads here"
  },

  theMist: {
    name: "The Mist",
    description: "Domain of the Third Persona. Roots of the Tree. Home of Life Bringers and Death Reapers.",
    significance: "Life and Death; meaning through finitude",
    inhabitants: "Auriel (Life Bringer), Umbra (Death Reaper)",
    feature: "Where souls journey between lives"
  },

  greatForest: {
    name: "Great Forest",
    description: "Domain of the Second Persona. Branches of the Tree. Home of Keepers. Forest of paths.",
    significance: "Knowledge, Time, Space; framework of experience",
    inhabitants: "Keepers (Goldroad, Orientalis, Occidens, Meridionalis, Portalis)",
    feature: "Nexus of Ways; all paths converge here"
  },

  celestialRealm: {
    name: "Celestial Realm",
    description: "Domain of the First Persona. Apex of the Tree. Home of Protectors.",
    significance: "Reality, Energy, Essence; ground of being",
    inhabitants: "Protectors (Luminara, Ryūjin, Morvoren, Mechanus)",
    feature: "Wanderer's Path sixth clue location"
  },

  meadowRealm: {
    name: "Meadow Realm",
    description: "Space between the Two Trees. Blood-River flows here. Last Observer's vigil.",
    significance: "The meeting ground; where Lucius and Lucien reunite",
    guardian: "Last Observer (Aletheia)",
    feature: "Blood-River; preparing for Convergence"
  }
};

// Guardian Domain Sub-factions
const guardianDomainData = {
  overview: {
    name: "Guardian Domain (Arcadia)",
    schoolFounded: "Year 2000, 1st Myriad (Abs. 4,586)",
    orderFounded: "Year 1128, 3rd Myriad (Abs. 23,628)",
    population: "5,000 Cadets",
    military: "10,000 Hybrid Guardians",
    doctrine: "'The center that refuses to become a throne'"
  },

  captainSystem: [
    { rank: "1st", title: "Grand Captain", number: 1, holders: "Gallian, later Lucius" },
    { rank: "2nd", title: "Captain", number: 8, holders: "Eight Division leaders" },
    { rank: "3rd", title: "Lieutenant", number: 8, holders: "Deputy Division leaders" },
    { rank: "4th-23rd", title: "Seated Officers", number: "Variable", holders: "Senior Guardians" },
    { rank: "24th+", title: "Novices", number: "Variable", holders: "Trainees" }
  ],

  eightDivisions: [
    { name: "Division of Transcendence", captain: "Aldric (later replaced)", domain: "Northern Eclipse magic, shadow-casting" },
    { name: "Division of Pact", captain: "Lysandra", domain: "Covenants, treaties, diplomacy" },
    { name: "Division of Self", captain: "Kenji (fallen)", domain: "Eastern chi cultivation, elemental harmony" },
    { name: "Division of Inheritance", captain: "Kael", domain: "Preserving old Guardian techniques" },
    { name: "Division of Science", captain: "Sarin", domain: "Uncertainty projection, paraformer tech" },
    { name: "Division of Intuition", captain: "Veyla", domain: "Arcane magic, the Lost, topology perception" },
    { name: "Division of World", captain: "Seraph", domain: "Defense, Watchers, mapping Dread movements" },
    { name: "Division of Artifice", captain: "Morkai (Drome)", domain: "Weapons, armor, tools, fortifications" }
  ],

  octagram: {
    name: "The Octagram",
    founded: "Abs. 9,590 (2M Y7,007) by Selene of Lux Imperio",
    nature: "Secret organization of harmony in diversity—a current, not a faction",
    purpose: "Preserve capacity for cross-node synthesis; maintain hidden thresholds",
    coreBeliefs: ["'Purity creates vacuums. Relation fills them.'", "'The center holds because it contains all directions.'"],
    grandmasters: [
      { gm: "1st: Selene", tenure: "7007-7345", event: "Founding; wrote Threshold Meditations" },
      { gm: "2nd: Kaelen Whisperwind", tenure: "7345-7583", event: "Edge Protocol; fell at Edge" },
      { gm: "346th: Roushen the Unseen", tenure: "7789-8223", event: "Trained Lucius; transformed into Firmament" },
      { gm: "347th: Ren", tenure: "8223-present", event: "Rebuilt after Inquisitor; dual Watcher" }
    ],
    eyeStages: ["Watcher", "Seer", "Bridge", "Synthesizer", "Harmonizer", "The Open Eye"]
  },

  watchers: {
    name: "The Watchers",
    founded: "Year 8234, 4th Myriad",
    charter: "Watchers' Charter formalized under Accord of Arcadia",
    purpose: "Investigative specialists; monitor threats across realms",
    leader: "Ren of the Violet Eye (First Among Equals)",
    eyeTraining: "Six stages from Watcher to Open Eye (100-200+ years)"
  },

  fiveStarBattalion: {
    name: "5-Star Battalion",
    nature: "Proto-mixed realm anti-incursion force",
    founded: "Late 1st Myriad",
    sealed: "Year 9998, end of 1st Myriad",
    unsealed: "Year 8500, 4th Myriad",
    population: "100,000 (20,000 combat)",
    physiology: "Void-adapted: Grey-tinted skin, golden eyes, extended lifespan (2,000-5,000 years)",
    commanders: ["General Darren Worthstar", "High Seer Nimorak-Voice", "Star-Commander Valeria North-Star", "Star-Commander Kaelen East-Star", "Star-Commander Morvain West-Star", "Star-Commander Tesla South-Star", "Star-Commander Eryx Void-Point"]
  },

  alliedRaces: {
    ethereals: { name: "Ethereals", nodes: "Intuition + World", domain: "Probability navigation", population: "~500,000", abilities: "Phase-shifting, possession, probability weaving", weakness: "Null-field vulnerability" },
    drakes: { name: "Drakes", nodes: "Self + World", domain: "Elemental embodiment", population: "~500,000", abilities: "Fire-breath, crystal scales, aerial combat", weakness: "Low reproduction" },
    mystics: { name: "Mystics", nodes: "Intuition + Transcendence", domain: "Narrative patterns", population: "Unknown", abilities: "Pattern-reading, contract-weakening", weakness: "No military capacity" },
    dromes: { name: "Dromes", nodes: "Artifice + World", domain: "Construction, creation", population: "~2 million", abilities: "Golem legions, crystal growth, forge-craft", weakness: "Light sensitivity" }
  },

  dreadHorde: {
    name: "Dread Horde",
    origin: "Servants of the three Dark Emperors",
    hierarchy: [
      { rank: "1st", title: "Dread General", description: "Intelligent commanders, strategists" },
      { rank: "2nd", title: "Dread Lord", description: "Massive ogre-like creatures" },
      { rank: "3rd", title: "Dread Warrior", description: "Orc-like soldiers" },
      { rank: "4th", title: "Dread Ones", description: "Goblins, arachnids, nagas, satyrs" },
      { rank: "Base", title: "Hollow", description: "Void-touched scouts; reality eroders" }
    ]
  },

  grenlians: {
    name: "The Grenlians",
    description: "Ordered Void manifestations from Eastern Plane. The 'Grey Tide'—structured anti-reality.",
    threat: "Reality erosion through systematic unmaking",
    counter: "5-Star Battalion; Four Realms united defense"
  }
};

// The Unbecoming
const unbecomingData = {
  name: "The Unbecoming",
  description: "Chaotic Plenitude manifestation from Western Plane. The opposite of Grenlians—chaotic rather than ordered void.",
  firstManifestation: "Burning of Xeria (Abs. 47,430)",
    cause: "Attempting to digitize The Lost into Paraformer Arrays",
  nature: "Anti-definition; unmaking through chaotic plenitude",
  manifestations: ["Solar Ghouls", "Stutter-Zones", "Xeria Gap"],
  counter: "Spirit-Naming; Oath Circles; Named Perimeter Lines"
};

// Eight Nodes
const nodesData = [
  { name: "TRANSCENDENCE", pure: "Service, sacrifice, elevation", dark: "TERROR", clue: "Transcendence", realms: "Lux Imperio, Order of the Star" },
  { name: "PACT", pure: "Mutual obligation, oath, covenant", dark: "BINDING", clue: "Shadow", realms: "Order of the Star, Havenfire" },
  { name: "SELF", pure: "Discipline, mastery, awakening", dark: "FORCE", clue: "Breath", realms: "Chuugoku, Root Sanctuary" },
  { name: "INHERITANCE", pure: "Bloodline, tradition, memory", dark: "CURSE", clue: "Depth", realms: "Root Sanctuary, Chuugoku" },
  { name: "SCIENCE", pure: "Categorization, measurement, truth", dark: "MADNESS", clue: "Uncertainty", realms: "Helron, Filwind Institute" },
  { name: "INTUITION", pure: "Pattern recognition, mystery, wonder", dark: "DELUSION", clue: "Absence", realms: "Avalon, Havenfire, Mystics" },
  { name: "WORLD", pure: "Adaptation, elemental resonance, harmony", dark: "CONSUMPTION", clue: "Wind", realms: "Root Sanctuary, Drakes" },
  { name: "ARTIFICE", pure: "Tools, technology, creation", dark: "CORRUPTION", clue: "Center", realms: "Filwind Institute, Dromes" }
];

// Make data available globally
if (typeof window !== 'undefined') {
  window.easternFactionsData = easternFactionsData;
  window.westernFactionsData = westernFactionsData;
  window.otherRealmsData = otherRealmsData;
  window.guardianDomainData = guardianDomainData;
  window.unbecomingData = unbecomingData;
  window.nodesData = nodesData;
}
