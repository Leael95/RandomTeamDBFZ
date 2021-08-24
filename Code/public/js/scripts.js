const characters = ["Android 16", "Android 17", "Android 18", "Android 21", "Bardock", "Beerus", "Broly Z", "DBS Broly", "Captain Ginyu", "Cell", "Cooler", "Frieza" , "Blue Gogeta", "SSJ4 Gogeta", "Teen Gohan", "Adult Gohan", "Goku", "SSJ Goku", "SSGSS Goku", "UI Goku", "GT Goku", "Goku Black", "Gotenks", "Hit", "Janemba", "Jiren", "Kefla", "Kid Buu", "Krilin", "Majin Buu", "Master Roshi", "Nappa", "Piccolo", "Super Baby 2", "Tien", "Trunks", "Vegeta", "SSJ Vegeta", "SSGSS Vegeta", "Vegito", "Videl", "Yamcha", "Zamasu"]

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
        document.getElementById(idImg).src = "img/6.png"
    } else if(character == 7) {
        document.getElementById(id).innerHTML = characters[6];
        document.getElementById(idImg).src = "img/7.png"
    } else if(character == 8) {
        document.getElementById(id).innerHTML = characters[7];
        document.getElementById(idImg).src = "img/8.png"
    } else if(character == 9) {
        document.getElementById(id).innerHTML = characters[8];
        document.getElementById(idImg).src = "img/9.png"
    } else if(character == 10) {
        document.getElementById(id).innerHTML = characters[9];
        document.getElementById(idImg).src = "img/10.png"
    } else if(character == 11) {
        document.getElementById(id).innerHTML = characters[10];
        document.getElementById(idImg).src = "img/11.png"
    } else if(character == 12) {
        document.getElementById(id).innerHTML = characters[11];
        document.getElementById(idImg).src = "img/12.png"
    } else if(character == 13) {
        document.getElementById(id).innerHTML = characters[12];
        document.getElementById(idImg).src = "img/13.png"
    } else if(character == 14) {
        document.getElementById(id).innerHTML = characters[13];
        document.getElementById(idImg).src = "img/14.png"
    } else if(character == 15) {
        document.getElementById(id).innerHTML = characters[14];
        document.getElementById(idImg).src = "img/15.png"
    } else if(character == 16) {
        document.getElementById(id).innerHTML = characters[15];
        document.getElementById(idImg).src = "img/16.png"
    } else if(character == 17) {
        document.getElementById(id).innerHTML = characters[16];
        document.getElementById(idImg).src = "img/17.png"
    } else if(character == 18) {
        document.getElementById(id).innerHTML = characters[17];
        document.getElementById(idImg).src = "img/18.png"
    } else if(character == 19) {
        document.getElementById(id).innerHTML = characters[18];
        document.getElementById(idImg).src = "img/19.png"
    } else if(character == 20) {
        document.getElementById(id).innerHTML = characters[19];
        document.getElementById(idImg).src = "img/20.png"
    } else if(character == 21) {
        document.getElementById(id).innerHTML = characters[20];
        document.getElementById(idImg).src = "img/21.png"
    } else if(character == 22) {
        document.getElementById(id).innerHTML = characters[21];
        document.getElementById(idImg).src = "img/22.png"
    } else if(character == 23) {
        document.getElementById(id).innerHTML = characters[22];
        document.getElementById(idImg).src = "img/23.png"
    } else if(character == 24) {
        document.getElementById(id).innerHTML = characters[23];
        document.getElementById(idImg).src = "img/24.png"
    } else if(character == 25) {
        document.getElementById(id).innerHTML = characters[24];
        document.getElementById(idImg).src = "img/25.png"
    } else if(character == 26) {
        document.getElementById(id).innerHTML = characters[25];
        document.getElementById(idImg).src = "img/26.png"
    } else if(character == 27) {
        document.getElementById(id).innerHTML = characters[26];
        document.getElementById(idImg).src = "img/27.png"
    } else if(character == 28) {
        document.getElementById(id).innerHTML = characters[27];
        document.getElementById(idImg).src = "img/28.png"
    } else if(character == 29) {
        document.getElementById(id).innerHTML = characters[28];
        document.getElementById(idImg).src = "img/29.png"
    } else if(character == 30) {
        document.getElementById(id).innerHTML = characters[29];
        document.getElementById(idImg).src = "img/30.png"
    } else if(character == 31) {
        document.getElementById(id).innerHTML = characters[30];
        document.getElementById(idImg).src = "img/31.png"
    } else if(character == 32) {
        document.getElementById(id).innerHTML = characters[31];
        document.getElementById(idImg).src = "img/32.png"
    } else if(character == 33) {
        document.getElementById(id).innerHTML = characters[32];
        document.getElementById(idImg).src = "img/33.png"
    } else if(character == 34) {
        document.getElementById(id).innerHTML = characters[33];
        document.getElementById(idImg).src = "img/34.png"
    } else if(character == 35) {
        document.getElementById(id).innerHTML = characters[34];
        document.getElementById(idImg).src = "img/35.png"
    } else if(character == 36) {
        document.getElementById(id).innerHTML = characters[35];
        document.getElementById(idImg).src = "img/36.png"
    } else if(character == 37) {
        document.getElementById(id).innerHTML = characters[36];
        document.getElementById(idImg).src = "img/37.png"
    } else if(character == 38) {
        document.getElementById(id).innerHTML = characters[37];
        document.getElementById(idImg).src = "img/38.png"
    } else if(character == 39) {
        document.getElementById(id).innerHTML = characters[38];
        document.getElementById(idImg).src = "img/39.png"
    } else if(character == 40) {
        document.getElementById(id).innerHTML = characters[39];
        document.getElementById(idImg).src = "img/40.png"
    } else if(character == 41) {
        document.getElementById(id).innerHTML = characters[40];
        document.getElementById(idImg).src = "img/41.png"
    } else if(character == 42) {
        document.getElementById(id).innerHTML = characters[41];
        document.getElementById(idImg).src = "img/42.png"
    } else if(character == 43) {
        document.getElementById(id).innerHTML = characters[42];
        document.getElementById(idImg).src = "img/43.png"
    } 
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