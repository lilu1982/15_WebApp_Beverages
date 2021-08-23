/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: check!
	Check Daten :: toDo
    Btn. Trigger :: toDo
    Business-Logic (Alter --> Getränk) :: check!
    Bild austauschen :: check!
*/

// Modul Ablaufsteuerung | Test:
//  controller()
function controller() {
    ausgabe(updateImg(checkAge(getInput())));
}



// Trigger - Btn 


// Trigger - Input


// Event-Dispatcher



// Modul: Check auf korrekte Eingaben ...


// Modul: Eingabe | Test:
//ausgabe(getInput())
function getInput() {
    const inputField = document.getElementsByName("eingabe")[0];
    let age = parseInt(inputField.value);
    return age;
    
}


//Modul: Business-Logic (Mapping) | Test:
// ausgabe(checkAge(2));
// ausgabe(checkAge(7));
// ausgabe(checkAge(13));
// ausgabe(checkAge(18));
// ausgabe(checkAge(99));
// ausgabe(checkAge(135));
function checkAge(age) {
    switch (true) 
    {
        case (age >= data.milk.lower) && (age <= data.milk.upper):
            return data.milk.bev;
        case (age >= data.juice.lower) && (age <= data.juice.upper):
            return data.juice.bev;
        case (age >= data.cola.lower) && (age <= data.cola.upper):
            return data.cola.bev;
        case (age >= data.wine.lower) && (age <= data.wine.upper):
            return data.wine.bev;
        default:
            return "tee";
    }
}

// Modul: Bild aktualisieren | Test:
// ausgabe(updateImg("cola"));
//ausgabe(updateImg("milch"));
function updateImg(imgName) {
    let img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName; // monitoring
}

//Modul: Konsolenausgabe --> Test:
function ausgabe(outputStr) {
    console.log(outputStr);
}