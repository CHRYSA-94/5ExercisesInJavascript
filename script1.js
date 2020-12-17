/*Exercise 1: Write a JavaScript program to create a new string from a
given string taking the last 3 characters and added at both the front
and back. The string length must be 3 or more, if not, the original
string is returned.*/

 function ex1(){

   const arr = document.getElementById("str1").value.split("") ;
   const threeLetters = arr.slice(-3).join("");
   const str =arr.join("");

 
   document.getElementById("result1").innerHTML = (arr.length <= 3) ? `${str}`:`${threeLetters + str + threeLetters}` ;
}


//Costas
const makeNewString = (str) => str.length < 3 ? str :  str.slice(0, 3) + str.slice(-3); 
      
/*Exercise 2: Write a JavaScript program to extract the first half of a
string of even length.*/
      
function ex2(){

    const arr = document.getElementById("str2").value.split("");

    document.getElementById("result2").innerHTML = (arr.length % 2 === 0) ? `${arr.slice(0,arr.length/2).join("")}`:`${arr.slice(0,(arr.length+1)/2).join("")}` ;

}

//Costas
const firstHalf = (str) => str.slice(0, str.length / 2);

/*Exercise 3: Write a JavaScript program to concatenate two strings except
their first character.*/

function ex3() {
   
    const str1 = document.getElementById( "str3-1").value.split("");
    const str2 = document.getElementById( "str3-2").value.split("");

    document.getElementById("result3").innerHTML = `${str1.slice(1).join("")}${str2.slice(1).join("")}`

}


//Costas
const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1);

/*Exercise 4: Given two values, write a JavaScript program to find out
which one is nearest to 100*/

function ex4(){

    const num1 = document.getElementById( "num1").value;
    const num2 = document.getElementById( "num2").value;

    const finalNum1 = (num1 - 100 > 0) ? `${num1}`:`${(num1 - 100) * -1}` ;
    const finalNum2 = (num2 - 100 > 0) ? `${num2}`:`${(num2 - 100) * -1}` ;

    document.getElementById("result4").innerHTML = (Number(finalNum1) < Number(finalNum2)) ? `${num1}` :`${num2}` ;
}

//Costas
const closetTo100 = (a,b) => (100 -a) < (100 -b) ? a : b;
      
/*Exercise 5: Write a JavaScript program to check a given string contains
2 to 4 occurrences of a specified character.*/

function ex5(){
    
    const str5 = document.getElementById("str5").value.split("");
    const num = [];
    const str = [];

str5.forEach(char => {
    if ( isNaN(Number(char)) == false ) {
    num.push(char);
}
    else {
        str.push(char);
    }
});

   const firstHalf = num.sort() ;
   const secHalf = str.sort();

   const wholeString = firstHalf.concat(secHalf);
    

   let times = 0;
   let timesArr= [];

   for (let i=0; i < wholeString.length; i++){
      if ( wholeString[i] === wholeString[i+1]) {
          //to brak edw giati den doulevei?
        if (times > 3) { break;}
            
         times++
         timesArr.push(times);
         console.log(times);
      }
      else { times =0;}
      
   }
 
    document.getElementById("result5").innerHTML = timesArr.some(ch => ch >= 1 && ch <= 3);
  


}

//Costas
const countChars = (str, char) => str.split('').filter(ch => ch === char).length;
const contains2To4 = (str, char) => countChars(str, char) >= 2 && countChars(str, char) <= 4;