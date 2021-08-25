const characters = ["Android 16", "Android 17", "Android 18", "Android 21", "Bardock", "Beerus", "Broly Z", "DBS Broly", "Captain Ginyu", "Cell", "Cooler", "Frieza" , "SSGSS Gogeta", "SSJ4 Gogeta", "Teen Gohan", "Adult Gohan", "Goku", "SSJ Goku", "SSGSS Goku", "UI Goku", "GT Goku", "Goku Black", "Gotenks", "Hit", "Janemba", "Jiren", "Kefla", "Kid Buu", "Krilin", "Majin Buu", "Master Roshi", "Nappa", "Piccolo", "Super Baby 2", "Tien", "Trunks", "Vegeta", "SSJ Vegeta", "SSGSS Vegeta", "Vegito", "Videl", "Yamcha", "Zamasu"]

const characterObj = [
    {   
        name: "Android 16",
        img: "img/Android 16.png"
    }, {   
        name: "Android 17",
        img: "img/Android 17.png"
    }, {   
        name: "Android 18",
        img: "img/Android 18.png"
    }, {
        name: "Android 21",
        img: "img/Android 21.png"
    }, {
        name: "Bardock",
        img: "img/Bardock.png"
    }, {
        name: "Beerus",
        img: "img/Beerus.png"
    }, {
        name: "Broly Z",
        img: "img/Broly Z.png"
    }, {
        name: "DBS Broly",
        img: "img/DBS Broly.png"
    }, {
        name: "Captain Ginyu",
        img: "img/Captain Ginyu.png"
    }, {
        name: "Cell",
        img: "img/Cell.png"
    }, {
        name: "Cooler",
        img: "img/Cooler.png"
    }, {
        name: "Frieza",
        img: "img/Frieza.png"
    }, {
        name: "SSGSS Gogeta",
        img: "img/SSGSS Gogeta.png"
    }, {
        name: "SSJ4 Gogeta",
        img: "img/SSJ4 Gogeta.png"
    }, {
        name: "Teen Gohan",
        img: "img/Teen Gohan.png"
    }, {
        name: "Adult Gohan",
        img: "img/Adult Gohan.png"
    }, {
        name: "Goku",
        img: "img/Goku.png"
    }, {
        name: "SSJ Goku",
        img: "img/SSJ Goku.png"
    },  {
        name: "SSGSS Goku",
        img: "img/SSGSS Goku.png"
    },  {
        name: "UI Goku",
        img: "img/UI Goku.png"
    },  {
        name: "GT Goku",
        img: "img/GT Goku.png"
    },  {
        name: "Goku Black",
        img: "img/Goku Black.png"
    },  {
        name: "Gotenks",
        img: "img/Gotenks.png"
    },  {
        name: "Hit",
        img: "img/Hit.png"
    },  {
        name: "Janemba",
        img: "img/Janemba.png"
    },  {
        name: "Jiren",
        img: "img/Jiren.png"
    },  {
        name: "Kefla",
        img: "img/Kefla.png"
    },  {
        name: "Kid Buu",
        img: "img/Kid Buu.png"
    },  {
        name: "Krilin",
        img: "img/Krilin.png"
    },  {
        name: "Majin Buu",
        img: "img/Majin Buu.png"
    },  {
        name: "Master Roshi",
        img: "img/Master Roshi.png"
    },  {
        name: "Nappa",
        img: "img/Nappa.png"
    },  {
        name: "Piccolo",
        img: "img/Piccolo.png"
    },  {
        name: "Super Baby 2",
        img: "img/Super Baby 2.png"
    },  {
        name: "Tien",
        img: "img/Tien.png"
    },  {
        name: "Trunks",
        img: "img/Trunks.png"
    },  {
        name: "Vegeta",
        img: "img/Vegeta.png"
    },  {
        name: "SSJ Vegeta",
        img: "img/SSJ Vegeta.png"
    },  {
        name: "SSGSS Vegeta",
        img: "img/SSGSS Vegeta.png"
    },  {
        name: "Vegito",
        img: "img/Vegito.png"
    },  {
        name: "Videl",
        img: "img/Videl.png"
    },  {
        name: "Yamcha",
        img: "img/Yamcha.png"
    },  {
        name: "Zamasu",
        img: "img/Zamasu.png"
    }
];

function randomTeam() {

    let character1 = Math.floor(Math.random() * characterObj.length);

    let character2 = Math.floor(Math.random() * characterObj.length);

    while (character1 == character2) {
        console.log(character1);
        console.log(character2);
        alert("Opa que paso aca");
        character2 = Math.floor(Math.random() * characterObj.length);
        console.log(character1);
        console.log(character2);
        alert("Bueno a ver si se soluciona con esto no")
    }

    let character3 = Math.floor(Math.random() * characterObj.length);

    while (character1 == character3) {
        console.log(character1);
        console.log(character3);
        alert("Opa que paso aca");
        character3 = Math.floor(Math.random() * characterObj.length);
        console.log(character1);
        console.log(character3);
        alert("Bueno a ver si se soluciona con esto no")
    }

    while (character2 == character3) {
        console.log(character2);
        console.log(character3);
        alert("Opa que paso aca");
        character3 = Math.floor(Math.random() * characterObj.length);
        console.log(character2);
        console.log(character3);
        alert("Bueno a ver si se soluciona con esto no")
    }

    let assist1 = Math.floor(Math.random() * 3) + 1;
    let assist2 = Math.floor(Math.random() * 3) + 1;
    let assist3 = Math.floor(Math.random() * 3) + 1;

    setCharacter(character1, "char1", "charImg1");
    setCharacter(character2, "char2", "charImg2");
    setCharacter(character3, "char3", "charImg3");

    setAssist(assist1, "assistCharacter1");
    setAssist(assist2, "assistCharacter2");
    setAssist(assist3, "assistCharacter3");
}

function setCharacter(character,id,idImg) {
    document.getElementById(id).innerHTML = characterObj[character].name;
    document.getElementById(idImg).src = characterObj[character].img;
}

function setAssist(assist, id) {
    if(assist == 1) {
        document.getElementById(id).innerHTML = "Assist A"
        document.getElementById(id).style.color = "red";
        document.getElementById(id).classList.remove("blue");
        document.getElementById(id).classList.remove("green");
    } else if(assist == 2) {
        document.getElementById(id).innerHTML = "Assist B"
        document.getElementById(id).style.color = "blue";
        document.getElementById(id).classList.remove("red");
        document.getElementById(id).classList.remove("green");
    } else if(assist == 3) {
        document.getElementById(id).innerHTML = "Assist C"
        document.getElementById(id).style.color = "green";
        document.getElementById(id).classList.remove("blue");
        document.getElementById(id).classList.remove("red");
    }
}

randomTeam();