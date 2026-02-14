/* ═══════════════════════════════════════════════════════════
   BARCELONA TRIP — script.js
   ✏️  All editable data lives at the TOP of this file.
       Each person can own a section — just change the arrays.
   ═══════════════════════════════════════════════════════════ */

// ─── 1. ITINERARY DATA ──────────────────────────────────────
// ✏️ EDIT: Fill in real activities, times, and dates.
//    Each day has: { title, emoji, date, activities: [{time, text}] }
const days = [
  {
    title: "Vertrek",
    emoji: "🚌",
    date: "27 maart",
    activities: [
      { time: "~19:30",    text: "<strong>Vertrek</strong> — (⏱ ~13 uur) busrit naar Pont du Gard, Frankrijk" }
    ]
  },
  {
    title: "Frankrijk en aankomst hotel",
    emoji: "🇫🇷",
    date: "28 maart",
    activities: [
      { time: "'s morgens", text: "<strong>Pont du Gard</strong> — Kijken naar een brug en ontbijten" },
      { time: "'s middags", text: "<strong>Arena van Nîmes</strong> — Amfitheater bekijken + Lunch" },
      { time: "Tijd niet bekend", text: "<strong>Busrit</strong> — Naar Santa Susanna (bijna in Barcelona)" },
      { time: "Avond", text: "<strong>Avondwandeling</strong> — Wandeling in de avond" }
    ]
  },
  {
    title: "Titel ontbreekt",
    emoji: "😭",
    date: "29 maart",
    activities: [
      { time: "Tijd niet bekend", text: "<strong>Aankomst in hotel?</strong> — Hotel??" },
      { time: "NVT", text: "<strong>Hospital San Pau</strong> — " },
      { time: "NVT", text: "<strong>Street art tour</strong> — Neighbourhood of Gràcia" },
      { time: "avond", text: "<strong>Diner</strong> — Tapas eten (restaurant Plâza Espagña" }
    ]
  },
  {
    title: "Gaudí-dag",
    emoji: "🏰",
    date: "30 maart",
    activities: [
      { time: "Voormiddag", text: "<strong>Sagrada Familia</strong> — Café in the Gothic Quarter" },
      { time: "Voormiddag", text: "<strong>Wandeling</strong> — Cassa Batló en Casa Mila" },
      { time: "Namidag", text: "<strong>Park Guëll</strong> — " }
    ]
  },
  {
    title: "Geen titel",
    emoji: "🏖️",
    date: "31 maart",
    activities: [
      { time: "Voormiddag", text: "<strong>Keuze-activiteit</strong> — Camp Nou, Escape game of alternatief programma" },
      { time: "Namiddag", text: "<strong>Codorníu</strong> —" },
      { time: "Avond", text: "<strong>Quiz</strong> — Ja ik weet het: klinkt saai." }
    ]
  },
  {
    title: "1 april",
    emoji: "🐸",
    date: "1 april",
    activities: [
      { time: "Heel de dag?", text: "<strong>Girona</strong> — Grote wandeling. Ja dat is alles op deze dag. Neen het is geen 1 april grap. Ik hoop van wel, want wth is dit :sob:" }
  },
  {
    title: "Geen tijd",
    emoji: "👋",
    date: "2 april",
    activities: [
      { time: "?", text: "<strong>Plaza Cataluña</strong> — Waarom heeft elke naam een accent 😭" },
      { time: "...", text: "<strong>Ramblas</strong> — Nog een wandeling :]" },
      { time: "ABC", text: "<strong>Kabelbaan</strong> — Van Montjuich naar de haven" },
      { time: "Ooit of misschien nooit", text: "<strong>Vrije tijd</strong> — Doe whatever je wilt. Liefst niets illigaal though." },
      { time: "Ochtend", text: "<strong>Avondmaal</strong> — Haha 1 april het is eigenlijk in de avond." },
      { time: "Er was is in een ver land in een vergeten tijd...", text: "<strong>Terugrijs</strong> — terug naar herentals"}
    ]
  },
  {
    title: "Het einde",
    emoji: "👋",
    date: "3 april",
    activities: [
      { time: "?", text: "<strong>Aankomst Herentals</strong> — Het einde van het verhaal"}
    ]
  }
];

// ─── 2. MAP PINS ────────────────────────────────────────────
// ✏️ EDIT: Add real coordinates & descriptions.
//    type: "hotel" | "activity" | "transport"
const mapPins = [
  { lat: 41.3851, lng: 2.1734, type: "hotel",      label: "Hotel (TBD)", desc: "Your hotel — update address here" },
  { lat: 41.4033, lng: 2.1741, type: "activity",   label: "Sagrada Família", desc: "Iconic basilica by Gaudí" },
  { lat: 41.3851, lng: 2.1734, type: "activity",   label: "Park Güell",       desc: "Monumental zone & gardens" },
  { lat: 41.3851, lng: 2.1734, type: "activity",   label: "Gothic Quarter",   desc: "Cathedral & winding streets" },
  { lat: 41.3851, lng: 2.1734, type: "activity",   label: "La Boqueria",      desc: "Famous food market" },
  { lat: 41.3851, lng: 2.1734, type: "activity",   label: "Barceloneta",      desc: "Main city beach" },
  { lat: 41.3851, lng: 2.1734, type: "activity",   label: "Montjuïc",         desc: "Hill with gardens & museums" },
  { lat: 41.3851, lng: 2.1734, type: "transport",  label: "Barcelona Sants",  desc: "Main train station" }
];

// ─── 3. CREDITS / CREW ──────────────────────────────────────
// ✏️ EDIT: Add your real names, roles, and emojis!
const crew = [
  { name: "Person 1",  emoji: "🌟", role: "Trip Leader",     bio: "Organised the itinerary & logistics" },
  { name: "Person 2",  emoji: "🎨", role: "Design & Code",   bio: "Built the website & chose the vibe" },
  { name: "Person 3",  emoji: "📍", role: "Maps & Research", bio: "Found the best spots & transport" }
];


/* ═══════════════════════════════════════════════════════════
   APP LOGIC — you generally don't need to edit below here
   ═══════════════════════════════════════════════════════════ */

// ─── ITINERARY ACCORDION ─────────────────────────────────
function renderDays() {
  const grid = document.getElementById('daysGrid');
  days.forEach((day, i) => {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `
      <div class="day-header" onclick="toggleDay(${i})">
        <div class="day-number">${day.emoji}</div>
        <div class="day-title-wrap">
          <div class="day-title">Dag ${i + 1} — ${day.title}</div>
          <div class="day-date">${day.date}</div>
        </div>
        <div class="day-arrow">▼</div>
      </div>
      <div class="day-body">
        <div class="day-body-inner">
          <ul class="activity-list">
            ${day.activities.map(a => `<li><span class="time">${a.time}</span><span class="desc">${a.text}</span></li>`).join('')}
          </ul>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function toggleDay(index) {
  const cards = document.querySelectorAll('.day-card');
  cards.forEach((c, i) => { if (i !== index) c.classList.remove('open'); });
  cards[index].classList.toggle('open');
}

// ─── MAP (LEAFLET) ───────────────────────────────────────
function initMap() {
  // Centre on Barcelona
  const map = L.map('mapContainer', { center: [41.3874, 2.1686], zoom: 13 });

  // Tile layer (free, no API key needed)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
  }).addTo(map);

  // Colour per type
  const colours = { hotel: '#F0C040', activity: '#A855F7', transport: '#60A5FA' };

  mapPins.forEach(pin => {
    // Custom circle marker
    const marker = L.circleMarker([pin.lat, pin.lng], {
      radius: 9,
      color: colours[pin.type],
      fillColor: colours[pin.type],
      fillOpacity: 0.85,
      weight: 3,
      opacity: 1
    }).addTo(map);

    marker.bindPopup(`<strong style="color:#A855F7">${pin.label}</strong><br><span style="font-size:.85rem;color:#aaa">${pin.desc}</span>`, {
      maxWidth: 200
    });
  });
}

// ─── NAVBAR SCROLL EFFECT ────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// ─── MOBILE MENU ─────────────────────────────────────────
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
}

// ─── PWA INSTALL PROMPT ──────────────────────────────────
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('installBanner').classList.remove('hidden');
});

document.getElementById('installBtn').addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      document.getElementById('installBanner').classList.add('hidden');
    }
    deferredPrompt = null;
  }
});

// ─── CREDITS ─────────────────────────────────────────────
function renderCredits() {
  const grid = document.getElementById('creditsGrid');
  crew.forEach(person => {
    const card = document.createElement('div');
    card.className = 'credit-card';
    card.innerHTML = `
      <div class="credit-avatar">${person.emoji}</div>
      <h3>${person.name}</h3>
      <div class="role">${person.role}</div>
      <p>${person.bio}</p>`;
    grid.appendChild(card);
  });
}

// ─── INIT ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderDays();
  renderCredits();
  initMap();
});
