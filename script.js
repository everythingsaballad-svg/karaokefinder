
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const city = document.getElementById('city').value.toLowerCase();
    const day = document.getElementById('day').value;
    const results = document.getElementById('results');
    results.innerHTML = '';

    const shows = [
        {
            venue: 'Sing It Lounge',
            address: '123 Main St, Toronto',
            city: 'toronto',
            day: 'Thursday',
            time: '8:00 PM',
            host: 'DJ Melody',
            social: {
                instagram: 'https://instagram.com/djmelody',
                facebook: 'https://facebook.com/djmelody'
            },
            score: 0.92
        },
        {
            venue: 'Harmony Bar',
            address: '456 Queen St, Vancouver',
            city: 'vancouver',
            day: 'Friday',
            time: '9:00 PM',
            host: 'Karaoke King',
            social: {
                instagram: 'https://instagram.com/karaokeking',
                facebook: 'https://facebook.com/karaokeking'
            },
            score: 0.85
        }
    ];

    const filtered = shows.filter(show => show.city === city && show.day === day);
    if (filtered.length === 0) {
        results.innerHTML = '<p>No shows found for your search.</p>';
    } else {
        filtered.forEach(show => {
            const div = document.createElement('div');
            div.className = 'show';
            div.innerHTML = `
                <h3>${show.venue}</h3>
                <p><strong>Address:</strong> ${show.address}</p>
                <p><strong>Day:</strong> ${show.day}</p>
                <p><strong>Time:</strong> ${show.time}</p>
                <p><strong>Host:</strong> ${show.host}</p>
                <p><strong>Up-to-date Score:</strong> ${(show.score * 100).toFixed(0)}%</p>
                <p>
                    <a href="${show.social.instagram}" target="_blank">Instagram</a> |
                    <a href="${show.social.facebook}" target="_blank">Facebook</a>
                </p>
            `;
            results.appendChild(div);
        });
    }
});
