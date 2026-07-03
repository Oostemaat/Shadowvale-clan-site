import { getEvents, saveEvents, renderEventList } from './events.js';

const staffKey = 'shadowvaleStaff';
let loggedIn = localStorage.getItem(staffKey) === 'true';

const $ = (selector) => document.querySelector(selector);

function updateLogin() {
  $('#loginBox')?.classList.toggle('hidden', loggedIn);
  $('#dashboard')?.classList.toggle('hidden', !loggedIn);
  renderEventList('#adminEvents', true);
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
  const events = getEvents().filter((event) => String(event.id) !== String(id));
  saveEvents(events);
  renderEventList('#adminEvents', true);
}

$('#loginButton')?.addEventListener('click', login);
$('#logoutButton')?.addEventListener('click', logout);

$('#eventForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const events = getEvents();
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
  saveEvents(events);
  form.reset();
  renderEventList('#adminEvents', true);
});

document.addEventListener('click', (event) => {
  const deleteButton = event.target.closest('[data-delete-event]');
  if (deleteButton) deleteEvent(deleteButton.dataset.deleteEvent);
});

updateLogin();
