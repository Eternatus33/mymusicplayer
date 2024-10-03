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
