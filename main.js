var a = 16;
var b = a>17 ? (a>64 ? 'Пенсия' : 'Работа') : 'Учеба';
console.log(b);

var c1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var name1 = ' разработчик';
var FinalName1;
for (var i1 in c1){
switch(c1[i1]){
case 1: FinalName1 = c1[i1] + name1; break;
case 2:;
case 3:;
case 4: FinalName1 = c1[i1] + name1 + 'а';break;
case 5:;
case 6:;
case 7:;
case 8:;
case 9: FinalName1 = c1[i1] + name1 + 'ов';break;
}
console.log(FinalName1)
}
