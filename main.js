const images = [
    {src: 'assets/img1.png', description: 'This is the starting page of the music app, features a play button, previous and next, search, volume controls, and an all songs view.' },
    {src: 'assets/img2.png', description: 'The search function filters based on characters in song titles.'},
    {src: 'assets/img3.png', description: 'Having no letters showcases the top 3 songs from the list'},
    {src: 'assets/img4.png', description: 'All songs view showcases all available songs, the user can select a song from this list'},
    {src: 'assets/img5.png', description: 'Each song has its own cover image and title.'},
]

let index = 0;
const viewer = document.getElementById('viewer');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const description = document.getElementById('description');

function updateDisplay() {
    viewer.src = images[index].src;
    description.textContent = images[index].description;
}

prev.onclick = () => {
    index = (index - 1 + images.length) % images.length;
    updateDisplay();
}

next.onclick = () => {
    index = (index + 1) % images.length;
    updateDisplay();
}

updateDisplay();