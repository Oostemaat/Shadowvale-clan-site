import './styles.css';

const demoEvents = [
  {
    id: 1,
    title: 'ToB Learner Night',
    activity: 'Theatre of Blood',
    host: 'Shadowvale Staff',
    date: '2026-07-10',
    time: '20:00',
    maxPlayers: '5',
    discordLink: '#',
    description: 'Learner-friendly ToB session. Bring basic gear, patience, and voice chat.'
  },
  {
    id: 2,
    title: 'Corp Mass',
    activity: 'Corporeal Beast',
    host: 'Event Team',
    date: '2026-07-12',
    time: '19:30',
    maxPlayers: '20',
    discordLink: '#',
    description: 'Clan Corp mass. Loot rules and world posted in Discord before start.'
  }
];

const storageKey = 'shadowvaleEvents';
const staffKey = 'shadowvaleStaff';
let events = JSON.parse(localStorage.getItem(storageKey)) || demoEvents;
let loggedIn = localStorage.getItem(staffKey) === 'true';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="bg"></div>
  <header class="site-header">
    <a class="brand" href="#home"><span class="crest">⚔</span> Shadowvale</a>
    <button class="mobile-menu" aria-label="Toggle navigation">☰</button>
    <nav id="nav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#ranks">Ranks</a>
      <a href="#pvm">PvM</a>
      <a href="#teaching">Raid Teaching</a>
      <a href="#events">Events</a>
      <a href="#discord">Discord</a>
      <a href="#staff" class="staff-link">Staff</a>
    </nav>
  </header>

  <main>
    <section id="home" class="hero section">
      <div class="hero-card reveal">
        <p class="eyebrow">Old School RuneScape Clan</p>
        <h1>Welcome to <span>Shadowvale</span></h1>
        <p class="hero-text">A PvM-focused OSRS community built around events, raid teaching, achievements, and good clan vibes.</p>
        <div class="hero-actions">
          <a class="btn primary" href="#events">View Events</a>
          <a class="btn" href="#discord">Join Discord</a>
        </div>
      </div>
      <div class="stat-grid reveal">
        <div><strong>Weekly</strong><span>Clan Events</span></div>
        <div><strong>PvM</strong><span>Bossing & Raids</span></div>
        <div><strong>Teachers</strong><span>Learner Friendly</span></div>
      </div>
    </section>

    <section id="about" class="section panel reveal">
      <h2>About Shadowvale</h2>
      <p>Shadowvale is a RuneScape clan for players who enjoy PvM, raids, events, progression, and helping each other improve. Whether you are learning your first raid or hunting collection logs, there is a place for you here.</p>
    </section>

    <section id="ranks" class="section reveal">
      <h2>Clan Ranks</h2>
      <div class="cards">
        <article><h3>Bronze Bar</h3><p>New members joining the clan.</p></article>
        <article><h3>Recruit</h3><p>Earned after 1 month in the clan.</p></article>
        <article><h3>Corporal</h3><p>Earned after 2 months in the clan.</p></article>
        <article><h3>Sergeant</h3><p>Earned after 3 months in the clan.</p></article>
        <article><h3>Special Ranks</h3><p>Infernal, Max Cape, Raid Teacher, Event Coordinator, Clan Recruiter, Top Donator, and more.</p></article>
      </div>
    </section>

    <section id="pvm" class="section panel reveal">
      <h2>PvM & Bossing</h2>
      <div class="cards">
        <article><h3>Bossing</h3><p>Group bosses, learner runs, pet hunts, combat achievements, and clan trips.</p></article>
        <article><h3>Raids</h3><p>Chambers of Xeric, Theatre of Blood, Tombs of Amascut, and learner sessions.</p></article>
        <article><h3>Events</h3><p>Masses, bingo, drop competitions, skill weeks, and special PvM challenges.</p></article>
      </div>
    </section>

    <section id="teaching" class="section reveal">
      <h2>Raid Teaching</h2>
      <div class="cards">
        <article><h3>Chambers of Xeric</h3><p>Learner-friendly CoX runs and team guidance.</p></article>
        <article><h3>Theatre of Blood</h3><p>Structured teaching for ToB roles, rooms, and mechanics.</p></article>
        <article><h3>Tombs of Amascut</h3><p>Invocation progression, gear advice, and team sessions.</p></article>
      </div>
    </section>

    <section id="events" class="section panel reveal">
      <div class="section-head">
        <div>
          <h2>Event Calendar</h2>
          <p>Public events posted by Shadowvale staff.</p>
        </div>
        <button class="btn primary" id="staffJump">Staff Login</button>
      </div>
      <div id="eventList" class="event-list"></div>
    </section>

    <section id="discord" class="section reveal">
      <h2>Discord</h2>
      <div class="discord-box">
        <p>Join the Shadowvale Discord for event signups, clan news, PvM teams, learner raids, and giveaways.</p>
        <a class="btn primary" href="#">Add Discord Invite Here</a>
      </div>
    </section>

    <section id="staff" class="section panel staff-panel reveal">
      <h2>Staff Portal</h2>
      <div id="loginBox" class="login-box">
        <p class="muted">Demo login: <strong>staff</strong> / <strong>shadowvale</strong></p>
        <input id="username" placeholder="Username" autocomplete="username" />
        <input id="password" type="password" placeholder="Password" autocomplete="current-password" />
        <button class="btn primary" id="loginButton">Login</button>
      </div>

      <div id="dashboard" class="dashboard hidden">
        <div class="section-head">
          <h3>Create Event</h3>
          <button class="btn" id="logoutButton">Logout</button>
        </div>
        <form id="eventForm">
          <input id="title" placeholder="Event title" required />
          <input id="activity" placeholder="Boss/activity, e.g. ToB Learner" required />
          <input id="host" placeholder="Host" required />
          <input id="date" type="date" required />
          <input id="time" type="time" required />
          <input id="maxPlayers" type="number" placeholder="Max players" min="1" />
          <input id="discordLink" placeholder="Discord thread/link" />
          <textarea id="description" placeholder="Description, requirements, gear, notes"></textarea>
          <button class="btn primary" type="submit">Publish Event</button>
        </form>
        <div id="adminEvents" class="event-list"></div>
      </div>
    </section>
  </main>

  <footer>© Shadowvale Clan • Built for OSRS community events</footer>
