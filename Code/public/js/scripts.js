const characters = ["Android 16", "Android 17", "Android 18", "Android 21", "Bardock", "Beerus", "Broly Z", "DBS Broly", "Captain Ginyu", "Cell", "Cooler", "Frieza" , "SSGSS Gogeta", "SSJ4 Gogeta", "Teen Gohan", "Adult Gohan", "Goku", "SSJ Goku", "SSGSS Goku", "UI Goku", "GT Goku", "Goku Black", "Gotenks", "Hit", "Janemba", "Jiren", "Kefla", "Kid Buu", "Krilin", "Majin Buu", "Master Roshi", "Nappa", "Piccolo", "Super Baby 2", "Tien", "Trunks", "Vegeta", "SSJ Vegeta", "SSGSS Vegeta", "Vegito", "Videl", "Yamcha", "Zamasu"]

randomTeam();

function randomTeam() {

    var character1 = Math.floor(Math.random() * 43) + 1;

    var character2 = Math.floor(Math.random() * 43) + 1;

    var character3 = Math.floor(Math.random() * 43) + 1;

    while(character1 == character2) {
        character2 = Math.floor(Math.random() * 43) + 1;
    }

    while(character1 == character3) {
        character3 = Math.floor(Math.random() * 43) + 1;
    }

    while(character2 == character3) {
        character3 = Math.floor(Math.random() * 43) + 1;
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
    document.getElementById(id).innerHTML = characters[character - 1];
    document.getElementById(idImg).src = `img/${character}.png`;
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