var small = prompt('Hoeveel small pizzas wilt u')
var medium = prompt('Hoeveel medium pizzas wilt u')
var large = prompt('Hoeveel large pizzas wilt u')


document.write('Bestellijst:<br>')
document.write('Small: ' + small  +'<br>')
document.write('Medium: ' + medium +'<br>')
document.write('Large: ' + large  +'<br><br>')

var sp =  5;
var mp = 10;
var bp = 15;


document.write('prijslijst:<br>')
document.write('small € ' + small * sp + '<br>')
document.write('medium € ' + medium * mp + '<br>')
document.write('large € ' + large * bp + '<br><br>')

var tot= small*sp + medium*mp + large*bp;
 
 if (large >7){
 	tot= small*sp + medium*mp + large*bp -10;
 	document.write('korting - €10<br><br>');

 }

 

document.write('totaal prijs: €'+ tot)