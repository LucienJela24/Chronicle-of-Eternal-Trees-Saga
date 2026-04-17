// Eternal Trees Saga Wiki - Application Logic

// Navigation setup
function initNavigation() {
  const desktopNav = document.getElementById('desktopNav');
  const mobileNav = document.getElementById('mobileNav');
  
  if (!desktopNav || !mobileNav) return;
  
  wikiData.navigation.forEach(item => {
    const navItem = `
      <a href="#" onclick="showPage('${item.id}'); return false;" 
         class="nav-link flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 transition"
         data-page="${item.id}">
        <i class="fas ${item.icon} w-5"></i>
        <span>${item.label}</span>
      </a>
    `;
    desktopNav.innerHTML += navItem;
    mobileNav.innerHTML += navItem;
  });
}

// Page navigation
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show selected page
  const targetPage = document.getElementById(`page-${pageId}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }
  
  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('nav-active');
    if (link.dataset.page === pageId) {
      link.classList.add('nav-active');
    }
  });
  
  // Close mobile menu
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.add('-translate-x-full');
  }
  
  // Scroll to top
  window.scrollTo(0, 0);
  
  // Render content if needed
  renderPageContent(pageId);
}

// Render page content based on page ID
function renderPageContent(pageId) {
  switch(pageId) {
    case 'figures':
      renderFigures();
      break;
    case 'places':
      renderPlaces();
      break;
    case 'timeline':
      renderTimeline();
      break;
    case 'events':
      renderEvents();
      break;
    case 'eastern-factions':
      renderEasternFactions();
      break;
    case 'western-factions':
      renderWesternFactions();
      break;
    case 'other-realms':
      renderOtherRealms();
      break;
    case 'octagram':
      renderOctagram();
      break;
    case 'nodes':
      renderNodes();
      break;
    case 'reference':
      renderReference();
      break;
  }
}

// Render Key Figures page
function renderFigures() {
  const container = document.getElementById('figures-content');
  if (!container || container.innerHTML) return;
  
  let html = '';
  
  // Cosmic Entities
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">Cosmic Entities</h2>
      <div class="grid md:grid-cols-2 gap-4">
  `;
  wikiData.figures.cosmic.forEach(entity => {
    html += `
      <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-6 card-hover">
        <h3 class="text-xl font-bold text-slate-200 mb-1">${entity.name}</h3>
        <p class="text-amber-400 text-sm mb-3">${entity.title}</p>
        <p class="text-slate-300 text-sm mb-3">${entity.description}</p>
        <div class="flex flex-wrap gap-2">
          <span class="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">${entity.plane}</span>
          <span class="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">${entity.status}</span>
        </div>
      </div>
    `;
  });
  html += `</div></section>`;
  
  // Five Personas
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">The Five Personas (The Five Lords)</h2>
      <div class="space-y-4">
  `;
  wikiData.figures.fivePersonas.forEach(persona => {
    html += `
      <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-6 card-hover">
        <h3 class="text-xl font-bold text-slate-200 mb-2">${persona.name}</h3>
        <div class="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p class="text-slate-400 mb-1"><span class="text-amber-400">Domain:</span> ${persona.domain}</p>
            <p class="text-slate-400 mb-1"><span class="text-amber-400">Function:</span> ${persona.function}</p>
          </div>
          <div>
            <p class="text-slate-400 mb-1"><span class="text-amber-400">Expression:</span> ${persona.expression}</p>
            <p class="text-slate-400"><span class="text-amber-400">Servants:</span> ${persona.servants}</p>
          </div>
        </div>
      </div>
    `;
  });
  html += `</div></section>`;
  
  // Eastern Guardians
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">Guardians of the Eastern Plane</h2>
      <div class="grid md:grid-cols-2 gap-4">
  `;
  wikiData.figures.easternGuardians.forEach(guardian => {
    html += `
      <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-6 card-hover">
        <h3 class="text-xl font-bold text-slate-200 mb-1">${guardian.name}</h3>
        <p class="text-amber-400 text-sm mb-2">${guardian.title}</p>
        <p class="text-slate-300 text-sm mb-3">${guardian.description}</p>
        <div class="flex flex-wrap gap-2">
          <span class="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">${guardian.era}</span>
          <span class="px-2 py-1 bg-slate-800 text-slate-400 text-xs rounded">${guardian.status}</span>
        </div>
      </div>
    `;
  });
  html += `</div></section>`;
  
  // Dark Emperors
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-red-400">The Dark Emperors</h2>
      <div class="grid md:grid-cols-3 gap-4">
  `;
  wikiData.figures.darkEmperors.forEach(emperor => {
    html += `
      <div class="bg-slate-900/50 border border-red-900/30 rounded-xl p-6 card-hover">
        <h3 class="text-xl font-bold text-slate-200 mb-1">${emperor.name}</h3>
        <p class="text-red-400 text-sm mb-2">${emperor.title}</p>
        <p class="text-slate-400 text-sm mb-1"><span class="text-slate-500">Original:</span> ${emperor.original}</p>
        <p class="text-slate-400 text-sm mb-1"><span class="text-slate-500">Corruption:</span> ${emperor.corruption}</p>
        <p class="text-slate-400 text-sm"><span class="text-slate-500">Fate:</span> ${emperor.fate}</p>
      </div>
    `;
  });
  html += `</div></section>`;
  
  // Western Librarians
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-purple-400">Librarians of Lumeria</h2>
      <div class="space-y-4">
  `;
  wikiData.figures.westernLibrarians.forEach(librarian => {
    html += `
      <div class="bg-slate-900/50 border border-purple-900/30 rounded-xl p-6 card-hover">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <h3 class="text-xl font-bold text-slate-200">${librarian.name}</h3>
          <span class="text-purple-400 text-sm">${librarian.tenure}</span>
        </div>
        <p class="text-slate-400 text-sm mb-2"><span class="text-purple-400">Title:</span> ${librarian.title}</p>
        <p class="text-slate-400 text-sm mb-2"><span class="text-purple-400">Origin:</span> ${librarian.origin}</p>
        <p class="text-slate-400 text-sm mb-2"><span class="text-purple-400">Contribution:</span> ${librarian.contribution}</p>
        <p class="text-slate-400 text-sm"><span class="text-purple-400">Status:</span> ${librarian.status}</p>
      </div>
    `;
  });
  html += `</div></section>`;
  
  // 5-Star Battalion Commanders
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">5-Star Battalion Commanders</h2>
      <div class="grid md:grid-cols-2 gap-4">
  `;
  wikiData.figures.fiveStarBattalion.forEach(cmdr => {
    html += `
      <div class="bg-slate-900/50 border border-amber-900/30 rounded-xl p-6 card-hover">
        <h3 class="text-lg font-bold text-slate-200 mb-1">${cmdr.name}</h3>
        <p class="text-amber-400 text-sm mb-2">${cmdr.title}</p>
        <p class="text-slate-300 text-sm">${cmdr.description}</p>
      </div>
    `;
  });
  html += `</div></section>`;
  
  container.innerHTML = html;
}

// Render Places page
function renderPlaces() {
  const container = document.getElementById('places-content');
  if (!container || container.innerHTML) return;
  
  let html = '';
  
  // Eastern Places
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">Eastern Plane Locations</h2>
      <div class="grid md:grid-cols-2 gap-4">
  `;
  wikiData.places.eastern.forEach(place => {
    html += `
      <div class="bg-slate-900/50 border border-amber-900/30 rounded-xl p-6 card-hover">
        <h3 class="text-xl font-bold text-slate-200 mb-1">${place.name}</h3>
        <p class="text-amber-400 text-sm mb-2">${place.realm}</p>
        <p class="text-slate-300 text-sm mb-3">${place.significance}</p>
        <span class="px-2 py-1 bg-amber-900/30 text-amber-300 text-xs rounded">${place.type}</span>
      </div>
    `;
  });
  html += `</div></section>`;
  
  // Western Places
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-purple-400">Western Plane Locations</h2>
      <div class="grid md:grid-cols-2 gap-4">
  `;
  wikiData.places.western.forEach(place => {
    html += `
      <div class="bg-slate-900/50 border border-purple-900/30 rounded-xl p-6 card-hover">
        <h3 class="text-xl font-bold text-slate-200 mb-1">${place.name}</h3>
        <p class="text-purple-400 text-sm mb-2">${place.region}</p>
        <p class="text-slate-300 text-sm mb-3">${place.significance}</p>
        <span class="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded">${place.type}</span>
      </div>
    `;
  });
  html += `</div></section>`;
  
  // Celestial Places
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-emerald-400">Celestial & Divine Locations</h2>
      <div class="grid md:grid-cols-2 gap-4">
  `;
  wikiData.places.celestial.forEach(place => {
    html += `
      <div class="bg-slate-900/50 border border-emerald-900/30 rounded-xl p-6 card-hover">
        <h3 class="text-xl font-bold text-slate-200 mb-1">${place.name}</h3>
        <p class="text-emerald-400 text-sm mb-2">${place.location}</p>
        <p class="text-slate-300 text-sm mb-3">${place.significance}</p>
        <span class="px-2 py-1 bg-emerald-900/30 text-emerald-300 text-xs rounded">${place.type}</span>
      </div>
    `;
  });
  html += `</div></section>`;
  
  container.innerHTML = html;
}

