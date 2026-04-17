// Eternal Trees Saga Wiki - Comprehensive Data (Part 1)
const wikiData = {
  navigation: [
    { id: 'home', label: 'Home', icon: 'fa-home' },
    { id: 'figures', label: 'Key Figures', icon: 'fa-users' },
    { id: 'places', label: 'Important Places', icon: 'fa-map-marker-alt' },
    { id: 'timeline', label: 'Timeline', icon: 'fa-clock' },
    { id: 'events', label: 'Key Events', icon: 'fa-star' },
    { id: 'eastern-factions', label: 'Eastern Factions', icon: 'fa-shield-alt' },
    { id: 'western-factions', label: 'Western Factions', icon: 'fa-shield-alt' },
    { id: 'other-realms', label: 'Other Realms', icon: 'fa-globe' },
    { id: 'octagram', label: 'The Octagram', icon: 'fa-star-of-david' },
    { id: 'nodes', label: 'Eight Nodes', icon: 'fa-project-diagram' },
    { id: 'reference', label: 'Reference', icon: 'fa-book' }
  ],

  figures: {
    cosmic: [
      { name: "Endless Seed of Light", title: "Pre-cosmic Source", description: "Self-existent ground of possibility; not god or object.", plane: "Cosmological", status: "Eternal" },
      { name: "Last Observer (Aletheia)", title: "Final Cosmic Witness", description: "Leader of the Observers who planted the Two Trees.", plane: "Cosmological", status: "Eternal" },
      { name: "Cosmarchos", title: "Leader of Dominators", description: "Earlier God of Order; essence became Tree of Order.", plane: "Cosmological", status: "Transformed" },
      { name: "Symphion", title: "Leader of Intervenors", description: "Earlier God of Harmony; essence flows in Blood-River.", plane: "Cosmological", status: "Transformed" }
    ],
    fivePersonas: [
      { name: "First Persona", domain: "Reality, Energy, Essence", function: "Ground of being", expression: "Protectors", servants: "Luminara, Ryūjin, Morvoren, Mechanus" },
      { name: "Second Persona", domain: "Knowledge, Time, Space", function: "Framework of experience", expression: "Keepers", servants: "Goldroad, Orientalis, Occidens, Meridionalis, Portalis" },
      { name: "Third Persona", domain: "Life and Death", function: "Meaning through finitude", expression: "Life Bringers & Death Reapers", servants: "Auriel, Umbra" },
      { name: "Fourth Persona", domain: "Mystery and Magic", function: "Preserves the unknown", expression: "Overseers", servants: "Myrddin, Seren" },
      { name: "Fifth Persona", domain: "Order and Chaos", function: "Engine of becoming", expression: "SEALED", servants: "None" }
    ],
    easternGuardians: [
      { name: "Gallian", title: "First Guardian, Grand Captain", description: "Founded Guardian Order; maintains Meridian Threshold seal.", era: "1st Myriad", status: "Diminished" },
      { name: "Lucius Arogzan", title: "25th Guardian, The Wanderer", description: "Walked eight-clue path; bridge between planes.", era: "3rd-4th Myriad", status: "Meadow Realm" },
      { name: "Seraph", title: "22nd Guardian, Captain of World", description: "Legendary Guardian; Three Legendary Guardians.", era: "3rd-4th Myriad", status: "Active" },
      { name: "Kael", title: "24th Guardian, Captain of Inheritance", description: "Legendary Guardian with blade of frozen light.", era: "3rd-4th Myriad", status: "Active" },
      { name: "Mordecai", title: "23rd Guardian, Captain of Transcendence", description: "Legendary Guardian with scholar's bearing.", era: "3rd-4th Myriad", status: "Active" },
      { name: "Gael", title: "First Watcher", description: "Lucius's student; dissolved into Firmament.", era: "4th-5th Myriad", status: "Dissolved" },
      { name: "Ren", title: "347th Grandmaster of Octagram", description: "Half-Western, half-Aneian; inherited the Eye.", era: "4th-5th Myriad", status: "Active" }
    ],
    darkEmperors: [
      { name: "Tomoyama", original: "Guardian of the East", corruption: "INVERTED SELF + WORLD", title: "Demon Emperor", fate: "Sealed in Tartarus; reformed" },
      { name: "Kross", original: "Guardian of the West", corruption: "INVERTED INTUITION + PACT", title: "Shadow Emperor", fate: "Sealed in Tartarus; reformed" },
      { name: "Marcus", original: "Guardian Associate", corruption: "INVERTED SCIENCE + ARTIFICE", title: "Spawn Emperor", fate: "Sealed in Tartarus; reformed" }
    ],
    westernLibrarians: [
      { name: "Kronos", title: "First Librarian", tenure: "Abs. 5,000-10,000", origin: "Primordial (Time)", contribution: "Founded Library; Chronicle Compact", status: "Retired" },
      { name: "Logos", title: "Second Librarian", tenure: "Abs. 10,001-20,000+", origin: "Primordial (Wisdom)", contribution: "Systematized Index; Neutrality Treaties", status: "Merged with Index" },
      { name: "Zeno", title: "Third Librarian", tenure: "Abs. 20,000-49,780", origin: "Western Plane", contribution: "Created Liberators", status: "Exiled to Xarxas" },
      { name: "Lucien Jela", title: "Fourth Librarian", tenure: "Abs. 20,001-49,663", origin: "Earth (Oxford, 2024)", contribution: "Great Decay; Academia; Embargo", status: "Meridian Domain" },
      { name: "Gaius", title: "Fifth Librarian", tenure: "Abs. 49,662-Present", origin: "Eastern Plane", contribution: "First cross-planar Librarian", status: "Active" }
    ],
    fiveStarBattalion: [
      { name: "General Darren Worthstar", title: "Supreme Commander", description: "Aneian lineage; 3,000 subjective years commander.", status: "Active" },
      { name: "High Seer Nimorak-Voice", title: "Spiritual Authority", description: "Blind; perceives through Nimorak's senses.", status: "Active" },
      { name: "Star-Commander Valeria North-Star", title: "North-Star Vanguard", description: "Lux Imperio lineage; cold-Void combat.", status: "Active" },
      { name: "Star-Commander Kaelen East-Star", title: "East-Star Legion", description: "Chuugoku lineage; dimensional fluidity.", status: "Active" },
      { name: "Star-Commander Morvain West-Star", title: "West-Star Cohort", description: "Avalon lineage; Arcane specialist.", status: "Active" },
      { name: "Star-Commander Tesla South-Star", title: "South-Star Phalanx", description: "Helron lineage; paraformer specialist.", status: "Active" }
    ]
  },

  places: {
    eastern: [
      { name: "Arcadia Isle", realm: "Guardian Domain", significance: "School of Arcadia; Covenant Forge; neutral ground.", type: "Sacred Site" },
      { name: "Meridian Threshold", realm: "Neutral", significance: "Primary sealing point; Gallian's anchor.", type: "Threshold" },
      { name: "Radiant Bastion", realm: "Lux Imperio", significance: "Order of the Star HQ; military-spiritual center.", type: "Fortress" },
      { name: "City of Eternal Radiance", realm: "Lux Imperio", significance: "Capital; Eternal Flame prison.", type: "Capital" },
      { name: "Temple of Whispering Peak", realm: "Chuugoku", significance: "Great Lama's seat; chi-cultivation nexus.", type: "Sacred Site" },
      { name: "Dragon Capital", realm: "Chuugoku", significance: "Temporal capital; Dragon Throne.", type: "Capital" },
      { name: "Standing Stones of Glastonbury", realm: "Avalon", significance: "Sacred categorical anchor; ley nexus.", type: "Sacred Site" },
      { name: "Tower of Drowning Light", realm: "Avalon", significance: "Prison; memory-extraction site.", type: "Prison" },
      { name: "Ley Nexus", realm: "Avalon", significance: "Havenfire Guild HQ; magical convergence.", type: "Guild HQ" },
      { name: "Null Chamber", realm: "Helron", significance: "Natural physics-failure site.", type: "Anomaly" },
      { name: "Vein Bunkers", realm: "Helron", significance: "Filwind Institute HQ; underground labs.", type: "Research" },
      { name: "Depths of Abyss", realm: "Dark Realm", significance: "Destroyer's first manifestation.", type: "Dangerous" },
      { name: "Tartarus", realm: "Beyond Mist", significance: "Prison dimension for Dark Emperors.", type: "Prison" },
      { name: "The Nexus", realm: "Dark Realm", significance: "Dread Horde capital fortress.", type: "Enemy Stronghold" }
    ],
    western: [
      { name: "Lumeria", region: "Library", significance: "Vault of Seeds; Index of All Things.", type: "Library" },
      { name: "Argos City", region: "Dominion Republic", significance: "Capital; former Aurelius Empire capital.", type: "Capital" },
      { name: "Aethelgard", region: "Federation", significance: "Spiritual capital; Eternal Flame of Vertus.", type: "Capital" },
      { name: "Castelmar", region: "Federation", significance: "Administrative capital; Serene Fleet HQ.", type: "Capital" },
      { name: "Portus Mare", region: "Federation", significance: "Commercial capital; banking center.", type: "Capital" },
      { name: "Xiajing", region: "Union", significance: "Former Xi Dynasty capital; largest Western city.", type: "City" },
      { name: "Tellerium", region: "Institute", significance: "Former High Society capital; Neo-Magic Institute.", type: "Research" },
      { name: "Xeria Memorial", region: "Special", significance: "First Unbecoming manifestation.", type: "Memorial" },
      { name: "Meridian Domain", region: "Between Planes", significance: "Fourth Lord's Sanctuary; Lucien's retirement.", type: "Liminal" }
    ],
    celestial: [
      { name: "Celestial Realm", location: "Apex of Tree", significance: "First Persona's domain; Protectors' home.", type: "Divine" },
      { name: "Great Forest", location: "Branches of Tree", significance: "Second Persona's domain; Keepers' home.", type: "Divine" },
      { name: "The Mist", location: "Roots of Tree", significance: "Third Persona's domain; Life/Death Reapers.", type: "Divine" },
      { name: "Sanctuary", location: "Between Trees", significance: "Fourth Persona's domain; prevents consumption.", type: "Divine" },
      { name: "Meadow Realm", location: "Between Planes", significance: "Space between Trees; Blood-River flows.", type: "Liminal" }
    ]
  },

  timeline: {
    eastern: [
      { year: "Pre-Time", event: "Endless Seed; Earlier Gods; Void Wars; Civil War", book: "Book 0" },
      { year: "Abs. 1", event: "Last Observer plants Tree of Order; Ancient Ones bind themselves", book: "Book 0.5" },
      { year: "Abs. 2,586", event: "First Myriad begins; Four Realms formalized", book: "Book 1" },
      { year: "Abs. 3,712", event: "First Hollow breach; Covenant renewed", book: "Book 1" },
      { year: "Abs. 3,735", event: "Order of the Star founded by Celestine", book: "Book 1" },
      { year: "Abs. 3,785", event: "Root Sanctuary founded; dedicated by Kenshiro", book: "Book 1" },
      { year: "Abs. 4,085", event: "Havenfire Guild founded by Thornwood", book: "Book 1" },
      { year: "Abs. 4,385", event: "Filwind Institute founded by Vance", book: "Book 1" },
      { year: "Abs. 4,586", event: "School of Arcadia founded", book: "Book 1" },
      { year: "Abs. 7,585-9,588", event: "War of the Grenlians; 5-Star Battalion sealed", book: "Book 1.5" },
      { year: "Abs. 9,588", event: "Conclave of Shadows; Three guardians corrupted", book: "Book 2" },
      { year: "Abs. 9,590", event: "Octagram founded by Selene", book: "Book 2" },
      { year: "Abs. 23,507", event: "Rite of Balancing; Lucius Arogzan born", book: "Book 3" },
      { year: "Abs. 23,508", event: "Dark Emperors break free", book: "Book 3" },
      { year: "Abs. 23,740", event: "Battle of Nexus; Dark Emperors defeated", book: "Book 3" },
      { year: "Abs. 23,751", event: "Lucius begins Wanderer's Path", book: "Book 4" },
      { year: "Abs. 32,588", event: "IUR founded; 25th Guardian departs Arcadia", book: "Book 5" },
      { year: "Abs. 34,018", event: "Guardian Domain intervenes; Inquisitor arrested", book: "Book 5" },
      { year: "Abs. 34,234", event: "Accord of Arcadia ratified", book: "Book 5" },
      { year: "Abs. 34,430-34,500", event: "Dark Realm-Inquisitor War", book: "Book 6" },
      { year: "Abs. 51,235", event: "The Convergence Approaches", book: "Book 6" }
    ],
    western: [
      { year: "Abs. 1", event: "The Seeding: Tree of Chaos planted; Primordial Eight emerge", era: "1st Myriad" },
      { year: "Abs. 500", event: "First Covenant; Blood-River formed; Ethereal Five emerge", era: "1st Myriad" },
      { year: "Abs. ~2,500", event: "Creation of humanity; founding of Aethelgard", era: "1st Myriad" },
      { year: "Abs. ~4,987", event: "Dr. Lucien George Elder summoned from Earth", era: "1st Myriad" },
      { year: "Abs. 5,000", event: "Kronos establishes Library of Lumeria", era: "1st Myriad" },
      { year: "Abs. 7,500", event: "Logos appointed Second Librarian; systematizes Index", era: "1st Myriad" },
      { year: "Abs. 10,000", event: "Logos merges with Index; The Silence begins", era: "1st-2nd Myriad" },
      { year: "Abs. ~12,000", event: "Aurelius Empire founded; Argos City established", era: "2nd Myriad" },
      { year: "Abs. 16,723", event: "Fall of Aurelius Empire; Imperial line extinguished", era: "2nd Myriad" },
      { year: "Abs. ~15,000", event: "Zeno appointed Third Librarian", era: "2nd Myriad" },
      { year: "Abs. 20,001", event: "Lucien Jela appointed Fourth Librarian; Xi Dynasty founded", era: "3rd Myriad" },
      { year: "Abs. 20,203", event: "Great Decay: First Metaphysical Embargo on Xi Dynasty", era: "3rd Myriad" },
      { year: "Abs. 20,212", event: "Xi Dynasty falls; Federation of Sixteen Nations emerges", era: "3rd Myriad" },
      { year: "Abs. 21,325", event: "The Legion founded by Aurelius Augustus Titus", era: "3rd Myriad" },
      { year: "Abs. 28,223", event: "The Great Divide: Eastern/Western land routes severed", era: "3rd Myriad" },
      { year: "Abs. 39,668-39,675", event: "The Library War: Jurisdictional schism", era: "4th Myriad" },
      { year: "Abs. 40,203", event: "Great Exclusion (Second Metaphysical Embargo)", era: "4th Myriad" },
      { year: "Abs. 47,430", event: "Burning of Xeria: First Unbecoming manifestation", era: "5th Myriad" },
      { year: "Abs. 47,502-49,634", event: "Two-Millennia War: Tellerium vs. United Realms", era: "5th Myriad" },
      { year: "Abs. 49,636", event: "Trials of Tellerium; Union proclaimed", era: "5th Myriad" },
      { year: "Abs. 49,662", event: "Gaius appointed Fifth Librarian", era: "5th Myriad" },
      { year: "Abs. 49,890", event: "Academia of Lumeria founded", era: "5th Myriad" },
      { year: "Abs. 51,200", event: "Dominion Republic of Argos proclaimed", era: "6th Myriad" },
      { year: "Abs. 51,235+", event: "The Convergence Approaches", era: "6th Myriad" }
    ]
  },

  events: [
    { name: "The Void Wars", year: "Before Time", description: "Earlier Gods united to push back the Void from consuming creation.", significance: "Created boundary between existence and non-existence" },
    { name: "The Civil War", year: "Before Time", description: "Dominator/Intervenor war against Observers; Wild of Aletheia destroyed.", significance: "Led to creation of Two Trees and Five Personas" },
    { name: "The Seeding", year: "Abs. 1", description: "Last Observer planted Tree of Order and Tree of Chaos.", significance: "Established Two Planes and Blood-River" },
    { name: "First Covenant", year: "Abs. 500", description: "Primordial Eight and Ethereal Five established divine pact.", significance: "Established divine non-interference" },
    { name: "First Hollow Breach", year: "Abs. 3,712", description: "First Void-touched scouts manifested in Eastern Plane.", significance: "Revealed Grenlian threat" },
    { name: "War of the Grenlians", year: "Abs. 7,585-9,588", description: "Six thousand years of warfare against Ordered Void.", significance: "Three Guardians corrupted into Dark Emperors" },
    { name: "Conclave of Shadows", year: "Abs. 9,588-9,590", description: "Formal alliance between Four Covert Orders and Four Allied Races.", significance: "Unified resistance against Grey Tide" },
    { name: "Rite of Balancing", year: "Abs. 23,507", description: "Performed at Sanctuary of Eight Paths; catastrophically destabilized.", significance: "Birth of the Wanderer" },
    { name: "Dark Emperors' Rise", year: "Abs. 23,508-23,750", description: "Tomoyama, Kross, and Marcus broke free from Tartarus.", significance: "Tested Guardian Order; Lucius's emergence" },
    { name: "Wanderer's Path", year: "Abs. 23,751-23,755", description: "Lucius walked eight-clue spiral path through all realms.", significance: "Lucius received Essence of WILL" },
    { name: "Great Decay", year: "Abs. 20,203", description: "First Metaphysical Embargo imposed on Xi Dynasty.", significance: "Demonstrated Library's power" },
    { name: "The Great Divide", year: "Abs. 28,223", description: "Dimensional rift severed all land transport between Planes.", significance: "Isolated Two Planes for millennia" },
    { name: "Burning of Xeria", year: "Abs. 47,430", description: "First Unbecoming manifestation when digitizing The Lost.", significance: "Revealed chaotic Plenitude threat" },
    { name: "Two-Millennia War", year: "Abs. 47,502-49,634", description: "Tellerium High Society vs. United Realms.", significance: "Led to Trials of Tellerium" },
    { name: "The Convergence", year: "Abs. 51,235+", description: "Three Trees prepare to meet; Lucius and Lucien reunite.", significance: "Boundary between Planes dissolves" }
  ]
};
