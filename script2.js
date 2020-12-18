// Nice colors
 /*Exercise 1: Write a JavaScript program to find the number of even digits
  in a an array of integers*/
    function ex1(){

      const num1 = document.getElementById("num1").value.split(",");
      document.getElementById("result1").innerHTML = num1.filter(n => Number(n) % 2 === 0 ).length;
      
    } 

//Costas
// Good work 

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
     
      document.getElementById("result2").innerHTML = finalArr.length;
   }

   //Costas
   // Nice work


/* Exercise 3: Write a JavaScript program to check whether a given array of
   integers is sorted in ascending order*/

   function ex3(){
     
    const num3 = document.getElementById("num3").value.split(",");
    const sortNum3 = num3.map(n => n).sort((a, b) => {return Number(a) - Number(b)});
    // Why use map 
    
    document.getElementById("result3").innerHTML = (num3.join() === sortNum3.join()) ? "true":"false"
    
  }


  //Costas
  // Rethink what you are doing
  const isAscending = (arr) => arr.every((a, i) => arr[i + 1] > a);
      
 /* Exercise 4: Write a JavaScript program to get the largest even number
  from an array of integers.*/
     
  function ex4(){

    const num4 = document.getElementById("num4").value.split(",");
    const sortArray = num4.filter(n => n % 2 == 0).sort((a, b) => {return Number(a) - Number(b)});
    document.getElementById("result4").innerHTML = sortArray.slice(sortArray.length-1);
  }


//Costas
const largestEven = (arr) => Math.max(...arr.filter(num => num % 2 === 0)); 

/* Exercise 5: Write a JavaScript program to replace the first digit in a
   string (should contain at least one digit) with a $ character.*/

   function ex5(){
     
    const str5 = document.getElementById("str5").value.split("");
   
    const nStr = str5.map(c => c)
    nStr.splice(0 , 1 ,"$")
    
    document.getElementById("result5").innerHTML = (str5.length == 1)? `${str5}`:`${nStr.join().replace(/,/g,"")}`

  };

  //Costas
  const replaceFirstDigit = (str) => str.replace(/[0-9]/, '$');

   