// Render Timeline page
function renderTimeline() {
  const container = document.getElementById('timeline-content');
  if (!container || container.innerHTML) return;
  
  let html = '';
  
  // Eastern Timeline
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">Eastern Plane Timeline</h2>
      <div class="relative pl-8">
        <div class="timeline-line"></div>
  `;
  wikiData.timeline.eastern.forEach(event => {
    html += `
      <div class="relative mb-6">
        <div class="timeline-dot" style="top: 0.5rem;"></div>
        <div class="bg-slate-900/50 border border-amber-900/30 rounded-xl p-4 ml-4">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="text-amber-400 font-bold">${event.year}</span>
            <span class="px-2 py-0.5 bg-amber-900/30 text-amber-300 text-xs rounded">${event.book}</span>
          </div>
          <p class="text-slate-300">${event.event}</p>
        </div>
      </div>
    `;
  });
  html += `</div></section>`;
  
  // Western Timeline
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-purple-400">Western Plane Timeline</h2>
      <div class="relative pl-8">
        <div class="timeline-line"></div>
  `;
  wikiData.timeline.western.forEach(event => {
    html += `
      <div class="relative mb-6">
        <div class="timeline-dot" style="top: 0.5rem;"></div>
        <div class="bg-slate-900/50 border border-purple-900/30 rounded-xl p-4 ml-4">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="text-purple-400 font-bold">${event.year}</span>
            <span class="px-2 py-0.5 bg-purple-900/30 text-purple-300 text-xs rounded">${event.era}</span>
          </div>
          <p class="text-slate-300">${event.event}</p>
        </div>
      </div>
    `;
  });
  html += `</div></section>`;
  
  container.innerHTML = html;
}

// Render Events page
function renderEvents() {
  const container = document.getElementById('events-content');
  if (!container || container.innerHTML) return;
  
  let html = `
    <section class="mb-12">
      <div class="space-y-6">
  `;
  wikiData.events.forEach(event => {
    html += `
      <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-6 card-hover">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
          <h3 class="text-xl font-bold text-slate-200">${event.name}</h3>
          <span class="text-amber-400 text-sm">${event.year}</span>
        </div>
        <p class="text-slate-300 mb-3">${event.description}</p>
        <p class="text-slate-400 text-sm"><span class="text-amber-400">Significance:</span> ${event.significance}</p>
      </div>
    `;
  });
  html += `</div></section>`;
  
  container.innerHTML = html;
}

