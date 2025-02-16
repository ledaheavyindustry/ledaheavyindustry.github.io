// audio-player.js

window.onload = function () {
    // Check if the audio is already playing from previous page visit
    if (!localStorage.getItem('musicPlaying')) {
        // If not playing, create the audio element and play it
        const audio = new Audio('assets/audio/purple.mp3');
        audio.loop = true;  // Keep it looping
        audio.autoplay = true;
        audio.volume = 0.5;  // Adjust volume if needed
        audio.id = 'background-audio';

        // Append the audio to the body of the page
        document.body.appendChild(audio);

        // Store the audio status in localStorage
        localStorage.setItem('musicPlaying', 'true');
    }
};