`;

const $ = (selector) => document.querySelector(selector);

function saveEvents() {
  localStorage.setItem(storageKey, JSON.stringify(events));
}

function formatEventDate(event) {
  const date = new Date(`${event.date}T${event.time || '00:00'}`);
  return date.toLocaleString([], {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function eventCard(event, admin = false) {
  return `
    <article class="event-card">
      <div class="event-meta">${formatEventDate(event)} • ${event.activity}</div>
      <h3>${event.title}</h3>
      <p><strong>Host:</strong> ${event.host}${event.maxPlayers ? ` • <strong>Max players:</strong> ${event.maxPlayers}` : ''}</p>
      <p>${event.description || ''}</p>
      <div class="event-actions">
        ${event.discordLink ? `<a class="btn" href="${event.discordLink}" target="_blank" rel="noreferrer">Discord Link</a>` : ''}
        ${admin ? `<button class="btn danger" data-delete-event="${event.id}">Delete</button>` : ''}
      </div>
    </article>`;
}

function sortedEvents() {
  return [...events].sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
}

function renderEvents() {
  const list = $('#eventList');
  if (!events.length) {
    list.innerHTML = '<p class="muted">No events posted yet.</p>';
  } else {
    list.innerHTML = sortedEvents().map((event) => eventCard(event)).join('');
  }
  renderAdminEvents();
}

function renderAdminEvents() {
  const adminList = $('#adminEvents');
  if (!adminList) return;
  adminList.innerHTML = sortedEvents().map((event) => eventCard(event, true)).join('');
}

function updateLogin() {
  $('#loginBox').classList.toggle('hidden', loggedIn);
  $('#dashboard').classList.toggle('hidden', !loggedIn);
  renderAdminEvents();
}

function login() {
  const username = $('#username').value.trim();
  const password = $('#password').value.trim();
  if (username === 'staff' && password === 'shadowvale') {
    loggedIn = true;
    localStorage.setItem(staffKey, 'true');
    updateLogin();
    return;
  }
  alert('Wrong demo login. Use staff / shadowvale');
}

function logout() {
  loggedIn = false;
  localStorage.removeItem(staffKey);
  updateLogin();
}

function deleteEvent(id) {
  events = events.filter((event) => String(event.id) !== String(id));
  saveEvents();
  renderEvents();
}

$('#mobile-menu')?.addEventListener('click', () => $('#nav').classList.toggle('open'));
$('.mobile-menu').addEventListener('click', () => $('#nav').classList.toggle('open'));
$('#staffJump').addEventListener('click', () => { location.hash = 'staff'; });
$('#loginButton').addEventListener('click', login);
$('#logoutButton').addEventListener('click', logout);

$('#eventForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  events.push({
    id: Date.now(),
    title: $('#title').value,
    activity: $('#activity').value,
    host: $('#host').value,
    date: $('#date').value,
    time: $('#time').value,
    maxPlayers: $('#maxPlayers').value,
    discordLink: $('#discordLink').value,
    description: $('#description').value
  });
  saveEvents();
  form.reset();
  renderEvents();
  location.hash = 'events';
});

document.addEventListener('click', (event) => {
  const deleteButton = event.target.closest('[data-delete-event]');
  if (deleteButton) deleteEvent(deleteButton.dataset.deleteEvent);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

renderEvents();
updateLogin();
