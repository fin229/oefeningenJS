let aantal=0,
totaal=0;

aantal=parseInt(prompt('Geef een aantal in: '));

for (let i = 0; i <aantal; i++) {
    let getal=parseInt(prompt('Geef een getal in: '));

    if (getal<50) {
        alert('Oei, is het volgende beter?')
    }
    else{
        alert('Doe zo voort')
    }
    totaal+=getal;
}

alert('Genoeg geprobeerd, uw beurt is over!\nHet gemiddelde van de reeks is: '+(totaal/aantal));