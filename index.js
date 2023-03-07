import { countries } from "./arrays/countries.js";
const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];
  const mernStack = ['MangoDB', 'Express', 'React', 'Node'];

//====================1===============================0=
/*for (let i=0; i<=10; i++){
    console.log(countries[i])
}
let i=0;
while (i<=10) {
    console.log(countries[i]);
    i++;
}
let j=0;
do {
    console.log(countries[j]);
    j++;
} while (j <=10); */
//========================2=============================

/*for (let i=10; i>=0; i--){
    console.log(countries[i])
}
let i=10;
while (i>=0) {
    console.log(countries[i]);
    i--;
}
let j=10;
do {
    console.log(countries[j]);
    j--;
} while (j >=10);*/
//======================3=================================

/*let n = 5
for (let i=0; i<=n; i++){
    console.log(countries[i]);
}*/
//========================4===============================
/*let concatenado = ""
for (let i=0; i<6; i++){
    concatenado += ("#");
    console.log(concatenado);
}*/
//=======================5================================
/*for (let i=0; i<=10; i++){
console.log(`${i} * ${i} = ${i*i} `);
}*/
//======================6==================================
/*console.log('i^1   i^2   i^3');
for (let i=0; i<=10; i++){
console.log(`${i}  *  ${i**2}  =  ${i**3} `);
}*/
//=========================7==============================
/*for (let i=0; i<=100; i++){
    if (i % 2 == 0 && i !== 0){
        console.log(i);
    }
}*/
//===========================8=============================
/*for (let i=0; i<=100; i++){
    if (i % 2 == 0){
    continue;
    }
    console.log(i);
}*/
//========================9================================
/*for (let i=0; i<=100; i++){
    if (i % 2 == 0){
    continue;
    }
    console.log(i);
}*/
//=========================10=============================
/*let suma = 0;
for (let i=0; i<=100; i++){
    suma += i;
}
console.log('la suma de todos los numeros es igual a ' + suma);*/
//=========================11==============================
/*let sumaPar = 0; 
for (let i=0; i<=100; i++){
    if (i % 2 !== 0){
        continue;
        }
        sumaPar += i;      
}
 console.log("la suma de todos los pares del 0 al 100 es: " + sumaPar);
let sumaImp = 0;
for (let i=0; i<=100; i++){
    if (i % 2 == 0){
        continue;
        }
        sumaImp += i;
}
console.log("la suma de todos los impares del 0 al 100 es: " + sumaImp);*/
//=========================12==============================
/*let sumaPar = 0; 
let sumas = [ ];
for (let i=0; i<=100; i++){
    if (i % 2 !== 0){
        continue;
        }
        sumaPar += i;

}
let sumaImp = 0;
for (let i=0; i<=100; i++){
    if (i % 2 == 0){
        continue;
        }
        sumaImp += i;
}
sumas.push(sumaPar, sumaImp);
console.log(sumas);*/
//=======================13=================================
/*let randomNumbers = [ ]; 

for (let i=0; i<=5; i++)  {
    let randomNum = Math.floor((Math.random()*50));
    randomNumbers.push(randomNum);
}
console.log(randomNumbers);*/
//=======================14=================================
/*let randomNumbers = [ ]; 

for (let i=0; i<=4; i++)  {
    let randomNum = Math.floor((Math.random()*50));
    if (i == 0){
        randomNumbers.push(randomNum);
    } else if (randomNum !== randomNumbers[i-1]){ 
        randomNumbers.push(randomNum);
    } else {
        randomNum = Math.floor((Math.random()*50));
        randomNumbers.push(randomNum);
    }
}
console.log(randomNumbers);*/
    
//======================15===================================
/*const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let id = "";
for (let i=0; i<=5; i++)  {
    id = id.concat(characters.charAt(Math.random()*characters.length))
}
console.log(id);*/

//===================NIVEL 2 1======================================

/*const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let id = "";
for (let i=0; i<=Math.floor(Math.random()*50); i++)  {
    id = id.concat(characters.charAt(Math.random()*characters.length))
}
console.log(id);*/

//=========================2=======================================

/*const characters = 'ABCDEabcde0123456789';
let hexadecimal = "#";
for (let i=0; i<=6; i++)  {
    hexadecimal = hexadecimal.concat(characters.charAt(Math.random()*characters.length))
}
console.log(hexadecimal);*/

//===========================3======================================

/*let rgb = "rgb"
let arrayrgb = [ ];

for (let i = 0; i < 3; i++) {
   arrayrgb.push(Math.floor(Math.random()*255));
}
console.log(rgb + "("+ arrayrgb[0] + "," + arrayrgb[1] + "," +arrayrgb[2] + ")");*/

//============================4====================================
/*let arrUp = [ ];
for (let i = 0; i <= 9; i++) {
    arrUp.push(countries[Math.floor(Math.random()*countries.length)].toString().toUpperCase())
 }
 console.log(arrUp);*/

 //===========================5========================================
 /*let longsArr = [ ]
 for (let i = 0; i <= countries.length-1; i++) {
    longsArr.push(countries[i].length)
 }
 console.log(longsArr);*/

 //============================6==================================

