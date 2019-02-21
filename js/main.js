// JavaScript Document

/* *******************************

JSON Practice 
var newData = '{"color":"purple", "food":"raspberries"}'; //a complete JSON data structure

var myObject = JSON.parse(newData); //string > object
console.log(myObject);

var myString = JSON.stringify(myObject); //object > string
console.log(myString);

************************************/

/* *******************************

JSON Practice 2 - 1 layer deep 

var myData1 = '{"first":"Andi", "last":"Lyle", "city":"Providence"}';
var myObject = JSON.parse(myData1);
console.log(myObject);

document.getElementById('message').innerHTML = myObject.last;

************************************/

/* *******************************

JSON Practice 2 - 1 layer deep 

var myData2 = '{"Will":{"flavor":"orange", "animal":"Husky"}, "AJ":{"flavor":"coconut", "animal":"kangaroo"}, "Michael":{"flavor":"adobo", "animal":"raptor"}}'; //on this line, remove value and replace with another JSON object 
var myObject = JSON.parse(myData2);
console.log(myObject);

document.getElementById("message").innerHTML = myObject.Michael.flavor;

***************************************/

/* *******************************

JSON Practice 2 layers deep 

var myData2 = '{"Will":{"flavor":{"first":"barbeque", "second":"lemongrass"}, "animal":"Husky"}, "AJ":{"flavor":"coconut", "animal":"kangaroo"}, "Michael":{"flavor":"adobo", "animal":"raptor"}}'; //this all has to be on one line :(
var myObject = JSON.parse(myData2);
console.log(myObject);

document.getElementById("message").innerHTML = myObject.Will.flavor.second;

***************************************/