// Render Eastern Factions with 11 Frameworks
function renderEasternFactions() {
  const container = document.getElementById('eastern-factions-content');
  if (!container || container.innerHTML) return;
  
  const ef = easternFactionsData;
  let html = '';
  
  // Four Realms
  Object.values(ef).forEach(realm => {
    if (!realm.frameworks) return;
    
    html += `
      <section class="mb-12">
        <div class="bg-slate-900/50 border border-amber-900/30 rounded-xl p-6">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 class="text-2xl font-bold text-amber-400">${realm.name}</h2>
            <span class="text-slate-400">${realm.descriptiveName}</span>
          </div>
          
          <div class="grid md:grid-cols-4 gap-4 mb-6">
            <div class="bg-slate-800/50 rounded-lg p-4">
              <p class="text-slate-400 text-xs uppercase mb-1">Population</p>
              <p class="text-slate-200 font-medium">${realm.population}</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-4">
              <p class="text-slate-400 text-xs uppercase mb-1">Military</p>
              <p class="text-slate-200 font-medium">${realm.military}</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-4">
              <p class="text-slate-400 text-xs uppercase mb-1">Protector</p>
              <p class="text-slate-200 font-medium">${realm.protector}</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-4">
              <p class="text-slate-400 text-xs uppercase mb-1">Capital</p>
              <p class="text-slate-200 font-medium">${realm.capital}</p>
            </div>
          </div>
          
          <div class="mb-6">
            <p class="text-slate-400 text-xs uppercase mb-2">Primary Nodes</p>
            <div class="flex gap-2">
              <span class="px-3 py-1 bg-amber-900/30 text-amber-300 rounded">${realm.primaryNode}</span>
              <span class="px-3 py-1 bg-amber-900/30 text-amber-300 rounded">${realm.secondaryNode}</span>
            </div>
          </div>
          
          <div class="bg-red-900/20 border border-red-900/30 rounded-lg p-4 mb-6">
            <p class="text-red-400 text-xs uppercase mb-1">Fatal Risk</p>
            <p class="text-slate-300">${realm.fatalRisk}</p>
          </div>
          
          <h3 class="text-lg font-bold text-amber-400 mb-4">11 Frameworks</h3>
          <div class="grid md:grid-cols-2 gap-4">
            ${Object.entries(realm.frameworks).map(([key, value]) => `
              <div class="bg-slate-800/30 rounded-lg p-4">
                <p class="text-amber-400 text-xs uppercase mb-1">${key.charAt(0).toUpperCase() + key.slice(1)}</p>
                <p class="text-slate-300 text-sm">${value}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  });
  
  container.innerHTML = html;
}

