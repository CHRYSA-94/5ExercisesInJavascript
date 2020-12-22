/* Exercise 1: Write a JavaScript function that returns a passed string
   with letters in alphabetical order. Example string: 'webmaster' Expected
   Output: 'abeemrstw'*/
   function alphabeticalOrder(){

    const str1 = document.getElementById("str1").value ; 
    document.getElementById("result1").innerHTML =str1.split("").sort().join().replace(/,/g, "") ;
}

/*Exercise 2: Write a JavaScript function that accepts a string as a
parameter and counts the number of vowels within the string.*/
function countVowels(){
 const str2 = document.getElementById("str2").value.toLowerCase().split("") ;
 const vowels = ["a","e","i","o","u"];
 const existingV = [];
 

 for (let i=0 ; i < str2.length ; i++) {
     for (let j=0 ; j < vowels.length ; j++) {
         if (str2[i]==vowels[j]) {
             existingV.push(vowels[j]);
         } 
     }
 }
 
 document.getElementById("result2").innerHTML = existingV.length;
}
   
/* Exercise 3: Write a JavaScript function to convert an amount to coins.
 Example input: 46 and possible coins 25, 10, 5, 2, 1 Output: 25, 10, 10,
 1*/
 function coinCalculation(){
    const coins = document.getElementById("coins").value;
    const arr =[];
    let rest = coins;

    if (rest >= 25){
     Math.floor(coins / 25);
     rest %= 25;
     for (let i =0 ; i < Math.floor(coins / 25); i++){
         arr.push(25)}
    }
    if (rest >= 10){
     Math.floor(rest / 10);
     for (let i =0 ; i < Math.floor(rest / 10); i++){
         arr.push(10)}
     rest %= 10;
    }
    if (rest >= 5){
     Math.floor(rest / 10);
     for (let i =0 ; i < Math.floor(rest / 5); i++){
         arr.push(5)}
     rest %= 5;
    }
    if (rest >= 2){
     Math.floor(rest / 2);
     for (let i =0 ; i < Math.floor(rest / 2); i++){
         arr.push(2)}
     rest %= 2;
    } 
    if (rest == 1){ arr.push(1) }
 
    document.getElementById("result3").innerHTML = arr.join();
 }
  
/* Exercise 4: Write a JavaScript function to extract unique characters
 from a string.*/
