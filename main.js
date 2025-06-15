const images = [
    'assets/img1.png',
    'assets/img2.png',
    'assets/img3.png',
    'assets/img4.png',
    'assets/img5.png'
]

let index = 0;
const viewer = document.getElementById('viewer');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.onclick = () => {
    index = (index - 1 + images.length) % images.length;
    viewer.src = images[index];
}

next.onclick = () => {
    index = (index + 1) % images.length;
    viewer.src = images[index];
}