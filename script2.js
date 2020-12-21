

/*Exercise 1: Given a year, report if it is a leap year.*/

function leapYear(){
  const year = document.getElementById("year").value ;
  document.getElementById("result1").innerHTML = (new Date (year, 1, 29).getMonth() == 1) ? `Leap Year` :`Not Leap Year`;
}

//Costas
/* ????? */
const isLeapYear = (year) =>  year % 4 ? 'Not a Leap Year' : 'It is leap year';
 
 /*  Exercise 2: Write a JavaScript program to compare two objects to
   determine if the first one contains the same properties as the second
   one (which may also have additional properties). For example, objA and
   objB are equal (but not equal to objC). const objA = { a: 1, b: 1, c: 1
   }; const objB = { a: 1, b: 1, c: 1 }; const objC = { a: 1, b: 1, d: 1 };*/

   function ex2( ){
    const objA = { a: 1, b: 1, c: 1}; 
    const objB = { a: 1, b: 1, c: 1 }; 
   
    const keyObjA = Object.keys(objA);
    const keyObjB = Object.keys(objB);

    if ( keyObjA.length !== keyObjB.length) {
      document.getElementById("result2").innerHTML= "objects have different properties"
    }
    else  if((keyObjA.every( key => objB.hasOwnProperty(key) && objB[key] === objA[key])) == true )
    {
      document.getElementById("result2").innerHTML= "objects have same properties" 
    }
    else {
      document.getElementById("result2").innerHTML= "objects have different properties"
    }

   }

   

  //Costas
  //You do not need to check the order of the properties
  const objectIsEqual = (objA, objB) => Object.keys(objA).every(key => key in objB);
  

/*  Exercise 3: Write a JavaScript program to convert a comma-separated
   values (CSV) string to a 2D array. A new line indicates a new row in the
   array. Example input: abc,def,ghi jkl,mno,pqr stu,vwx,yza */
 
   function ex3(){
    const csv = document.getElementById("csv").value ;

    const rows = csv.split("\\n") ; //i think tha the correct is ...("\n") because it is a meta character with special use but i use this "\\n" here for the example
    const Array2D =rows.slice(1,rows.length).map(row => row.split(","))
     
    console.log(Array2D);
  
  }

  //Costas
  const parseCSV = (csv) => csv.split('\n').map(row => row.split(','));

 /*  Exercise 4: Write a JavaScript program to generate a random hexadecimal
   color code.*/


   function ex4(){
   // const = document.getElementById("ex2").value ;
    
   const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
   let hexColor = "#";
   for (let i=0; i<6 ;i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)] 
   }
   
   document.getElementById("result4").innerHTML= hexColor ;
   document.getElementById("bgColor").style.backgroundColor = hexColor;

  }

  //costas
  const randomNumber = () => Math.floor(Math.random() * 16).toString(16);
  const randomHexColor = () => '#' + Array.from({length: 6}).map(randomNumber).join('');
  

 /*  Exercise 5: Write a JavaScript function that returns true if the
   provided predicate function returns true for all elements in a
   collection, false otherwise.*/
   
   const arr = [6,8,7,9];
   const predicateFun = (elem)=> elem > 5;
   
   
   const ex5 = (array, func ) => array.every(func)
   
   document.getElementById("result5").innerHTML = ex5(arr,predicateFun)
   
 
    //const res1 = document.getElementById("result5").innerHTML ;

    //Costas
   //Nice

  