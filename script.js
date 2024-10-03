const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const progressBar = document.getElementById('progress');
const volumeControl = document.getElementById('volume');

let isPlaying = false;

// Play or Pause the audio
playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseButton.innerText = '▶️';
    } else {
        audio.play();
        playPauseButton.innerText = '⏸️';
    }
    isPlaying = !isPlaying;
});

// Update progress bar as the audio plays
audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progressPercent;
});

// Change audio position when seeking
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Volume control
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

// Playlist array
const playlist = [
    {
        title: "Song 1",
        artist: "Artist 1",
        src: "song1.mp3",
        albumArt: "album-art1.jpg"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        src: "song2.mp3",
        albumArt: "album-art2.jpg"
    },
    {
        title: "Song 3",
        artist: "Artist 3",
        src: "song3.mp3",
        albumArt: "album-art3.jpg"
    }
];

// Elements
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const progressBar = document.getElementById('progress');
const volumeControl = document.getElementById('volume');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist');
const albumArt = document.getElementById('album-art');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let currentSongIndex = 0;
let isPlaying = false;

// Load song details
function loadSong(song) {
    songTitle.innerText = song.title;
    artistName.innerText = song.artist;
    audio.src = song.src;
    albumArt.src = song.albumArt;
}

// Play or Pause the audio
playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseButton.innerText = '▶️';
    } else {
        audio.play();
        playPauseButton.innerText = '⏸️';
    }
    isPlaying = !isPlaying;
});

// Update progress bar as the audio plays
audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progressPercent;
});

// Change audio position when seeking
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Volume control
volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

// Next song
nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(playlist[currentSongIndex]);
    audio.play();
    playPauseButton.innerText = '⏸️';
    isPlaying = true;
});

// Previous song
prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(playlist[currentSongIndex]);
    audio.play();
    playPauseButton.innerText = '⏸️';
    isPlaying = true;
});

// Automatically load the first song when the page loads
window.onload = function() {
    loadSong(playlist[currentSongIndex]);
};

