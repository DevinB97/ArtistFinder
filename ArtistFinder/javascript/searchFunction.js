// JavaScript code

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('search');

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();
        if (query) {
            handleSearch(query);
        }
    });

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const query = searchInput.value.toLowerCase().trim();
            if (query) {
                handleSearch(query);
            }
        }
    });
});

function handleSearch(query) {
    let url = '';

    if (query.includes('artist')) {
        url = 'Artist.html';
    } else if (query.includes('genre')) {
        url = 'genre.html';
	} else if (query.includes('ariana grande')) {
        url = 'arianagrande.html';
	} else if (query.includes('beyonce')) {
        url = 'beyonce.html';
	} else if (query.includes('bruno mars')) {
        url = 'brunomars.html';	
	} else if (query.includes('chris stapleton')) {
        url = 'chrisstapleton.html';
	} else if (query.includes('nicki minaj')) {
        url = 'nickiminaj.html';
	} else if (query.includes('rihanna')) {
        url = 'rihanna.html';
	} else if (query.includes('taylor swift')) {
        url = 'taylorswift.html';
	} else if (query.includes('tyla')) {
        url = 'tyla.html';	
    } else if (query.includes('events')) {
        url = 'EventsPage.html';
    } else if (query.includes('booking')) {
        url = 'BookingPage.html';
    } else if (query.includes('about')) {
        url = 'About us NexGen Innovations.html';
	} else if (query.includes('about')) {
        url = 'Support.html';	
    } else {
        url = 'notfound.html'; // A page to handle not found queries
    }

    window.location.href = url;
}