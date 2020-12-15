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
      
/* Exercise 4: Write a JavaScript program to get the current date. Expected
        Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */
     
/* Exercise 5: Write a JavaScript program to create a new string adding
        "New!" in front of a given string. If the given string begins with
        "New!" already then return the original string */
     