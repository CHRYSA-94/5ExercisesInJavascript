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
      
/*Exercise 2: Write a JavaScript program to extract the first half of a
string of even length.*/
      
function ex2(){

    const arr = document.getElementById("str2").value.split("");

    document.getElementById("result2").innerHTML = (arr.length % 2 === 0) ? `${arr.slice(0,arr.length/2).join("")}`:`${arr.slice(0,(arr.length+1)/2).join("")}` ;

}

/*Exercise 3: Write a JavaScript program to concatenate two strings except
their first character.*/

function ex3() {
   
    const str1 = document.getElementById( "str3-1").value.split("");
    const str2 = document.getElementById( "str3-2").value.split("");

    document.getElementById("result3").innerHTML = `${str1.slice(1).join("")}${str2.slice(1).join("")}`

}

      
/*Exercise 4: Given two values, write a JavaScript program to find out
which one is nearest to 100*/
      
/*Exercise 5: Write a JavaScript program to check a given string contains
2 to 4 occurrences of a specified character.*/