// Render Western Factions
function renderWesternFactions() {
  const container = document.getElementById('western-factions-content');
  if (!container || container.innerHTML) return;
  
  const wf = westernFactionsData;
  let html = '';
  
  // Central Continent
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-purple-400">Central Continent Factions</h2>
      <div class="space-y-6">
  `;
  Object.values(wf.centralContinent.subFactions).forEach(faction => {
    html += `
      <div class="bg-slate-900/50 border border-purple-900/30 rounded-xl p-6 card-hover">
        <h3 class="text-xl font-bold text-slate-200 mb-2">${faction.name}</h3>
        ${faction.period ? `<p class="text-purple-400 text-sm mb-2">${faction.period}</p>` : ''}
        ${faction.proclaimed ? `<p class="text-purple-400 text-sm mb-2">Proclaimed: ${faction.proclaimed}</p>` : ''}
        <p class="text-slate-300 text-sm mb-3">${faction.description}</p>
        ${faction.capital ? `<p class="text-slate-400 text-sm"><span class="text-purple-400">Capital:</span> ${faction.capital}</p>` : ''}
        ${faction.fiveProvinces ? `<p class="text-slate-400 text-sm"><span class="text-purple-400">Provinces:</span> ${faction.fiveProvinces.join(', ')}</p>` : ''}
      </div>
    `;
  });
  html += `</div></section>`;
  
  // Zhonggou Continent
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-purple-400">Zhonggou Continent Factions</h2>
      <div class="space-y-6">
  `;
  Object.values(wf.zhonggouContinent.subFactions).forEach(faction => {
    html += `
      <div class="bg-slate-900/50 border border-purple-900/30 rounded-xl p-6 card-hover">
        <h3 class="text-xl font-bold text-slate-200 mb-2">${faction.name}</h3>
        ${faction.period ? `<p class="text-purple-400 text-sm mb-2">${faction.period}</p>` : ''}
        ${faction.proclaimed ? `<p class="text-purple-400 text-sm mb-2">Proclaimed: ${faction.proclaimed}</p>` : ''}
        <p class="text-slate-300 text-sm mb-3">${faction.description}</p>
        ${faction.capital ? `<p class="text-slate-400 text-sm"><span class="text-purple-400">Capital:</span> ${faction.capital}</p>` : ''}
        ${faction.sevenSects ? `<p class="text-slate-400 text-sm"><span class="text-purple-400">Seven Sects:</span> ${faction.sevenSects.join(', ')}</p>` : ''}
      </div>
    `;
  });
  html += `</div></section>`;
  
  // Federation
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-purple-400">Federation of Sixteen Nations</h2>
      <div class="bg-slate-900/50 border border-purple-900/30 rounded-xl p-6">
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Founded</p>
            <p class="text-slate-200">${wf.federation.founded}</p>
          </div>
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Capitals</p>
            <p class="text-slate-200 text-sm">${wf.federation.capitals}</p>
          </div>
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Principle</p>
            <p class="text-slate-200 text-sm italic">${wf.federation.principle}</p>
          </div>
        </div>
        
        <h3 class="text-lg font-bold text-purple-400 mb-4">The Sixteen Nations</h3>
        <div class="grid md:grid-cols-4 gap-2 mb-6">
          ${wf.federation.sixteenNations.map(nation => `
            <div class="bg-slate-800/30 rounded p-2 text-center">
              <p class="text-slate-300 text-sm">${nation}</p>
            </div>
          `).join('')}
        </div>
        
        <h3 class="text-lg font-bold text-purple-400 mb-4">11 Frameworks</h3>
        <div class="grid md:grid-cols-2 gap-4">
          ${Object.entries(wf.federation.frameworks).map(([key, value]) => `
            <div class="bg-slate-800/30 rounded-lg p-4">
              <p class="text-purple-400 text-xs uppercase mb-1">${key.charAt(0).toUpperCase() + key.slice(1)}</p>
              <p class="text-slate-300 text-sm">${value}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
  
  // Lumeria
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-purple-400">Library of Lumeria & Academia</h2>
      <div class="bg-slate-900/50 border border-purple-900/30 rounded-xl p-6">
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-bold text-purple-400 mb-4">Library</h3>
            <p class="text-slate-400 text-sm mb-2"><span class="text-purple-400">Founded:</span> ${wf.lumeria.library.founded}</p>
            <p class="text-slate-400 text-sm mb-2"><span class="text-purple-400">Nature:</span> ${wf.lumeria.library.nature}</p>
            <p class="text-slate-400 text-sm mb-2"><span class="text-purple-400">Governance:</span> ${wf.lumeria.library.governance}</p>
            <p class="text-slate-400 text-sm mb-4"><span class="text-purple-400">12 Councils:</span> ${wf.lumeria.library.twelveCouncils.join(', ')}</p>
          </div>
          <div>
            <h3 class="text-lg font-bold text-purple-400 mb-4">Academia</h3>
            <p class="text-slate-400 text-sm mb-2"><span class="text-purple-400">Founded:</span> ${wf.lumeria.academia.founded}</p>
            <p class="text-slate-400 text-sm mb-2"><span class="text-purple-400">Philosophy:</span> ${wf.lumeria.academia.philosophy}</p>
            <p class="text-slate-400 text-sm mb-2"><span class="text-purple-400">7 Colleges:</span> ${wf.lumeria.academia.sevenColleges.join(', ')}</p>
          </div>
        </div>
      </div>
    </section>
  `;
  
  container.innerHTML = html;
}

// Render Other Realms
function renderOtherRealms() {
  const container = document.getElementById('other-realms-content');
  if (!container || container.innerHTML) return;
  
  const or = otherRealmsData;
  let html = '';
  
  // Divine Domains
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-emerald-400">Divine Domains (The Five Personas)</h2>
      <div class="grid md:grid-cols-2 gap-4">
  `;
  
  const divineRealms = [
    { name: or.celestialRealm.name, description: or.celestialRealm.description, significance: or.celestialRealm.significance, guardian: or.celestialRealm.guardian },
    { name: or.greatForest.name, description: or.greatForest.description, significance: or.greatForest.significance, guardian: or.greatForest.inhabitants },
    { name: or.theMist.name, description: or.theMist.description, significance: or.theMist.significance, guardian: or.theMist.inhabitants },
    { name: or.sanctuary.name, description: or.sanctuary.description, significance: or.sanctuary.significance, guardian: or.sanctuary.guardian }
  ];
  
  divineRealms.forEach(realm => {
    html += `
      <div class="bg-slate-900/50 border border-emerald-900/30 rounded-xl p-6 card-hover">
        <h3 class="text-xl font-bold text-emerald-400 mb-2">${realm.name}</h3>
        <p class="text-slate-300 text-sm mb-2">${realm.description}</p>
        <p class="text-slate-400 text-sm mb-2"><span class="text-emerald-400">Significance:</span> ${realm.significance}</p>
        <p class="text-slate-400 text-sm"><span class="text-emerald-400">Guardian:</span> ${realm.guardian}</p>
      </div>
    `;
  });
  html += `</div></section>`;
  
  // Liminal Spaces
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-emerald-400">Liminal Spaces</h2>
      <div class="grid md:grid-cols-3 gap-4">
  `;
  
  const liminalRealms = [
    { name: or.meridianThreshold.name, description: or.meridianThreshold.description, significance: or.meridianThreshold.significance, guardian: or.meridianThreshold.guardian },
    { name: or.meridianDomain.name, description: or.meridianDomain.description, significance: or.meridianDomain.significance, inhabitants: or.meridianDomain.inhabitants },
    { name: or.meadowRealm.name, description: or.meadowRealm.description, significance: or.meadowRealm.significance, guardian: or.meadowRealm.guardian }
  ];
  
  liminalRealms.forEach(realm => {
    html += `
      <div class="bg-slate-900/50 border border-emerald-900/30 rounded-xl p-6 card-hover">
        <h3 class="text-xl font-bold text-emerald-400 mb-2">${realm.name}</h3>
        <p class="text-slate-300 text-sm mb-2">${realm.description}</p>
        <p class="text-slate-400 text-sm mb-2"><span class="text-emerald-400">Significance:</span> ${realm.significance}</p>
        ${realm.guardian ? `<p class="text-slate-400 text-sm"><span class="text-emerald-400">Guardian:</span> ${realm.guardian}</p>` : ''}
        ${realm.inhabitants ? `<p class="text-slate-400 text-sm"><span class="text-emerald-400">Inhabitants:</span> ${realm.inhabitants}</p>` : ''}
      </div>
    `;
  });
  html += `</div></section>`;
  
  container.innerHTML = html;
}

// Render Octagram
function renderOctagram() {
  const container = document.getElementById('octagram-content');
  if (!container || container.innerHTML) return;
  
  const oct = guardianDomainData.octagram;
  let html = `
    <section class="mb-12">
      <div class="bg-slate-900/50 border border-amber-900/30 rounded-xl p-6 mb-8">
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Founded</p>
            <p class="text-slate-200 font-medium">${oct.founded}</p>
          </div>
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Nature</p>
            <p class="text-slate-200 text-sm">${oct.nature}</p>
          </div>
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Purpose</p>
            <p class="text-slate-200 text-sm">${oct.purpose}</p>
          </div>
        </div>
        
        <h4 class="text-lg font-bold text-amber-400 mb-4">Core Beliefs</h4>
        <div class="space-y-2 mb-6">
          ${oct.coreBeliefs.map(belief => `<p class="text-slate-300 text-sm italic">${belief}</p>`).join('')}
        </div>
      </div>
      
      <h4 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">Grandmasters</h4>
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-slate-700">
              <th class="text-left py-2 text-slate-400">Grandmaster</th>
              <th class="text-left py-2 text-slate-400">Tenure</th>
              <th class="text-left py-2 text-slate-400">Notable Event</th>
            </tr>
          </thead>
          <tbody>
            ${oct.grandmasters.map(gm => `
              <tr class="border-b border-slate-800">
                <td class="py-2 text-slate-200">${gm.gm}</td>
                <td class="py-2 text-slate-400">${gm.tenure}</td>
                <td class="py-2 text-slate-400">${gm.event}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      
      <h4 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">Eye Practice Stages</h4>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${oct.eyeStages.map((stage, i) => `
          <div class="bg-slate-900/50 border border-amber-900/30 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl font-bold text-amber-400">${i + 1}</span>
              <h3 class="text-lg font-bold text-slate-200">${stage}</h3>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  
  container.innerHTML = html;
}

// Render Eight Nodes page
function renderNodes() {
  const container = document.getElementById('nodes-content');
  if (!container || container.innerHTML) return;
  
  let html = `
    <section class="mb-12">
      <div class="text-center mb-8">
        <p class="text-slate-400 text-lg">The fundamental framework of reality across both Planes</p>
        <p class="text-slate-500 text-sm mt-2">Each node has pure expression and dark inversion</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
  `;
  
  nodesData.forEach(node => {
    html += `
      <div class="bg-slate-900/50 border border-emerald-900/30 rounded-xl p-6 card-hover">
        <h3 class="text-xl font-bold text-emerald-400 mb-3">${node.name}</h3>
        <div class="space-y-3 text-sm">
          <div>
            <p class="text-emerald-400 text-xs uppercase mb-1">Pure Expression</p>
            <p class="text-slate-300">${node.pure}</p>
          </div>
          <div>
            <p class="text-red-400 text-xs uppercase mb-1">Dark Inversion</p>
            <p class="text-slate-400">${node.dark}</p>
          </div>
          <div>
            <p class="text-amber-400 text-xs uppercase mb-1">Wanderer's Clue</p>
            <p class="text-slate-400">${node.clue}</p>
          </div>
          <div>
            <p class="text-purple-400 text-xs uppercase mb-1">Primary Realms</p>
            <p class="text-slate-400">${node.realms}</p>
          </div>
        </div>
      </div>
    `;
  });
  
  html += `</div></section>`;
  container.innerHTML = html;
}

// Render Reference page
function renderReference() {
  const container = document.getElementById('reference-content');
  if (!container || container.innerHTML) return;
  
  let html = `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">Terminology</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
          <h3 class="text-lg font-bold text-slate-200 mb-3">Eastern Terms</h3>
          <div class="space-y-2 text-sm">
            <p class="text-slate-400"><span class="text-amber-400">The Eye:</span> Perception practice (six stages)</p>
            <p class="text-slate-400"><span class="text-amber-400">Hollow:</span> Void-touched scout</p>
            <p class="text-slate-400"><span class="text-amber-400">Dread:</span> Commander-level Void entity</p>
            <p class="text-slate-400"><span class="text-amber-400">Grenlian:</span> Ordered Void manifestation</p>
            <p class="text-slate-400"><span class="text-amber-400">Firmament:</span> Barrier between existence/non-existence</p>
            <p class="text-slate-400"><span class="text-amber-400">Chi/Qi:</span> Elemental life force</p>
            <p class="text-slate-400"><span class="text-amber-400">Chen:</span> Mastery level of cultivation</p>
          </div>
        </div>
        <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
          <h3 class="text-lg font-bold text-slate-200 mb-3">Western Terms</h3>
          <div class="space-y-2 text-sm">
            <p class="text-slate-400"><span class="text-purple-400">Paraformer:</span> Mind-machine resonance tech</p>
            <p class="text-slate-400"><span class="text-purple-400">Unbecoming:</span> Chaotic Plenitude manifestation</p>
            <p class="text-slate-400"><span class="text-purple-400">Great Divide:</span> Dimensional rift (Abs. 28,223)</p>
            <p class="text-slate-400"><span class="text-purple-400">Metaphysical Embargo:</span> Library's knowledge withdrawal</p>
            <p class="text-slate-400"><span class="text-purple-400">The Silence:</span> Period of divine withdrawal</p>
            <p class="text-slate-400"><span class="text-purple-400">Stutter-Zone:</span> Temporal anomaly</p>
            <p class="text-slate-400"><span class="text-purple-400">The Lost:</span> Category 5 Magic</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-emerald-400">Dating Systems</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-slate-700">
              <th class="text-left py-2 text-slate-400">System</th>
              <th class="text-left py-2 text-slate-400">Epoch</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-slate-800">
              <td class="py-2 text-slate-200">Absolute Year</td>
              <td class="py-2 text-slate-400">(Myriad - 1) × 10,000 + Year</td>
            </tr>
            <tr class="border-b border-slate-800">
              <td class="py-2 text-slate-200">Imperial Years (Aurelius)</td>
              <td class="py-2 text-slate-400">Year 1 = Abs. 10,001</td>
            </tr>
            <tr class="border-b border-slate-800">
              <td class="py-2 text-slate-200">Xi Dynasty Years</td>
              <td class="py-2 text-slate-400">Year 1 = Abs. 20,001</td>
            </tr>
            <tr class="border-b border-slate-800">
              <td class="py-2 text-slate-200">Federation Years</td>
              <td class="py-2 text-slate-400">Abs. 20,212 = Fed. Year 1</td>
            </tr>
            <tr class="border-b border-slate-800">
              <td class="py-2 text-slate-200">Union Years</td>
              <td class="py-2 text-slate-400">Abs. 49,636 = Union Year 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">Recurring Phrases</h2>
      <div class="space-y-4">
        <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-center">
          <p class="text-slate-300 italic">"The Star shines in darkness. The darkness has never overcome it."</p>
        </div>
        <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-center">
          <p class="text-slate-300 italic">"To the space between."</p>
        </div>
        <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-center">
          <p class="text-slate-300 italic">"The center must hold."</p>
        </div>
        <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-center">
          <p class="text-slate-300 italic">"Purity creates vacuums; relation fills them."</p>
        </div>
        <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-center">
          <p class="text-slate-300 italic">"The center holds. For now. For always."</p>
        </div>
      </div>
    </section>
  `;
  
  container.innerHTML = html;
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  
  const menuBtn = document.getElementById('menuBtn');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('-translate-x-full');
    });
  }
  
  if (closeMenu && mobileMenu) {
    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
    });
  }
});
           <div class="bg-slate-800/30 rounded-lg p-4">
              <p class="text-purple-400 font-medium">${ship.class}</p>
              <p class="text-slate-400 text-sm">Patron: ${ship.patron}</p>
              <p class="text-slate-500 text-xs">${ship.function}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
  
  // Union
  const union = wikiData.westernFactions.union;
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-purple-400">The Union</h2>
      <div class="bg-slate-900/50 border border-purple-900/30 rounded-xl p-6">
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Proclaimed</p>
            <p class="text-slate-200 font-medium">${union.proclaimed}</p>
          </div>
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">First Prime Minister</p>
            <p class="text-slate-200 font-medium">${union.firstPrimeMinister}</p>
          </div>
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Government</p>
            <p class="text-slate-200 text-sm">${union.government}</p>
          </div>
        </div>
        
        <h4 class="text-lg font-bold text-purple-400 mb-4">Constitutional Principles</h4>
        <div class="grid md:grid-cols-5 gap-4 mb-6">
          ${union.constitutionalPrinciples.map(principle => `
            <div class="bg-slate-800/30 rounded-lg p-4 text-center">
              <p class="text-slate-300 text-sm">${principle}</p>
            </div>
          `).join('')}
        </div>
        
        <h4 class="text-lg font-bold text-purple-400 mb-4">Modernized Infrastructure</h4>
        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          ${union.modernizedInfrastructure.map(infra => `
            <div class="bg-slate-800/30 rounded-lg p-4">
              <p class="text-slate-300 text-sm">${infra}</p>
            </div>
          `).join('')}
        </div>
        
        <h4 class="text-lg font-bold text-purple-400 mb-4">Seven Great Sects</h4>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-slate-700">
                <th class="text-left py-2 text-slate-400">Sect</th>
                <th class="text-left py-2 text-slate-400">Location</th>
                <th class="text-left py-2 text-slate-400">Cultivation</th>
                <th class="text-left py-2 text-slate-400">School</th>
                <th class="text-left py-2 text-slate-400">Modern Function</th>
              </tr>
            </thead>
            <tbody>
              ${union.sevenGreatSects.map(sect => `
                <tr class="border-b border-slate-800">
                  <td class="py-2 text-slate-200">${sect.name}</td>
                  <td class="py-2 text-slate-400">${sect.location}</td>
                  <td class="py-2 text-slate-400">${sect.cultivation}</td>
                  <td class="py-2 text-slate-400">${sect.school}</td>
                  <td class="py-2 text-slate-400">${sect.modernFunction}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        
        <h4 class="text-lg font-bold text-purple-400 mb-4">Four Schools</h4>
        <div class="grid md:grid-cols-2 gap-4">
          ${union.fourSchools.map(school => `
            <div class="bg-slate-800/30 rounded-lg p-4">
              <p class="text-purple-400 font-medium">${school.name}</p>
              <p class="text-slate-400 text-sm">Founder: ${school.founder}</p>
              <p class="text-slate-500 text-xs">${school.principle}</p>
              <p class="text-slate-500 text-xs">Node: ${school.node}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
  
  // Dominion Republic
  const republic = wikiData.westernFactions.dominionRepublic;
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-purple-400">Dominion Republic of Argos</h2>
      <div class="bg-slate-900/50 border border-purple-900/30 rounded-xl p-6">
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Proclaimed</p>
            <p class="text-slate-200 font-medium">${republic.proclaimed}</p>
          </div>
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">First Consuls</p>
            <p class="text-slate-200 text-sm">${republic.firstConsuls}</p>
          </div>
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Synthesis</p>
            <p class="text-slate-200 text-sm">${republic.synthesis}</p>
          </div>
        </div>
        
        <h4 class="text-lg font-bold text-purple-400 mb-4">Government Structure</h4>
        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          ${republic.governmentStructure.map(item => `
            <div class="bg-slate-800/30 rounded-lg p-4">
              <p class="text-slate-300 text-sm">${item}</p>
            </div>
          `).join('')}
        </div>
        
        <h4 class="text-lg font-bold text-purple-400 mb-4">Five Provinces</h4>
        <div class="grid md:grid-cols-5 gap-4 mb-6">
          ${republic.fiveProvinces.map(province => `
            <div class="bg-slate-800/30 rounded-lg p-4 text-center">
              <p class="text-slate-300 text-sm">${province}</p>
            </div>
          `).join('')}
        </div>
        
        <h4 class="text-lg font-bold text-purple-400 mb-4">Five Great Houses</h4>
        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          ${republic.fiveGreatHouses.map(house => `
            <div class="bg-slate-800/30 rounded-lg p-4">
              <p class="text-purple-400 font-medium">${house.name}</p>
              <p class="text-slate-400 text-sm">Sigil: ${house.sigil}</p>
              <p class="text-slate-500 text-xs">"${house.motto}"</p>
              <p class="text-slate-500 text-xs">${house.role}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
  
  // Institute
  const institute = wikiData.westernFactions.institute;
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-purple-400">Neo-Magic Research Institute</h2>
      <div class="bg-slate-900/50 border border-purple-900/30 rounded-xl p-6">
        <h4 class="text-lg font-bold text-purple-400 mb-4">Evolution</h4>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          ${institute.evolution.map(era => `
            <div class="bg-slate-800/30 rounded-lg p-4">
              <p class="text-purple-400 font-medium">${era.era}</p>
              <p class="text-slate-200 text-sm">${era.name}</p>
              <p class="text-slate-500 text-xs">${era.nature}</p>
            </div>
          `).join('')}
        </div>
        
        <h4 class="text-lg font-bold text-purple-400 mb-4">Trials of Tellerium</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-slate-700">
                <th class="text-left py-2 text-slate-400">Defendant</th>
                <th class="text-left py-2 text-slate-400">Position</th>
                <th class="text-left py-2 text-slate-400">Verdict</th>
                <th class="text-left py-2 text-slate-400">Sentence</th>
              </tr>
            </thead>
            <tbody>
              ${institute.trialsOfTellerium.map(defendant => `
                <tr class="border-b border-slate-800">
                  <td class="py-2 text-slate-200">${defendant.defendant}</td>
                  <td class="py-2 text-slate-400">${defendant.position}</td>
                  <td class="py-2 text-slate-400">${defendant.verdict}</td>
                  <td class="py-2 text-slate-400">${defendant.sentence}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
  
  // Academia
  const academia = wikiData.westernFactions.academia;
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-purple-400">Academia of Lumeria</h2>
      <div class="bg-slate-900/50 border border-purple-900/30 rounded-xl p-6">
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Founded</p>
            <p class="text-slate-200 font-medium">${academia.founded}</p>
          </div>
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Rector Founders</p>
            <p class="text-slate-200 text-sm">${academia.rectorFounders}</p>
          </div>
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Philosophy</p>
            <p class="text-slate-200 text-sm italic">${academia.philosophy}</p>
          </div>
        </div>
        
        <h4 class="text-lg font-bold text-purple-400 mb-4">Seven Grand Colleges</h4>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          ${academia.sevenGrandColleges.map(college => `
            <div class="bg-slate-800/30 rounded-lg p-4">
              <p class="text-purple-400 font-medium">${college.name}</p>
              <p class="text-slate-400 text-sm">Node: ${college.node}</p>
              <p class="text-slate-500 text-xs">${college.function}</p>
              <p class="text-slate-500 text-xs">Method: ${college.method}</p>
            </div>
          `).join('')}
        </div>
        
        <h4 class="text-lg font-bold text-purple-400 mb-4">Five Tiers</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-slate-700">
                <th class="text-left py-2 text-slate-400">Tier</th>
                <th class="text-left py-2 text-slate-400">Western Title</th>
                <th class="text-left py-2 text-slate-400">Eastern Equivalent</th>
                <th class="text-left py-2 text-slate-400">Dual Path Title</th>
              </tr>
            </thead>
            <tbody>
              ${academia.fiveTiers.map(tier => `
                <tr class="border-b border-slate-800">
                  <td class="py-2 text-slate-200">${tier.tier}</td>
                  <td class="py-2 text-slate-400">${tier.western}</td>
                  <td class="py-2 text-slate-400">${tier.eastern}</td>
                  <td class="py-2 text-slate-400">${tier.title}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
  
  // Divine Pantheon
  const pantheon = wikiData.westernFactions.divinePantheon;
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-purple-400">Divine Pantheon</h2>
      
      <h4 class="text-lg font-bold text-purple-400 mb-4">Primordial Eight</h4>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        ${pantheon.primordialEight.map(god => `
          <div class="bg-slate-900/50 border border-purple-900/30 rounded-xl p-4">
            <p class="text-purple-400 font-medium">${god.name}</p>
            <p class="text-slate-400 text-sm">Domain: ${god.domain}</p>
            <p class="text-slate-500 text-xs">${god.titles}</p>
          </div>
        `).join('')}
      </div>
      
      <h4 class="text-lg font-bold text-purple-400 mb-4">Ethereal Five</h4>
      <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        ${pantheon.etherealFive.map(god => `
          <div class="bg-slate-900/50 border border-purple-900/30 rounded-xl p-4">
            <p class="text-purple-400 font-medium">${god.name}</p>
            <p class="text-slate-400 text-sm">Domain: ${god.domain}</p>
            <p class="text-slate-500 text-xs">${god.symbol}</p>
            <p class="text-slate-500 text-xs">${god.temple}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  
  container.innerHTML = html;
}

// Render Octagram page
function renderOctagram() {
  const container = document.getElementById('octagram-content');
  if (container.innerHTML) return;
  
  const oct = wikiData.octagram;
  let html = `
    <section class="mb-12">
      <div class="bg-slate-900/50 border border-amber-900/30 rounded-xl p-6 mb-8">
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Founded</p>
            <p class="text-slate-200 font-medium">${oct.founded}</p>
          </div>
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Founder</p>
            <p class="text-slate-200 font-medium">${oct.founded.split(' by ')[1]}</p>
          </div>
          <div class="bg-slate-800/50 rounded-lg p-4">
            <p class="text-slate-400 text-xs uppercase mb-1">Nature</p>
            <p class="text-slate-200 text-sm">${oct.nature}</p>
          </div>
        </div>
        
        <h4 class="text-lg font-bold text-amber-400 mb-4">Purpose</h4>
        <div class="space-y-2 mb-6">
          ${oct.purpose.split('; ').map(p => `<p class="text-slate-300 text-sm">• ${p}</p>`).join('')}
        </div>
        
        <h4 class="text-lg font-bold text-amber-400 mb-4">Core Beliefs</h4>
        <div class="space-y-2 mb-6">
          ${oct.coreBeliefs.map(belief => `<p class="text-slate-300 text-sm italic">${belief}</p>`).join('')}
        </div>
      </div>
      
      <h4 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">Grandmasters</h4>
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-slate-700">
              <th class="text-left py-2 text-slate-400">Grandmaster</th>
              <th class="text-left py-2 text-slate-400">Tenure</th>
              <th class="text-left py-2 text-slate-400">Myriad</th>
              <th class="text-left py-2 text-slate-400">Notable Event</th>
            </tr>
          </thead>
          <tbody>
            ${oct.grandmasters.map(gm => `
              <tr class="border-b border-slate-800">
                <td class="py-2 text-slate-200">${gm.grandmaster}</td>
                <td class="py-2 text-slate-400">${gm.tenure}</td>
                <td class="py-2 text-slate-400">${gm.myriad}</td>
                <td class="py-2 text-slate-400">${gm.event}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      
      <h4 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">Eye Practice Stages</h4>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        ${oct.eyePractice.map(stage => `
          <div class="bg-slate-900/50 border border-amber-900/30 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl font-bold text-amber-400">${stage.stage}</span>
              <h3 class="text-lg font-bold text-slate-200">${stage.name}</h3>
            </div>
            <p class="text-slate-300 text-sm mb-2">${stage.capability}</p>
            <p class="text-slate-500 text-xs">Time: ${stage.time}</p>
          </div>
        `).join('')}
      </div>
      
      <h4 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">Wanderer's Path (Eight Clues)</h4>
      <div class="relative pl-8">
        <div class="timeline-line"></div>
        ${oct.wanderersPath.map(clue => `
          <div class="relative mb-6">
            <div class="timeline-dot" style="top: 0.5rem;"></div>
            <div class="bg-slate-900/50 border border-amber-900/30 rounded-xl p-4 ml-4">
              <div class="flex flex-wrap items-center gap-2 mb-2">
                <span class="text-amber-400 font-bold">${clue.clue}</span>
                <span class="px-2 py-0.5 bg-amber-900/30 text-amber-300 text-xs rounded">${clue.node}</span>
              </div>
              <p class="text-slate-400 text-sm mb-1"><span class="text-amber-400">Domain:</span> ${clue.domain}</p>
              <p class="text-slate-400 text-sm mb-1"><span class="text-amber-400">Location:</span> ${clue.location}</p>
              <p class="text-slate-400 text-sm"><span class="text-amber-400">Symbol:</span> ${clue.symbol}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
  
  container.innerHTML = html;
}

// Render Eight Nodes page
function renderNodes() {
  const container = document.getElementById('nodes-content');
  if (container.innerHTML) return;
  
  let html = `
    <section class="mb-12">
      <div class="text-center mb-8">
        <p class="text-slate-400 text-lg">The fundamental framework of reality across both Planes</p>
        <p class="text-slate-500 text-sm mt-2">Each node has pure expression and dark inversion</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
  `;
  
  wikiData.nodes.forEach(node => {
    html += `
      <div class="bg-slate-900/50 border border-emerald-900/30 rounded-xl p-6 card-hover">
        <h3 class="text-xl font-bold text-emerald-400 mb-3">${node.name}</h3>
        <div class="space-y-3 text-sm">
          <div>
            <p class="text-emerald-400 text-xs uppercase mb-1">Pure Expression</p>
            <p class="text-slate-300">${node.pureExpression}</p>
          </div>
          <div>
            <p class="text-red-400 text-xs uppercase mb-1">Dark Inversion</p>
            <p class="text-slate-400">${node.darkInversion}</p>
          </div>
          <div>
            <p class="text-amber-400 text-xs uppercase mb-1">Wanderer's Clue</p>
            <p class="text-slate-400">${node.wanderersClue}</p>
          </div>
          <div>
            <p class="text-purple-400 text-xs uppercase mb-1">Primary Realms</p>
            <p class="text-slate-400">${node.primaryRealms}</p>
          </div>
        </div>
        <p class="text-slate-500 text-xs mt-4 italic">${node.description}</p>
      </div>
    `;
  });
  
  html += `</div></section>`;
  container.innerHTML = html;
}

// Render Reference page
function renderReference() {
  const container = document.getElementById('reference-content');
  if (container.innerHTML) return;
  
  let html = '';
  
  // Eastern Terms
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">Eastern Plane Terminology</h2>
      <div class="grid md:grid-cols-2 gap-4">
  `;
  wikiData.reference.easternTerms.forEach(term => {
    html += `
      <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
        <h3 class="text-lg font-bold text-slate-200 mb-1">${term.term}</h3>
        <p class="text-slate-400 text-sm">${term.definition}</p>
      </div>
    `;
  });
  html += `</div></section>`;
  
  // Western Terms
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-purple-400">Western Plane Terminology</h2>
      <div class="grid md:grid-cols-2 gap-4">
  `;
  wikiData.reference.westernTerms.forEach(term => {
    html += `
      <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-4">
        <h3 class="text-lg font-bold text-slate-200 mb-1">${term.term}</h3>
        <p class="text-slate-400 text-sm">${term.definition}</p>
      </div>
    `;
  });
  html += `</div></section>`;
  
  // Dating Systems
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-emerald-400">Dating Systems</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-slate-700">
              <th class="text-left py-2 text-slate-400">System</th>
              <th class="text-left py-2 text-slate-400">Epoch</th>
              <th class="text-left py-2 text-slate-400">Example</th>
            </tr>
          </thead>
          <tbody>
            ${wikiData.reference.datingSystems.map(sys => `
              <tr class="border-b border-slate-800">
                <td class="py-2 text-slate-200">${sys.system}</td>
                <td class="py-2 text-slate-400">${sys.epoch}</td>
                <td class="py-2 text-slate-400">${sys.example}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `;
  
  // Recurring Phrases
  html += `
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6 fantasy-font text-amber-400">Recurring Phrases</h2>
      <div class="space-y-4">
  `;
  wikiData.reference.recurringPhrases.forEach(phrase => {
    html += `
      <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-4 text-center">
        <p class="text-slate-300 italic">${phrase}</p>
      </div>
    `;
  });
  html += `</div></section>`;
  
  container.innerHTML = html;
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  
  const menuBtn = document.getElementById('menuBtn');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
  });
  
  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
  });
});
