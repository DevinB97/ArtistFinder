// Events_scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { artist: 'Nicki Minaj', date: '2024-07-01', location: 'New York', venue: 'Madison Square Garden' },
        { artist: 'Ariana Grande', date: '2024-06-20', location: 'Los Angeles', venue: 'Staples Center' },
        { artist: 'Bruno Mars', date: '2024-08-15', location: 'Chicago', venue: 'United Center' },
        // Add more events as needed
    ];

    const eventsList = document.getElementById('events-list');
    const sortSelect = document.getElementById('sort');

    function renderEvents(events) {
        eventsList.innerHTML = '';
        events.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.className = 'event-item';
            eventItem.innerHTML = `
                <h2>${event.artist}</h2>
                <p>${event.date} - ${event.location} at ${event.venue}</p>
                <button onclick="buyTicket('${event.artist}', '${event.date}', '${event.venue}')">Buy Tickets</button>
            `;
            eventItem.addEventListener('click', () => filterByArtist(event.artist));
            eventsList.appendChild(eventItem);
        });
    }

    function sortEvents(criteria) {
        let sortedEvents;
        switch (criteria) {
            case 'date':
                sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case 'location':
                sortedEvents = [...events].sort((a, b) => a.location.localeCompare(b.location));
                break;
            case 'artist':
                sortedEvents = [...events].sort((a, b) => a.artist.localeCompare(b.artist));
                break;
            default:
                sortedEvents = events;
        }
        renderEvents(sortedEvents);
    }

    function filterByArtist(artist) {
        const filteredEvents = events.filter(event => event.artist === artist);
        renderEvents(filteredEvents);
    }

    sortSelect.addEventListener('change', () => {
        sortEvents(sortSelect.value);
    });

    renderEvents(events);
});

function buyTicket(artist, date, venue) {
    alert(`Buying ticket for ${artist} on ${date} at ${venue}`);
}
