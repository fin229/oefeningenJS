let aantalLoten=0,
ontvangen=0;

do {
    aantalLoten++;
    if (aantalLoten<=5) {
        ontvangen+=aantalLoten;
    }
    else{
        ontvangen+=6;
    }
} while (ontvangen<=1899);

alert('Vanaf lot '+aantalLoten+' is er winst');