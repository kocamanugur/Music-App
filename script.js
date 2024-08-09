let playButton = document.querySelector(".play");
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");
let musicImage = document.getElementById("music-image");
let artist = document.getElementById("artist");
let name = document.getElementById("name");
let music = document.getElementById("music");
let pause = document.getElementById("pause");
let progressBar = document.querySelector(".progress-bar");
let progressArea = document.querySelector(".progress-area");
let Musicduration = document.querySelector(".duration");
let musicCurrentTime = document.querySelector(".current-time");
// let sliderSection = document.querySelector(".slider-section");
// let slider = document.querySelector(".slider");
// let sliderThumb = document.querySelector(".slider-thumb");
// let sliderProgress = document.querySelector(".slider-progress");


let isPlaying = false;
// let previous = 0;
let shuffleMusic = 0;
let fullTime;
window.addEventListener("load", () => {
    let mainADuration = music.duration;
    let totalMin = Math.floor(mainADuration / 60);
    let totalSec = Math.floor(mainADuration % 60);
    if (totalSec < 10) {
        totalSec = `0${totalSec}`;
    }
    Musicduration.innerHTML = `${totalMin}:${totalSec}`;
})
nextButton.addEventListener("click", nextMusic);
previousButton.addEventListener("click", previousMusic);
playButton.addEventListener("click", () => {
    if (isPlaying === false) {
        music.play();
        playButton.style.display = "none";
        pause.style.display = "flex";
        isPlaying = true;
    }
});
pause.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        playButton.style.display = "flex";
        pause.style.display = "none";
        isPlaying = false;
    }
});

music.addEventListener("timeupdate", (e) => {
    let currentTime = e.target.currentTime;
    let duration = e.target.duration;
    let progressBarWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressBarWidth}%`;
    // sliderThumb.style.left =  `${progressBarWidth}%`;

    music.addEventListener("loadeddata", () => {
        let mainADuration = music.duration;
        let totalMin = Math.floor(mainADuration / 60);
        let totalSec = Math.floor(mainADuration % 60);
        if (totalSec < 10) {
            totalSec = `0${totalSec}`;
        }
        Musicduration.innerHTML = `${totalMin}:${totalSec}`;
    })
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        currentSec = `0${currentSec}`;
    }

    musicCurrentTime.innerHTML = `${currentMin}:${currentSec}`;
});

music.addEventListener("ended", () => {
    nextMusic();
});

progressArea.addEventListener("click", (e) => {
    let progressWidth = progressArea.clientWidth;
    let clickedOffSetX = e.offsetX;
    let songDuration = music.duration;

    music.currentTime = (clickedOffSetX / progressWidth) * songDuration;

});

musicList.addEventListener("click", (e) => {
    console.log(e.target.audio)
})

function nextMusic() {
    shuffleMusic++;
    shuffleMusic + 1 > allMusics.length ? shuffleMusic = 0 : shuffleMusic = shuffleMusic;
    music.src = allMusics[shuffleMusic].src;
    musicImage.src = allMusics[shuffleMusic].img;
    artist.innerHTML = allMusics[shuffleMusic].artist;
    name.innerHTML = allMusics[shuffleMusic].name;
    music.play();
    playButton.style.display = "none";
    pause.style.display = "flex";
    isPlaying = true;
}

function previousMusic() {
    shuffleMusic--;
    shuffleMusic < 0 ? shuffleMusic = allMusics.length - 1 : shuffleMusic = shuffleMusic;
    music.src = allMusics[shuffleMusic].src;
    musicImage.src = allMusics[shuffleMusic].img;
    artist.innerHTML = allMusics[shuffleMusic].artist;
    name.innerHTML = allMusics[shuffleMusic].name;
    music.play();
    playButton.style.display = "none";
    pause.style.display = "flex";
    isPlaying = true;
}
