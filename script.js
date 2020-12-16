/* Exercise 1: Write a JavaScript program to check two numbers and return
        true if one of the number is 100 or if the sum of the two numbers is 100 */


        function isNumber100 () {

        const num1 =document.getElementById("num1").value;
        const num2 =document.getElementById("num2").value;


          if (Number(num1) === 100 || Number(num2) === 100) {
                document.getElementById("result1").innerHTML= true ;
            }
            else if (Number(num1) + Number(num2) == 100) {
                document.getElementById("result1").innerHTML= true ;
            }
            else {
                document.getElementById("result1").innerHTML= false ;
            }

            console.log(typeof Number(num1));
        }

        
// Exercise 2: Write a JavaScript exercise to get the extension of a filename

 function typeOfFile() {

    const filePath = document.getElementById("filetype").value;
    const indexNumber = filePath.lastIndexOf(".");
    const fileType = filePath.slice(indexNumber);
    
    document.getElementById("result2").innerHTML = fileType;
 }

     
/* Exercise 3: Write a JavaScript program to replace every character in a
        given string with the character following it in the alphabet */

    function nextLetter() {
       const text = document.getElementById("randomString1").value.toLowerCase().split("");
       //.split("")
       const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
       const textArray =[];

        
       for (let i = 0; i < text.length; i++ ){
           for (let j=0 ; j < alphabet.length ; j++) {
               if (text[i] === alphabet[j] ) {
                  if (text[i] ==="z") {
                    textArray.push("a");
                  }
                  else{
                    textArray.push(alphabet[j +1]);
                  }
               
                }
           }
          
       }
       const textString = textArray.toString();
       const finalText = textString.replace(/,/g, "")
       document.getElementById("result3").innerHTML = finalText;
    }
    
      
/* Exercise 4: Write a JavaScript program to get the current date. Expected
        Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */
     
        function today() {


        const date = new Date();
        const day = date.getDate();
        const year = date.getFullYear();
        const month =date.getMonth() + 1;
        

        const fullday = (day < 10)? `0${day}`:`${day}` ;
        const fullmonth = (month < 10)? `0${month}`:`${month}` ;

        document.getElementById("date").innerHTML = `${fullmonth}-${fullday}-${year} , ${fullmonth}/${fullday}/${year}`;
    }
      today();


/* Exercise 5: Write a JavaScript program to create a new string adding
        "New!" in front of a given string. If the given string begins with
        "New!" already then return the original string */
     
        function randomText() {
            const randtext = document.getElementById("randomString2").value ;
           

            if (randtext.slice(0,4) === "New!") {

               document.getElementById("result5").innerHTML = randtext;
             
            }
            else {

               document.getElementById("result5").innerHTML= `New! ${randtext}`;
            }
        }