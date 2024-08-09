let playButton = document.querySelector(".play");
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");
let musicImage = document.getElementById("music-image");
let artist = document.getElementById("artist");
let songName = document.getElementById("name");
let music = document.getElementById("music");
let pause = document.getElementById("pause");
let progressBar = document.querySelector(".progress-bar");
let progressArea = document.querySelector(".progress-area");
let Musicduration = document.querySelector(".duration");
let musicCurrentTime = document.querySelector(".current-time");
let listBtn = document.querySelector(".header-button.song-list");
let closeBtn = document.getElementById("close");

let musicIndex = 1;
let queueCheck = false;
let queueList = [];
let queueIndex = 0;
let lastMusic;
let protectIndex = 1;
let deneme;

window.addEventListener("load", () => {
    loadMusic(musicIndex);
});
playButton.addEventListener("click", () => {
    playMusic();
});
pause.addEventListener("click", () => {
    pauseMusic();
});
nextButton.addEventListener("click", nextMusic);
previousButton.addEventListener("click", previousMusic);
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
progressArea.addEventListener("click", (e) => {
    let progressWidth = progressArea.clientWidth;
    let clickedOffSetX = e.offsetX;
    let songDuration = music.duration;
    music.currentTime = (clickedOffSetX / progressWidth) * songDuration;
    playMusic();
});
music.addEventListener("ended", () => {
    if (queueCheck) {
        if (repeatBtn.classList.contains("is-repeating")) {
            music.currentTime = 0;
            playMusic();
        }
        else {
            if (queueList.length <= 0) {
                if (shuffleBtn.classList.contains("is-shuffled")) {
                    let randIndex = Math.floor(Math.random() * allMusics.length + 1);
                    while (musicIndex == randIndex) {
                        randIndex = Math.floor(Math.random() * allMusics.length + 1);
                    }
                    musicIndex = randIndex;
                    queueList.splice(0);
                    queueIndex = 0;
                    queueCheck = false;
                    loadMusic(musicIndex);
                    playMusic();
                }
                else {
                    // musicIndex = queueList[queueList.length - 1] + 1;
                    // musicIndex > allMusics.length ? musicIndex = 1 : musicIndex = musicIndex;
                    musicIndex = lastMusic + 1;
                    musicIndex > allMusics.length ? musicIndex = 1 : musicIndex = musicIndex;
                    console.log(musicIndex);
                    queueList.splice(0);
                    queueIndex = 0;
                    queueCheck = false;
                    loadMusic(musicIndex);
                    playMusic();
                }

            }
            else {
                loadMusic(queueList[queueIndex]);
                musicIndex = queueList[queueIndex];
                playMusic();
                // queueIndex++;
                queueList.splice(0, 1);
                queueArr.splice(0, 1);
                createQueueItem();
            }

        }
    }
    else if (repeatBtn.classList.contains("is-repeating")) {
        music.currentTime = 0;
        playMusic();
    }
    else if (shuffleBtn.classList.contains("is-shuffled")) {
        let randIndex = Math.floor(Math.random() * allMusics.length + 1);
        while (musicIndex == randIndex) {
            randIndex = Math.floor(Math.random() * allMusics.length + 1);
        }
        musicIndex = randIndex;
        loadMusic(musicIndex);
        playMusic();
    }
    else {
        nextMusic();
    }
});
listBtn.addEventListener("click", () => {
    musicList.classList.toggle("toggle");
});



function playMusic() {
    allMusicList.forEach((song, index) => {
        if (musicIndex == index + 1) {
            song.classList.add("beat");
            console.log(musicIndex)
        }
        else {
            song.classList.remove("beat");
        }
    });
    music.play();
    playButton.style.display = "none";
    pause.style.display = "flex";
    deneme = musicIndex;
}

function pauseMusic() {
    allMusicList.forEach((song, index) => {
        if (musicIndex == index + 1) {
            song.classList.remove("beat");
        }
    });
    music.pause();
    playButton.style.display = "flex";
    pause.style.display = "none";

}

