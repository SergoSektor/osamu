document.addEventListener("DOMContentLoaded", function() {
    fetch('get_videos.php')
        .then(response => response.json())
        .then(data => {
            const videoList = document.getElementById('video-list');
            data.forEach(video => {
                const videoItem = document.createElement('div');
                videoItem.className = 'video-item';
                videoItem.innerHTML = `
                    <img src="${video['Ссылка на постер фильма']}" alt="${video['Название фильма']}">
                    <h2>${video['Название фильма']}</h2>
                    <p class="description">${video['Краткое описание фильма']}</p>
                    <p class="director"><strong>Режиссер:</strong> ${video['Режиссер']}</p>
                    <p class="year"><strong>Год выхода:</strong> ${video['Год выхода']}</p>
                `;
                videoList.appendChild(videoItem);
            });
        });
});

document.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    const bodyHeight = document.body.scrollHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= bodyHeight) {
        footer.style.bottom = '0';
    } else {
        footer.style.bottom = '-100px';
    }
});
