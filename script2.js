
 /*Exercise 1: Write a JavaScript program to find the number of even digits
  in a an array of integers*/
    function ex1(){

      const num1 = document.getElementById("num1").value.split("");
      document.getElementById("result1").innerHTML = num1.filter(n => Number(n) % 2 === 0 );
    
    } 
  

/*Exercise 2: Write a JavaScript program to find the number of even values
   up to a given number*/

   function ex2(){
     
    const num2 = document.getElementById("num2").value;
    
    const finalArr = [];
      for (i=0; i <= Number(num2); i++){
        if(i % 2 ===0) {
          finalArr.push(i);
        }
      }
     
      document.getElementById("result2").innerHTML = finalArr;
   }
   
/* Exercise 3: Write a JavaScript program to check whether a given array of
   integers is sorted in ascending order*/

   function ex3(){
     
  }
      
 /* Exercise 4: Write a JavaScript program to get the largest even number
  from an array of integers.*/
     
  function ex4(){
     
  }
/* Exercise 5: Write a JavaScript program to replace the first digit in a
   string (should contain at least one digit) with a $ character.*/

   function ex5(){
     
  }