function nextMusic() {
    if (queueCheck) {
        if (repeatBtn.classList.contains("is-repeating")) {
            music.currentTime = 0;
            playMusic();
        }
        else {
            if (queueList.length <= 0) {
                if (shuffleBtn.classList.contains("is-shuffled")) {
                    let randIndex = Math.floor(Math.random() * allMusics.length + 1);
                    while (musicIndex == randIndex) {
                        randIndex = Math.floor(Math.random() * allMusics.length + 1);
                    }
                    musicIndex = randIndex;
                    queueList.splice(0);
                    queueIndex = 0;
                    queueCheck = false;
                    loadMusic(musicIndex);
                    playMusic();
                }
                else {
                    // musicIndex = queueList[queueList.length - 1] + 1;
                    // musicIndex > allMusics.length ? musicIndex = 1 : musicIndex = musicIndex;
                    musicIndex = lastMusic + 1;
                    musicIndex > allMusics.length ? musicIndex = 1 : musicIndex = musicIndex;
                    // console.log(musicIndex); BAKABİLİRİM
                    queueList.splice(0);
                    queueIndex = 0;
                    queueCheck = false;
                    loadMusic(musicIndex);
                    playMusic();
                }

            }
            else {
                loadMusic(queueList[queueIndex]);
                musicIndex = queueList[queueIndex];
                playMusic();
                // queueIndex++;
                queueList.splice(0, 1);
                queueArr.splice(0, 1);
                createQueueItem();
            }

        }
    }

    else if (repeatBtn.classList.contains("is-repeating")) {
        music.currentTime = 0;
        playMusic();
    }
    else if (shuffleBtn.classList.contains("is-shuffled")) {
        let randIndex = Math.floor(Math.random() * allMusics.length + 1);
        while (musicIndex == randIndex) {
            randIndex = Math.floor(Math.random() * allMusics.length + 1);
        }
        musicIndex = randIndex;
        loadMusic(musicIndex);
        playMusic();
    }

    else {
        musicIndex++;
        musicIndex > allMusics.length ? musicIndex = 1 : musicIndex = musicIndex;
        loadMusic(musicIndex);
        playMusic();
        protectIndex = musicIndex;
    }
}

function previousMusic() {
    if (music.currentTime > 3) {
        music.currentTime = 0;
        playMusic();
    }
    else {
        musicIndex--;
        musicIndex < 1 ? musicIndex = allMusics.length : musicIndex = musicIndex;
        loadMusic(musicIndex);
        playMusic();
    }
}

function loadMusic(index) {
    songName.innerText = allMusics[index - 1].name;
    artist.innerText = allMusics[index - 1].artist;
    musicImage.src = allMusics[index - 1].img;
    music.src = allMusics[index - 1].src;
    music.addEventListener("loadeddata", () => {
        let mainADuration = music.duration;
        let totalMin = Math.floor(mainADuration / 60);
        let totalSec = Math.floor(mainADuration % 60);
        if (totalSec < 10) {
            totalSec = `0${totalSec}`;
        }
        Musicduration.innerHTML = `${totalMin}:${totalSec}`;
    });
}

let repeatBtn = document.getElementById("repeat");
let shuffleBtn = document.getElementById("shuffle");
repeatBtn.addEventListener("click", () => {
    let nameOfClass = repeatBtn.classList;
    if (nameOfClass.contains("is-repeating")) {
        nameOfClass.remove("is-repeating");
        repeatBtn.setAttribute("title", "Tekrarlamayı etkinleştir.");

    }
    else {
        nameOfClass.add("is-repeating");
        repeatBtn.setAttribute("title", "Tekrarlamayı kapat.");
    }
});
shuffleBtn.addEventListener("click", () => {
    let nameOfClass = shuffleBtn.classList;
    if (nameOfClass.contains("is-shuffled")) {
        nameOfClass.remove("is-shuffled");
        shuffleBtn.setAttribute("title", "Karışık çalmayı etkinleştir.");

    }
    else {
        nameOfClass.add("is-shuffled");
        shuffleBtn.setAttribute("title", "Karışık çalmayı kapat.");
    }
});

let popup = document.querySelector(".popup");
let allMusicList = document.querySelectorAll(".music-class");
let allQueueBtn = document.querySelectorAll("#queue-btn");
allMusicList.forEach((song, index) => {
    song.addEventListener("click", () => {
        // musicIndex = index + 1;
        // queueList.push(musicIndex);
        // console.log(queueList);
        // queueCheck = true;
        musicIndex = index + 1;
        protectIndex = musicIndex;
        loadMusic(musicIndex);
        musicList.classList.toggle("toggle");
        playMusic();
    });
});
let musicQueueIndex;
allQueueBtn.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {

        if (index + 1 === queueList[queueList.length - 1]) {
            alert("Aynı şarkıyı tekrar ekleyemezsiniz.");
        }
        else {
            // console.log(protectIndex); BAKABİLİRİM
            musicQueueIndex = index + 1;
            queueList.push(musicQueueIndex);
            // console.log(queueList); BAKABİLİRİM
            lastMusic = index + 1;
            let name = e.target.parentElement.childNodes[0].childNodes[2].childNodes[0].innerText,
                artist = e.target.parentElement.childNodes[0].childNodes[2].childNodes[1].innerText;
            getQueueItem(name, artist);
            createQueueItem();
            queueCheck = true;
            popup.style.opacity = "1";
            setTimeout(() => {
                popup.style.opacity = "0";

            }, 1500);
        }
    });
});


