let audio = document.getElementById('audio');
let playBtn = document.getElementById('play');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let randomBtn = document.getElementById('random');
let playlistDiv = document.getElementById('playlist');

let songs = [
    
    'Bad Bunny Ft. El Alfa El Jefe - Dema Ga Ge Gi Go Gu.mp3',
    'Feliz.mp3',
    'Hola Perdida.mp3',
    'La Gloria.mp3',
    '2k16.mp3',
    '7 locas.mp3',
    'Forever.mp3',
    'Hannah Montana.mp3',
    'Su hora.mp3',
    'Where you are.mp3',
    // Agrega aquí más canciones 
    
]


let currentSongIndex = 0;
let isRandom = false;

function loadSong(songIndex) {
    audio.src = songs[songIndex];
    audio.load();
}

function playSong() {
    audio.play();
    playBtn.textContent = 'Pausar';
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = 'Reproducir';
}

function nextSong() {
    if (isRandom) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(currentSongIndex);
    playSong();
}

function prevSong() {
    if (isRandom) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(currentSongIndex);
    playSong();
}

function toggleRandom() {
    isRandom = !isRandom;
    randomBtn.textContent = isRandom ? 'Secuencial' : 'Aleatorio';
}

// Generar lista de canciones en HTML
songs.forEach((song, index) => {
    let songItem = document.createElement('div');
    songItem.textContent = song;
    songItem.addEventListener('click', () => {
        currentSongIndex = index;
        loadSong(currentSongIndex);
        playSong();
    });
    playlistDiv.appendChild(songItem);
});

// Event listeners
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
randomBtn.addEventListener('click', toggleRandom);