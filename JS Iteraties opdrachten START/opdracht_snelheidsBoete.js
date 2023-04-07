let snelheid=parseInt(prompt('Wat was de snelheid'));
let boete=125;
while (snelheid>50) {
    boete+=25;
    snelheid--
}

alert('Foei, u krijgt een boete van '+boete+' euro')