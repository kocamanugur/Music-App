let allMusics = [
    {
        name: "Seni Kendime Sakladım",
        artist: "Duman",
        img: "Sources/img1.jpg",
        src: "Sources/music1.mp3"
    },
    {
        name: "Seni Dert Etmeler",
        artist: "Madrigal",
        img: "Sources/img2.jpg",
        src: "Sources/music2.mp3"
    },
    {
        name: "Cevapsız Sorular",
        artist: "Manga",
        img: "Sources/img3.jpg",
        src: "Sources/music3.mp3"
    },
    {
        name: "Kendime Yalan Söyledim",
        artist: "Seksendört",
        img: "Sources/img4.jpg",
        src: "Sources/music4.mp3"
    },
    {
        name: "Sen Varsın Diye",
        artist: "Yüzyüzeyken konuşuruz",
        img: "Sources/img5.jpg",
        src: "Sources/music5.mp3"
    },
    {
        name: "Master Of Puppets",
        artist: "Metallica",
        img: "Sources/img6.jpg",
        src: "Sources/music6.mp3"
    },
    {
        name: "Bir Derdim Var",
        artist: "Mor Ve Ötesi",
        img: "Sources/img7.jpg",
        src: "Sources/music7.mp3"
    },
    {
        name: "Lan",
        artist: "Zeynep Bastık",
        img: "Sources/img8.jpg",
        src: "Sources/music8.mp3"
    },
    {
        name: "Ağlama Ben Ağlarım",
        artist: "Can Ozan",
        img: "Sources/img9.jpg",
        src: "Sources/music9.mp3"
    },
    {
        name: "Kömür",
        artist: "Mabel Matiz",
        img: "Sources/img10.jpg",
        src: "Sources/music10.mp3"
    },
    {
        name: "Numb",
        artist: "Linkin Park",
        img: "Sources/img11.jpg",
        src: "Sources/music11.mp3"
    },
    {
        name: "Iris",
        artist: "Goo Goo Dolls",
        img: "Sources/img12.jpg",
        src: "Sources/music12.mp3"
    },
    {
        name: "Still Loving You",
        artist: "Scorpions",
        img: "Sources/img13.jpg",
        src: "Sources/music13.mp3"
    },
    {
        name: "Snuff",
        artist: "Slipknot",
        img: "Sources/img14.jpg",
        src: "Sources/music14.mp3"
    },
    {
        name: "Enemy",
        artist: "Imagine Dragons",
        img: "Sources/img15.jpg",
        src: "Sources/music15.mp3"
    },
    {
        name: "Fade To Black",
        artist: "Metallica",
        img: "Sources/img16.jpg",
        src: "Sources/music16.mp3"
    },
    {
        name: "Her Şeyi Yak",
        artist: "Duman",
        img: "Sources/img17.jpg",
        src: "Sources/music17.mp3"
    },
    {
        name: "Arcade",
        artist: "Duncan Laurence",
        img: "Sources/img18.png",
        src: "Sources/music18.mp3"
    },
    {
        name: "Another Love",
        artist: "Tom Odell",
        img: "Sources/img19.jpg",
        src: "Sources/music19.mp3"
    },
    {
        name: "This I Love",
        artist: "Guns N' Roses",
        img: "Sources/img20.jpg",
        src: "Sources/music20.mp3"
    },
    {
        name: "Bu Akşam",
        artist: "Duman",
        img: "Sources/img21.jpg",
        src: "Sources/music21.mp3"
    },
];
let musicList = document.querySelector(".music-list");

allMusics.forEach((song) => {
    let musicClass = document.createElement("div");
    musicClass.setAttribute("class", "music-class");
    let img = document.createElement("img");
    img.src = song.img;
    let musicContent = document.createElement("div");
    musicContent.setAttribute("class", "music-content");
    let name = document.createElement("h2");
    name.setAttribute("id", "name");
    name.innerHTML = song.name;
    let imgBox = document.createElement("div");
    imgBox.setAttribute("class", "img-box");
    let ionIcon = document.createElement("ion-icon");
    ionIcon.setAttribute("name", "play");
    imgBox.appendChild(ionIcon);
    musicClass.appendChild(imgBox);
    let p = document.createElement("p");
    p.setAttribute("id", "artist");
    let audio = document.createElement("audio");
    audio.src = song.src;
    let queueBtn = document.createElement("button");
    queueBtn.setAttribute("class", "control-button");
    queueBtn.setAttribute("id", "queue-btn");
    let ionIconQueue = document.createElement("ion-icon");
    ionIconQueue.setAttribute("name", "add-circle");
    queueBtn.appendChild(ionIconQueue);
    let musicMember = document.createElement("div");
    musicMember.setAttribute("class", "music-member");
    musicClass.appendChild(audio);
    p.innerHTML = song.artist;
    musicContent.appendChild(name);
    musicContent.appendChild(p);
    musicClass.appendChild(img);
    imgBox.appendChild(img);
    musicClass.appendChild(musicContent);
    musicMember.appendChild(musicClass);
    musicMember.appendChild(queueBtn);
    musicList.appendChild(musicMember);
});

