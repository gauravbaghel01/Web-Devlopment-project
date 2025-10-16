// // HTML Elements
// const progress = document.getElementById('progress');
// const seekbar = document.getElementById('seekbar');
// const playbtn = document.getElementById('play-btn');
// const prevbtn = document.getElementById('prev-btn');
// const nextbtn = document.getElementById('next-btn');
// const volumeprogress = document.getElementById('volume-progress');
// const volumeseekbar = document.getElementById('volume-seekbar');
// const timetodisplay = document.getElementById('time-display');
// const timeduration = document.getElementById('time-duration');

// // Songs List
// const songs = [
//     { ele: new Audio('ishq.mp3'), audioname: 'ishq' },
//     { ele: new Audio('Jo tum mere ho.mp3'), audioname: 'Jo tum mere ho' },
//     { ele: new Audio('toota taara.mp3'), audioname: 'toota taara' },
//     { ele: new Audio('samay.mp3'), audioname: 'Samay' },
//     { ele: new Audio('ek.mp3'), audioname: 'Ek' }
// ];

// // Variables for Current State
// let current = 0; // Index of the current song
// let currentsong = songs[current].ele; // Currently playing song

// // Function to Update the Seek Bar
// const updateSeekBar = () => {
//     // Update the seek bar width as the song plays
//     currentsong.ontimeupdate = () => {
//         const progressWidth = (100 * currentsong.currentTime / currentsong.duration) + "%";
//         progress.style.width = progressWidth;
//     };

//     // Allow seeking by clicking on the seek bar
//     seekbar.onclick = (e) => {
//         const seekPosition = (e.offsetX / seekbar.offsetWidth) * currentsong.duration;
//         currentsong.currentTime = seekPosition;
//     };
// };

// // Play/Pause Functionality
// const playPauseSong = () => {
//     if (currentsong.paused) {
//         currentsong.play();
//         playbtn.className = "far fa-pause-circle";
//     } else {
//         currentsong.pause();
//         playbtn.className = "fas fa-play-circle";
//     }
// };

// // Function to Update the Current Song
// // Function to Update the Current Song
// const updatesong = (action) => {
//     currentsong.pause(); // Pause the current song
//     currentsong.currentTime = 0; // Reset current song to the beginning

//     if (action === "next") {
//         current = (current + 1) % songs.length; // Move to the next song (loop to start if at the end)
//     } else if (action === "prev") {
//         current = (current - 1 + songs.length) % songs.length; // Move to the previous song (loop to the end if at the start)
//     }

//     currentsong = songs[current].ele; // Update the current song
//     currentsong.addEventListener('timeupdate', updateCurrentTime)
//     // Ensure the metadata event is triggered for the new song
//     currentsong.onloadedmetadata = () => { 
//         const durationInSeconds = currentsong.duration; 

//         // Update the displayed duration
//         const minutes = Math.floor(durationInSeconds / 60);
//         const seconds = Math.floor(durationInSeconds % 60).toString().padStart(2, '0');
//         timeduration.textContent = `${minutes}:${seconds}`;
//     };

//     currentsong.load(); // Force load the new song metadata

//     updateSeekBar(); // Reinitialize the seek bar for the new song
//     currentsong.play(); // Play the new song automatically
//     playbtn.className = "far fa-pause-circle"; // Update the play button to the "pause" state
//     updateVolumeProgress(currentsong.volume);
// };


// // Event Listeners
// playbtn.addEventListener('click', () => {
//     currentsong.volume=0.5
//     playPauseSong();
// });

// nextbtn.addEventListener('click', () => {
//     updatesong("next");
// });


// window.addEventListener('keydown', (e) => {
//     if(e.key==='ArrowRight') updatesong("next");
// });

// prevbtn.addEventListener('click', () => {
//     updatesong("prev");
// });


// window.addEventListener('keydown',(e)=>{
//       if(e.key==='ArrowLeft') updatesong("prev");
// })

