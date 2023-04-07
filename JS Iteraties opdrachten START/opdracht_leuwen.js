let aantalLeeuwen=50;
let jaren=0;

do {
    document.write(jaren+':'+ parseInt(aantalLeeuwen)+'<br/>')
    aantalLeeuwen=aantalLeeuwen*1.15;
    jaren++
} while (aantalLeeuwen<1000);