let volumeSlider = document.getElementById("volume-slider");
let volumeIcon = document.querySelector(".volume-icon");
let volumeValue;
function customvolumeSlider() {
    music.volume = volumeSlider.value / 100;
    if (music.volume === 0) {
        volumeIcon.innerHTML = '<ion-icon name="volume-mute-outline"></ion-icon>';
    }
    else if (music.volume >= 0.7) {
        volumeIcon.innerHTML = '<ion-icon name="volume-high-outline"></ion-icon>';

    }
    else if (music.volume >= 0.2 && music.volume <= 0.7) {
        volumeIcon.innerHTML = '<ion-icon name="volume-medium-outline"></ion-icon>';

    }
    else if (music.volume > 0 && music.volume <= 0.2) {
        volumeIcon.innerHTML = '<ion-icon name="volume-low-outline"></ion-icon>';

    }
    volumeValue = music.volume * 100;
}
customvolumeSlider();
volumeSlider.addEventListener("input", customvolumeSlider);
volumeIcon.addEventListener("click", () => {
    if (music.volume != 0) {
        volumeIcon.innerHTML = '<ion-icon name="volume-mute-outline"></ion-icon>';
        volumeSlider.value = 0;
        music.volume = 0;
    }
    else {
        volumeIcon.innerHTML = '<ion-icon name="volume-high-outline"></ion-icon>';
        volumeSlider.value = volumeValue;
        music.volume = volumeValue / 100;
    }
});

let queueMusicList = document.querySelector(".queue-music-list");
let musicListContainer = document.querySelector(".music-list-container");
let queueArr = [];
closeBtn.addEventListener("click", () => {
    musicListContainer.classList.toggle("toggle-queue-list");
});
function getQueueItem(name, artist) {
    // let div = document.createElement("div");
    // let p = document.createElement("p");
    // let button = document.createElement("button");
    // let ionIcon = document.createElement("ion-icon");
    // ionIcon.setAttribute("name", "close");
    // button.setAttribute("id", "remove-queue");
    // p.setAttribute("class", "item-info");
    // p.innerHTML = `${artist} - ${name}`;
    let groups = [name, artist];
    queueArr.push(groups);
    // console.log(queueArr); BAKABİLİRİM
    // div.setAttribute("class", "item");
    // button.appendChild(ionIcon);
    // div.appendChild(p);
    // div.appendChild(button);
    // queueMusicList.appendChild(div);
}

function createQueueItem() {
    queueMusicList.innerHTML = "";
    queueArr.forEach((name) => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        let button = document.createElement("button");
        let ionIcon = document.createElement("ion-icon");
        ionIcon.setAttribute("name", "close");
        button.setAttribute("id", "remove-queue");
        p.setAttribute("class", "item-info");
        p.innerHTML = `${name[0]} - ${name[1]}`;
        div.setAttribute("class", "item");
        button.appendChild(ionIcon);
        div.appendChild(p);
        div.appendChild(button);
        queueMusicList.appendChild(div);
    });
    // allRemoveBtn.forEach((btn, index) => {
    //     btn.addEventListener("click", () => {
    //         btn.remove();
    //         queueList.splice(index, 1);
    //         queueArr.splice(index, 1);
    //         console.log(index);
    //         console.log(queueList);
    //         console.log(queueArr);
    //         if (queueArr.length == 0) {
    //             queueCheck = false;
    //             musicIndex = protectIndex;
    //             console.log(musicIndex);
    //         }
    //     });
    // });
    let arrayFromQueueList = Array.from(queueMusicList.children);

    for (let i = 0; i < arrayFromQueueList.length; i++) {
        arrayFromQueueList[i].value = i;
        console.log(arrayFromQueueList[i].value);
    }

}
let allRemoveBtn = document.querySelectorAll("#remove-queue");
musicListContainer.addEventListener("click", (e) => {
    if (e.target.matches("#remove-queue")) {
        console.log(e.target.parentElement.value);
        queueArr.splice(e.target.parentElement.value, 1);
        queueList.splice(e.target.parentElement.value, 1);
        console.log(queueArr);
        e.target.parentElement.remove();
        createQueueItem();
    }
    if (queueArr.length == 0) {
        queueCheck = false;
        musicIndex = deneme;
        console.log(musicIndex);
    }
});