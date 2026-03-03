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
      { time: "~18:30",    text: "<strong>Verzamelen</strong> — aan Campus De Vesten, Herentals, Augustijnenlaan 31" },
      { time: "~19:30",    text: "<strong>Vertrek</strong> — (⏱ ~13 uur) nachtrit naar Pont du Gard, Frankrijk" }
    ]
  },
  {
    title: "Frankrijk en aankomst hotel",
    emoji: "🇫🇷",
    date: "28 maart",
    activities: [
      { time: "~8:00", text: "<strong>Pont du Gard</strong> — Ontbijt (zelf meenemen) en eten op de brug" },
      { time: "~11:30", text: "<strong>Arena van Nîmes</strong> — Bezoek aan een oud amfitheater" },
      { time: "~12:30", text: "<strong>Middagpauze</strong> — Lunchen in Nîmes" },
      { time: "~14:00", text: "<strong>Naar Barcelona</strong> — Dus terug in de bus" },
      { time: "~18:00", text: "<strong>Hotel</strong> — Check-in hotel" },
      { time: "~19:30", text: "<strong>Avondmaal</strong> — Eten in het hotel)" }
    ]
  },
  {
    title: "Titel ontbreekt",
    emoji: "😭",
    date: "29 maart",
    activities: [
      { time: "~8:00", text: "<strong>Ontbijt</strong> — :)" },
      { time: "~10:00", text: "<strong>Hospital de San Pau</strong> — " },
      { time: "~12:00", text: "<strong>Metro</strong> — Zie 'transport' voor meer info" },
      { time: "~14:00", text: "<strong>Gotische wijk</strong> — Fotozoektocht, van Plaza Cataluña tot Plaza Reial" },
      { time: "~16:00", text: "<strong>Metro</strong> — Naar Plaza Espagña, vrije avondmaal" },
      { time: "~20:00", text: "<strong>Hotel</strong> — Terug naar het hotel" }
    ]
  },
  {
    title: "Gaudí-dag",
    emoji: "🏰",
    date: "30 maart",
    activities: [
      { time: "~8:00", text: "<strong>Ontbijt</strong> — :]" },
      { time: "Voormiddag", text: "<strong>Verschillende bezoeken</strong> — 3 groepen volgorde hangt af van de groep:" },
      { time: "", text: "<strong></strong> — La Sagrada Familia binnenin of enkel buitenkant" },
      { time: "", text: "<strong></strong> — Wandeling naar Casa Batlló en casa Mila" },
      { time: "", text: "<strong></strong> — Wandeling naar Plaza Cataluña" },
      { time: "~12:00", text: "<strong>Vrije tijd</strong> — Doe wat je wilt en eet lunch (of niet idc)" },
      { time: "~15:00", text: "<strong>Metro</strong> — Zie 'transport' voor meer info" },
      { time: "~16:00", text: "<strong>Park Guëll</strong> — Groep 1 (vraag me niet wat groep 2 doet terwijl Groep 1 dit doet)" },
      { time: "~16:30", text: "<strong>Park Guëll</strong> — Groep 2" },
      { time: "~17:30", text: "<strong>Busvervaar richting hotel</strong> — Ctrl+C, Ctrl+V" },
      { time: "~19:30", text: "<strong>Avondmaal</strong> — In het hotel" }
    ]
  },
  {
    title: "Geen titel",
    emoji: "🏖️",
    date: "31 maart",
    activities: [
      { time: "~8:00", text: "<strong>Ontbijt</strong> — :>" },
      { time: "~10:00", text: "<strong>Keuze-activiteit</strong> — Camp Nou, Escape game of alternatief programma" },
      { time: "~12:00", text: "<strong>Metro</strong> — Zie 'transport' voor meer info" },
      { time: "~13:00", text: "<strong>Lunch</strong> — metro, lunch, bus 😭" },
      { time: "~14:30", text: "<strong>Bus</strong> — 14.30u - bus pikt groep aan Passeig Joseph Carner, Bustransfer naar Codorniu" },
      { time: "~15:45", text: "<strong>Codorníu</strong> — " },
      { time: "~17:00", text: "<strong>Hotel</strong> — Terug naar het hotel" },
      { time: "~19:30", text: "<strong>Avondmaal</strong> — Eten" }
    ]
  },
  {
    title: "1 april",
    emoji: "🐸",
    date: "1 april",
    activities: [
      { time: "~8:30", text: "<strong>Vertrek naar Girona</strong> — Middagpauze in de buurt van Plaza de la Independencia" },
      { time: "~14:00", text: "<strong>Wandeling</strong> — Langs stadsomwalling en joodse wijk" },
      { time: "~16:30", text: "<strong>Hotel</strong> — Terug naar het hotel" },
      { time: "~19:30", text: "<strong>Avondmaal</strong> — Eten" },
     ]
  },
  {
    title: "Terug naar Herentals",
    emoji: "👋",
    date: "2 april",
    activities: [
      { time: "~8:45", text: "<strong>Ontbijt</strong> =)" },
      { time: "", text: "<strong></strong> — Check-out bage verzamelen in bagageruimte" },
      { time: "~10:00", text: "<strong>Trein</strong> — Zie transport" },
      { time: "~13:00", text: "<strong>Lunch</strong> — Vrije tijd" },
      { time: "~16:30", text: "<strong>Trein</strong> — Door de klant geregeld" },
      { time: "~19:30", text: "<strong>Avondmaal</strong> — In het hotel" },
      { time: "20:00", text: "<strong>Voorbereiding vertrek</strong> — Verzamelen en inladen bus"},
      { time: "~20:30", text: "<strong>Vertrek</strong> — Terug naar herentals" },
,    ]
  },
 {
    title: "Het einde",
    emoji: "👋",
    date: "3 april",
    activities: [
      { time: "~13:00", text: "<strong>Aankomst</strong> Aangekomen in herental" },
   
,    ]
  }
];

// ─── 2. MAP PINS ────────────────────────────────────────────
// ✏️ EDIT: Add real coordinates & descriptions.
//    type: "hotel" | "activity" | "transport"
const mapPins = [
  { lat: 41.3851, lng: 2.1734, type: "hotel",      label: "Hotel (TBD)", desc: "Your hotel — update address here" },
  { lat: 41.4033, lng: 2.1741, type: "Sagrada Familia",   label: "Sagrada Família", desc: "Beschrijving komt hier" },
  { lat: 41.3851, lng: 2.1734, type: "Iets",   label: "Park Güell",       desc: "Park" },
  { lat: 41.3851, lng: 2.1734, type: "Iets",   label: "Gothic Quarter",   desc: "Kerk" },
  { lat: 41.3851, lng: 2.1734, type: "Iets",   label: "AUB WERK",      desc: "Famous." },
  { lat: 41.3851, lng: 2.1734, type: "Iets",   label: "Barcelina",      desc: "Lol" },
  { lat: 41.3851, lng: 2.1734, type: "Iets",   label: "Montjuïc",         desc: "Museum" },
  { lat: 41.3851, lng: 2.1734, type: "Iets",  label: "Het werkt niet",  desc: "trein station" }
];

// ─── 3. CREDITS / CREW ──────────────────────────────────────
// ✏️ EDIT: Add your real names, roles, and emojis!
const crew = [
  { name: "Ruben",  emoji: "🌟", role: "Web design lead",     bio: "Eigenlijk alles dat je hier ziet is van mij" },
  { name: "Axel",  emoji: "🎨", role: "Morale support",   bio: "Idk" },
  { name: "Lowie",  emoji: "📍", role: "Lowie zijn", bio: "Heeft alle frietjes opgegeten" }
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
