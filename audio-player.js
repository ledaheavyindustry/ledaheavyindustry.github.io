window.onload = function () {
    // Check if the audio is already playing (via localStorage)
    if (localStorage.getItem('musicPlaying') !== 'true') {
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
    } else {
        // If the music is already playing, load the audio
        const audio = document.getElementById('background-audio');
        if (!audio) {
            const newAudio = new Audio('assets/audio/purple.mp3');
            newAudio.loop = true;
            newAudio.autoplay = true;
            newAudio.volume = 0.5;
            newAudio.id = 'background-audio';
            document.body.appendChild(newAudio);
        }
    }
};
