var small = prompt('Hoeveel small pizzas wilt u')
var medium = prompt('Hoeveel medium pizzas wilt u')
var large = prompt('Hoeveel large pizzas wilt u')


document.write('<div>Bestellijst:</div><br>')
document.write('<div>Small: ' + small  + '</div><br>')
document.write('<div>Medium: ' + medium +'</div><br>')
document.write('<div>Large: ' + large  +'</div><br><br>')

var sp =  4.99;
var mp = 9.99;
var bp = 14.99;


document.write('<div><prijslijst:<br></div.')
document.write('<div>small € ' + small * sp + '</div><br>')
document.write('<div>medium € ' + medium * mp + '</div><br>')
document.write('<div>large € ' + large * bp + '</div><br><br>')

var tot= small*sp + medium*mp + large*bp;
 
 if (large >4){
 	tot= small*sp + medium*mp + large*bp -10;
 	document.write('<div>korting - €10</div><br><br>');

 }

 

document.write('<div>totaal prijs: €'+ tot)