/*let newCountriesArr = [ ]
 for (let i = 0; i <= countries.length-1; i++) {

    let Elem1 = countries[i].toString()+', ';
    let Elem2 = countries[i].charAt(0).toString().toUpperCase() + countries[i].charAt(1).toString().toUpperCase() + countries[i].charAt(2).toString().toUpperCase()+ ', ';
    let Elem3 = countries[i].length.toString();
    let ElemArr = Elem1 + Elem2 + Elem3;
    newCountriesArr.push(ElemArr)
 }
 console.log(newCountriesArr);*/

 //===========================7====================================
 
 /*let arrIncludes = [ ];
 for (let i = 0; i <= countries.length-1; i++) {
    if (countries[i].includes('land')){
        arrIncludes.push(countries[i]);
    }
}
console.log(arrIncludes);*/

//===========================8===============================

/*let arrFinish = [ ];
for (let i = 0; i <= countries.length-1; i++) {
    if (countries[i].endsWith('ia')){
        arrFinish.push(countries[i]);
    }
}
console.log(arrFinish);*/

//===========================9=================================

/*let longCountrie = 0;
let nameCountrie =  "";

for (let i = 0; i <= countries.length-1; i++) {
    
    if (i == 0) {
        let longCountrie = countries[i].length;
        let nameCountrie = countries[i];
    }else if(countries[i].length > longCountrie) {
         longCountrie = countries[i].length
         nameCountrie = countries[i]
    }
}
console.log(nameCountrie);*/

//==========================10=================================

/*let longCountrie5 = 0;
let arrLong5 = [ ];

for (let i = 0; i <= countries.length-1; i++) {
    
    if (i == 0) {

        let longCountrie5 = countries[i].length;
        let nameCountrie5 = countries[i];
    }else if(countries[i].length == 5) {
        arrLong5.push(countries[i])
    }
}
console.log(arrLong5);*/

//=============================11==============================

/*let longWebT = 0;
let nameWebT =  "";

for (let i = 0; i <= webTechs.length-1; i++) {
    
    if (i == 0) {
        let longWebT = webTechs[i].length;
        let nameWebT = webTechs[i];
    }else if(webTechs[i].length > longWebT) {
        longWebT = webTechs[i].length
         nameWebT = webTechs[i]
    }
}
console.log(nameWebT);*/

//============================12================================

/*let newWebTechsArr = [ ]
 for (let i = 0; i <= webTechs.length-1; i++) {

    let Elem1 = webTechs[i].toString()+', ';
    let Elem2 = webTechs[i].length.toString();
    let ElemArr = Elem1 + Elem2;
    newWebTechsArr.push(ElemArr)
 }
 console.log(newWebTechsArr);*/

 //==========================13===================================

/*
let acronimo = "";
let firstLetter = "";
for (let i = 0; i <= mernStack.length-1; i++){
    firstLetter = mernStack[i].charAt(0);
    acronimo += firstLetter;
}
console.log(acronimo);*/

//==========================14====================================

/*for (let i = 0; i <= webTechs.length-1; i++) {
    console.log(webTechs[i]);
}*/

//===========================15====================================

/*let frutas = ['banana', 'orange', 'mango', 'lemon'];
let frutasInv = [ ];
for (let i = frutas.length-1; i >= 0; i-- ){
    frutasInv.push(frutas[i]);
}
console.log(frutasInv);*/

//=============================16====================================
/*const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
  ];
  for(let i=0; i<fullStack.length; i++) {

    for(let j=0; j<fullStack[i].length; j++) {
       console.log(fullStack[i][j].toUpperCase());
    }
}*/
//===================NIVEL 3 1/2======================================

/*let sortedCountries = [ ];

for(let i=0; i<= countries.length-1; i++){
    sortedCountries[i] = countries[i];
}
console.log(sortedCountries);*/

//========================3===============================

/*webTechs.sort()
console.log(webTechs);
mernStack.sort();
console.log(mernStack);*/

//==========================4==================================
 
/*let arrIncludes = [ ];
 for (let i = 0; i <= countries.length-1; i++) {
    if (countries[i].includes('land')){
        arrIncludes.push(countries[i]);
    }
}
console.log(arrIncludes);*/

//=================================5=============================

/*let longCountrie = 0;
let nameCountrie =  "";

for (let i = 0; i <= countries.length-1; i++) {
    
    if (i == 0) {
        let longCountrie = countries[i].length;
        let nameCountrie = countries[i];
    }else if(countries[i].length > longCountrie) {
         longCountrie = countries[i].length
         nameCountrie = countries[i]
    }
}
console.log(nameCountrie);*/

//===============================6================================

/*let arrIncludes = [ ];
 for (let i = 0; i <= countries.length-1; i++) {
    if (countries[i].includes('land')){
        arrIncludes.push(countries[i]);
    }
}
console.log(arrIncludes);*/

//================================7================================

/*let longCountrie4 = 0;
let arrLong4 = [ ];

for (let i = 0; i <= countries.length-1; i++) {
    
    if (i == 0) {

        let longCountrie4 = countries[i].length;
        let nameCountrie4 = countries[i];
    }else if(countries[i].length == 4) {
        arrLong4.push(countries[i])
    }
}
console.log(arrLong4);*/

//=============================8=====================================

/*let longCountrie2p = 0;
let arrLong2p = [ ];

for (let i = 0; i <= countries.length-1; i++) {
    
    if(countries[i].includes(" ")) {
        arrLong2p.push(countries[i])
    }
}
console.log(arrLong2p);*/

//===========================9=======================================
let countriesInv = [ ];
for (let i = countries.length-1; i >= 0; i-- ){
    countriesInv.push(countries[i].toUpperCase());
}
console.log(countriesInv);