// // Keyboard Controls for Play/Pause
// window.addEventListener('keydown', (e) => {
//     if (e.key === " " || e.code === "Space" || e.keyCode === 32){
//         playPauseSong();
//     }
// });

// window.addEventListener('keydown', (e) => {
//     console.log(e.key);
//     if (e.key === 'ArrowUp') {
//         {if(currentsong.volume<1)
//             currentsong.volume = Math.min(currentsong.volume + 0.01, 1); // Ensure volume does not exceed 1
//             updateVolumeProgress(currentsong.volume); // Update the volume progress bar
//         }
//     }
//     if (e.key === 'ArrowDown') {
//          {  
//             if(currentsong.volume>0)
//             currentsong.volume = Math.max(currentsong.volume - 0.01, 0); // Ensure volume does not go below 0
//             updateVolumeProgress(currentsong.volume); // Update the volume progress bar
//         }
//     }
// });

// // Initialize the Seek Bar for the First Song
// updateSeekBar();

// // Volume seekbar
// const updateVolumeProgress = (volumevalue) => {
//     volumeprogress.style.width = (volumevalue * 100) + "%";
//     currentsong.volume = volumevalue;
// };

// volumeseekbar.onclick = (e) => {
//     const volumevalue = (e.offsetX / volumeseekbar.offsetWidth);
//     updateVolumeProgress(volumevalue);
// };

// // timer display
// const updateCurrentTime = () => {
//     const currenttime = currentsong.currentTime;
//     const minute = Math.floor(currenttime / 60);
//     const seconds = Math.floor(currenttime % 60);
//     timetodisplay.textContent = `${minute}:${seconds.toString().padStart(2, '0')}`;
// };

// currentsong.addEventListener('timeupdate', updateCurrentTime);

// currentsong.onloadedmetadata = function () {
//     const durationInSeconds = currentsong.duration;
//     const minutes = Math.floor(durationInSeconds / 60);
//     const seconds = Math.floor(durationInSeconds % 60).toString().padStart(2, '0');
//     timeduration.textContent = `${minutes}:${seconds}`;
// };


// window.addEventListener('keydown', function(e) {
//     if (['ArrowUp', 'ArrowDown'].indexOf(e.key) > -1) {
//       e.preventDefault();
//     }
//   });

// HTML Elements
const progress = document.getElementById('progress');
const seekbar = document.getElementById('seekbar');
const playbtn = document.getElementById('play-btn');
const prevbtn = document.getElementById('prev-btn');
const nextbtn = document.getElementById('next-btn');
const volumeprogress = document.getElementById('volume-progress');
const volumeseekbar = document.getElementById('volume-seekbar');
const timetodisplay = document.getElementById('time-display');
const timeduration = document.getElementById('time-duration');

// Songs List
const songs = [
    { ele: new Audio('ishq.mp3'), audioname: 'ishq' },
    { ele: new Audio('Jo tum mere ho.mp3'), audioname: 'Jo tum mere ho' },
    { ele: new Audio('toota taara.mp3'), audioname: 'toota taara' },
    { ele: new Audio('samay.mp3'), audioname: 'Samay' },
    { ele: new Audio('ek.mp3'), audioname: 'Ek' }
];

// Variables for Current State
let current = 0; // Index of the current song
let currentsong = songs[current].ele; // Currently playing song

// Function to Update the Seek Bar
const updateSeekBar = () => {
    // Update the seek bar width as the song plays
    currentsong.ontimeupdate = () => {
        const progressWidth = (100 * currentsong.currentTime / currentsong.duration) + "%";
        progress.style.width = progressWidth;
    };

    // Allow seeking by clicking on the seek bar
    seekbar.onclick = (e) => {
        const seekPosition = (e.offsetX / seekbar.offsetWidth) * currentsong.duration;
        currentsong.currentTime = seekPosition;
    };
};

