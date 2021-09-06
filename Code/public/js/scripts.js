const characters = ["Android 16", "Android 17", "Android 18", "Android 21", "Bardock", "Beerus", "Broly Z", "DBS Broly", "Captain Ginyu", "Cell", "Cooler", "Frieza" , "SSGSS Gogeta", "SSJ4 Gogeta", "Teen Gohan", "Adult Gohan", "Goku", "SSJ Goku", "SSGSS Goku", "UI Goku", "GT Goku", "Goku Black", "Gotenks", "Hit", "Janemba", "Jiren", "Kefla", "Kid Buu", "Krilin", "Majin Buu", "Master Roshi", "Nappa", "Piccolo", "Super Baby 2", "Tien", "Trunks", "Vegeta", "SSJ Vegeta", "SSGSS Vegeta", "Vegito", "Videl", "Yamcha", "Zamasu"]

randomTeam();

function randomTeam() {

    let character1 = Math.floor(Math.random() * characters.length);

    let character2 = Math.floor(Math.random() * characters.length);

    let character3 = Math.floor(Math.random() * characters.length);

    while(character1 == character2) {
        console.log("Primer While antes del efecto" + character1 + " " + character2);
        character2 = Math.floor(Math.random() * characters.length);
        console.log("Primer While despues del efecto" + character1 + " " + character2);
    }

    while(character3 == character1 || character3 == character2) {
        console.log("Segundo While antes del efecto" + character1 + " " + character2);
        character3 = Math.floor(Math.random() * characters.length);
        console.log("Segundo While despues del efecto" + character1 + " " + character2);
    }

    if(character1 == character2 || character2 == character3 || character3 == character1) {
        alert("Si te salio este mensaje por favor comentamelo a twitter @ResetLea porque no tendria que pasar :v");
    }

    let assist1 = Math.floor(Math.random() * 3);
    let assist2 = Math.floor(Math.random() * 3);
    let assist3 = Math.floor(Math.random() * 3);

    setCharacter(character1, "char1", "charImg1");
    setCharacter(character2, "char2", "charImg2");
    setCharacter(character3, "char3", "charImg3");

    setAssist(assist1, "assistCharacter1");
    setAssist(assist2, "assistCharacter2");
    setAssist(assist3, "assistCharacter3");
}

function setCharacter(character,id,idImg) {
    document.getElementById(id).innerHTML = characters[character];
    document.getElementById(idImg).src = `img/${characters[character]}.png`;
}

function setAssist(assist, id) {
    if(assist == 0) {
        document.getElementById(id).innerHTML = "Assist A"
        document.getElementById(id).style.color = "red";
        document.getElementById(id).classList.remove("blue");
        document.getElementById(id).classList.remove("green");
    } else if(assist == 1) {
        document.getElementById(id).innerHTML = "Assist B"
        document.getElementById(id).style.color = "blue";
        document.getElementById(id).classList.remove("red");
        document.getElementById(id).classList.remove("green");
    } else if(assist == 2) {
        document.getElementById(id).innerHTML = "Assist C"
        document.getElementById(id).style.color = "green";
        document.getElementById(id).classList.remove("blue");
        document.getElementById(id).classList.remove("red");
    }
}

function removeChar(character) {
    const charToDelete = characters.indexOf(character);

    if(charToDelete >= 0) {
        console.log(charToDelete);
        console.log(characters.length);
        characters.splice(charToDelete, 1);
        console.log(characters.length);
    } else {
        alert("ERROR, no se puede sacar 2 veces un mismo personaje");
    }
}

function addChar(character) {
    characters.push(character);
}

let parImpar = 0;

document.getElementById("btnEdit").addEventListener("click", function() {
    // document.getElementById("cards").classList.add("d-none");

    if(parImpar%2 == 0) {
        document.getElementById("checkChars").classList.remove("d-none");
        document.getElementById("checkChars").classList.add("d-block");
        parImpar++;
    } else {
        document.getElementById("checkChars").classList.remove("d-block");
        document.getElementById("checkChars").classList.add("d-none");
        parImpar++;
    }
  });

  let max3Chars = characters.length;

function addOrRemoveChar(checkbox) {
    char = document.getElementById(checkbox);
    console.log(max3Chars + " La variable Max3Chars");

    if(max3Chars > 3) {
        if(char.checked == true) {
            addChar(char.value);
            console.log("Añadimos " + char.value);
            max3Chars++;
        } else {
            removeChar(char.value);
            console.log("Removemos " + char.value);
            max3Chars--;
        }
    } else if(char.checked == true) {
        addChar(char.value);
        console.log("Añadimos " + char.value);
        max3Chars++;
    } else {
        alert("No se puede tener menos de 3 personajes")
        char.checked = true;
    }

    console.log(max3Chars + "La variable Max3CharsB");
}