// ejemplo de variables

var nameuser = "john"; 
let lastname = "carter";

nameuser = "pepe";

console.log(nameuser)

//Ejemplo de constantes

var nameuser = "john";
let lastname = "carter";

nameuser = "pepe";

const PI= 3.1415;
PI= 100;

console.log(PI)

// ejemplo de operadores
 
let numberOne = 60;
let numberTwo= 100;

let result = numberOne + numberTwo;

console.log(result) ; 

//segundo ejemplo y concatenacion 
let name = "John";
let lastname = "carter";

let completeName = name + " " + lastname;

console.log (completeName);

////tercer ejemplo comparacion 

let nomberOne = 100;
let numerTwo= 500;

let result = numberOne > numberTwo;

console.log(result);

//cuarto ejemplo 
let passwordDB = "pepe123"

let imput = "pepe123"

let result= imput == passwordDB;

console.log(result);

//ejemplo con condicionales

let passwordDB = "pepe123"

let imput = "pepe123"

let result= imput == passwordDB;

if(result == true){

    console.log ("login correcto");
}

if (result == false){
    console.log("Login Incorrecto");

}   
//ejmplo de condicionales 2
let passwordDB = "pepe123"

let imput = "pepe123"

let result= imput == passwordDB;

if(result == true){

    console.log ("login correcto");
} else {
    console.log("Contraseña incorrecta");
}

//Ejemplo 3

let typeCard = "debid card";

switch(typeCard) {
    case "Debid Card" :
        console.log ("This is a debid card");
         break;
    case "Credit Card": 
        console.log("This is a credit card");
        break;

        default: 
        console.log ("No Card");
}

//ejemplo de bucles

let count = 50;
while(count > 0) {
    console.log ("Hello World");
    count = count -1;
}

//Segundo ejemplo de bucles
let count = 0;
while(count < 50 ) {
    console.log (count);
    count ++;
}
//tercer ejemplo de bucles
let count = 1;
while(count <= 50 ) {
    console.log (count);
    count ++;
}

//EJEMPLO DE FOR

let names = [" ryan" ,  "joe", "john"];


for (let i=0; i> names.length; i++){
 console.log(name[i])
}


//Ejemplo de funciones

function greeting(){
    console.log("Helloo");
}

greeting ();

//segundo ejemplo con funciones

function greeting (personName) {
 console.log ("Hello" + personName);
}

greeting ("Karen");