export const storageKey = 'shadowvaleEvents';

export const demoEvents = [
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

export function getEvents() {
  return JSON.parse(localStorage.getItem(storageKey)) || demoEvents;
}

export function saveEvents(events) {
  localStorage.setItem(storageKey, JSON.stringify(events));
}

export function sortedEvents(events = getEvents()) {
  return [...events].sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
}

export function formatEventDate(event) {
  const date = new Date(`${event.date}T${event.time || '00:00'}`);
  return date.toLocaleString([], {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
  });
}

export function eventCard(event, admin = false) {
  return `
    <article class="event-card">
      <div class="event-meta">${formatEventDate(event)} • ${event.activity}</div>
      <h3>${event.title}</h3>
      <p><strong>Host:</strong> ${event.host}${event.maxPlayers ? ` • <strong>Max players:</strong> ${event.maxPlayers}` : ''}</p>
      <p>${event.description || ''}</p>
      <div class="event-actions">
        ${event.discordLink ? `<a class="btn" href="${event.discordLink}">Discord Link</a>` : ''}
        ${admin ? `<button class="btn danger" data-delete-event="${event.id}">Delete</button>` : ''}
      </div>
    </article>
  `;
}

export function renderEventList(targetSelector = '#eventList', admin = false) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  const events = sortedEvents();
  target.innerHTML = events.length ? events.map((event) => eventCard(event, admin)).join('') : '<p class="muted">No events posted yet.</p>';
}