// Play/Pause Functionality
const playPauseSong = () => {
    if (currentsong.paused) {
        currentsong.play();
        playbtn.className = "far fa-pause-circle";
    } else {
        currentsong.pause();
        playbtn.className = "fas fa-play-circle";
    }
};

// Function to Update the Volume Progress
const updateVolumeProgress = (volumevalue) => {
    volumeprogress.style.width = (volumevalue * 100) + "%";
    currentsong.volume = volumevalue;
};

// Function to Update the Current Song
const updatesong = (action) => {
    currentsong.pause(); // Pause the current song
    currentsong.currentTime = 0; // Reset current song to the beginning

    if (action === "next") {
        current = (current + 1) % songs.length; // Move to the next song (loop to start if at the end)
    } else if (action === "prev") {
        current = (current - 1 + songs.length) % songs.length; // Move to the previous song (loop to the end if at the start)
    }

    currentsong = songs[current].ele; // Update the current song
    currentsong.addEventListener('timeupdate', updateCurrentTime);

    // Ensure the metadata event is triggered for the new song
    currentsong.onloadedmetadata = () => { 
        const durationInSeconds = currentsong.duration; 

        // Update the displayed duration
        const minutes = Math.floor(durationInSeconds / 60);
        const seconds = Math.floor(durationInSeconds % 60).toString().padStart(2, '0');
        timeduration.textContent = `${minutes}:${seconds}`;
    };

    currentsong.load(); // Force load the new song metadata

    updateSeekBar(); // Reinitialize the seek bar for the new song
    currentsong.play(); // Play the new song automatically
    playbtn.className = "far fa-pause-circle"; // Update the play button to the "pause" state
    updateVolumeProgress(currentsong.volume); // Update the volume progress bar to match the new song
};

// Event Listeners
playbtn.addEventListener('click', () => {
    currentsong.volume = 0.5;
    playPauseSong();
});

nextbtn.addEventListener('click', () => {
    updatesong("next");
});

prevbtn.addEventListener('click', () => {
    updatesong("prev");
});

// Keyboard Controls for Navigation and Play/Pause
window.addEventListener('keydown', (e) => {
    if (e.key === " " || e.code === "Space" || e.keyCode === 32){
        playPauseSong();
    } else if (e.key === 'ArrowRight') {
        updatesong("next");
    } else if (e.key === 'ArrowLeft') {
        updatesong("prev");
    }
});

// Volume Controls using Arrow Keys
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        if (currentsong.volume < 1) {
            const newVolume = Math.min(currentsong.volume + 0.01, 1); // Ensure volume does not exceed 1
            updateVolumeProgress(newVolume); // Update the volume progress bar
        }
    } else if (e.key === 'ArrowDown') {
        if (currentsong.volume > 0) {
            const newVolume = Math.max(currentsong.volume - 0.01, 0); // Ensure volume does not go below 0
            updateVolumeProgress(newVolume); // Update the volume progress bar
        }
    }
});

// Prevent default behavior of Arrow Up and Arrow Down keys
window.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown'].indexOf(e.key) > -1) {
        e.preventDefault();
    }
});

// Initialize the Seek Bar for the First Song
updateSeekBar();

// Volume Seekbar Click Event
volumeseekbar.onclick = (e) => {
    const volumevalue = (e.offsetX / volumeseekbar.offsetWidth);
    updateVolumeProgress(volumevalue);
};

// Timer Display
const updateCurrentTime = () => {
    const currenttime = currentsong.currentTime;
    const minute = Math.floor(currenttime / 60);
    const seconds = Math.floor(currenttime % 60).toString().padStart(2, '0');
    timetodisplay.textContent = `${minute}:${seconds}`;
};

currentsong.addEventListener('timeupdate', updateCurrentTime);

currentsong.onloadedmetadata = function () {
    const durationInSeconds = currentsong.duration;
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60).toString().padStart(2, '0');
    timeduration.textContent = `${minutes}:${seconds}`;
};

