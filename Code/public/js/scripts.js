const characters = ["Android 16", "Android 17", "Android 18", "Android 21", "Bardock", "Beerus", "Broly Z", "Broly Super", "Captain Ginyu", "Cell", "Cooler", "Frieza" , "Gogeta Blue", "Gogeta SSJ4", "Teen Gohan", "Adult Gohan", "Goku Base", "Goku SSJ", "Goku Blue", "Goku UI", "Goku GT", "Goku Black", "Gotenks", "Hit", "Janemba", "Jiren", "Kefla", "Kid Buu", "Krilin", "Majin Buu", "Master Roshi", "Nappa", "Piccolo", "Super Baby 2", "Tien", "Trunks", "Vegeta Base", "Vegeta SSJ", "Vegeta Blue", "Vegito", "Videl", "Yamcha", "Zamasu"]

function randomTeam() {
    let character1 = Math.floor(Math.random() * 43) + 1;
    let character2 = Math.floor(Math.random() * 43) + 1;
    let character3 = Math.floor(Math.random() * 43) + 1;

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

function setCharacter(character, id, idImg) {
    if(character == 1) {
        document.getElementById(id).innerHTML = characters[0];
        document.getElementById(idImg).src = "img/1.png"
    } else if(character == 2) {
        document.getElementById(id).innerHTML = characters[1];
        document.getElementById(idImg).src = "img/2.png"
    } else if(character == 3) {
        document.getElementById(id).innerHTML = characters[2];
        document.getElementById(idImg).src = "img/3.png"
    } else if(character == 4) {
        document.getElementById(id).innerHTML = characters[3];
        document.getElementById(idImg).src = "img/4.png"
    } else if(character == 5) {
        document.getElementById(id).innerHTML = characters[4];
        document.getElementById(idImg).src = "img/5.png"
    } else if(character == 6) {
        document.getElementById(id).innerHTML = characters[5];
    } else if(character == 7) {
        document.getElementById(id).innerHTML = characters[6];
    } else if(character == 8) {
        document.getElementById(id).innerHTML = characters[7];
    } else if(character == 9) {
        document.getElementById(id).innerHTML = characters[8];
    } else if(character == 10) {
        document.getElementById(id).innerHTML = characters[9];
    } else if(character == 11) {
        document.getElementById(id).innerHTML = characters[10];
    } else if(character == 12) {
        document.getElementById(id).innerHTML = characters[11];
    } else if(character == 13) {
        document.getElementById(id).innerHTML = characters[12];
    } else if(character == 14) {
        document.getElementById(id).innerHTML = characters[13];
    } else if(character == 15) {
        document.getElementById(id).innerHTML = characters[14];
    } else if(character == 16) {
        document.getElementById(id).innerHTML = characters[15];
    } else if(character == 17) {
        document.getElementById(id).innerHTML = characters[16];
    } else if(character == 18) {
        document.getElementById(id).innerHTML = characters[17];
    } else if(character == 19) {
        document.getElementById(id).innerHTML = characters[18];
    } else if(character == 20) {
        document.getElementById(id).innerHTML = characters[19];
    } else if(character == 21) {
        document.getElementById(id).innerHTML = characters[20];
    } else if(character == 22) {
        document.getElementById(id).innerHTML = characters[21];
    } else if(character == 23) {
        document.getElementById(id).innerHTML = characters[22];
    } else if(character == 24) {
        document.getElementById(id).innerHTML = characters[23];
    } else if(character == 25) {
        document.getElementById(id).innerHTML = characters[24];
    } else if(character == 26) {
        document.getElementById(id).innerHTML = characters[25];
    } else if(character == 27) {
        document.getElementById(id).innerHTML = characters[26];
    } else if(character == 28) {
        document.getElementById(id).innerHTML = characters[27];
    } else if(character == 29) {
        document.getElementById(id).innerHTML = characters[28];
    } else if(character == 30) {
        document.getElementById(id).innerHTML = characters[29];
    } else if(character == 31) {
        document.getElementById(id).innerHTML = characters[30];
    } else if(character == 32) {
        document.getElementById(id).innerHTML = characters[31];
    } else if(character == 33) {
        document.getElementById(id).innerHTML = characters[32];
    } else if(character == 34) {
        document.getElementById(id).innerHTML = characters[33];
    } else if(character == 35) {
        document.getElementById(id).innerHTML = characters[34];
    } else if(character == 36) {
        document.getElementById(id).innerHTML = characters[35];
    } else if(character == 37) {
        document.getElementById(id).innerHTML = characters[36];
    } else if(character == 38) {
        document.getElementById(id).innerHTML = characters[37];
    } else if(character == 39) {
        document.getElementById(id).innerHTML = characters[38];
    } else if(character == 40) {
        document.getElementById(id).innerHTML = characters[39];
    } else if(character == 41) {
        document.getElementById(id).innerHTML = characters[40];
    } else if(character == 42) {
        document.getElementById(id).innerHTML = characters[41];
    } else if(character == 43) {
        document.getElementById(id).innerHTML = characters[42];
    } 
}

function setAssist(assist, id) {
    if(assist == 1) {
        document.getElementById(id).innerHTML = "Assist A"
    } else if(assist == 2) {
        document.getElementById(id).innerHTML = "Assist B"
    } else if(assist == 3) {
        document.getElementById(id).innerHTML = "Assist C"
    }
}