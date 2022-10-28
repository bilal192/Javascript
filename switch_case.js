// Function with switch-case //
//Ex 1: The function receives a number and return a string saying if the number given is even or odd.
function isOddOrEven(a){
   if(a <= 0) return "The number cann't be Zero Or Negative!!. Please Try again!!"
   switch (parseInt(a) % 2 == 0) {
    case true:
        return a + " is enev number."
    case false:
        return a + " is odd number"
   }
}
//Ex2: The function receives a number and return a string saying if the number given is negative or positive.
function isNegative(a){
    let x = parseInt(a);
    if (x === 0) return " Is ZERO!!!"
    switch (x < 0) {
        case true:            
            return x + " is negative." 
        case false:
            return x + " is positive."
    }
}
/*Ex3: The function receives one number, if the number is between 1 to 7, 
then the function will return the specific day, otherwise the function will return “please enter another number”.
*/ 
function getDay(x){
    switch (x) {
        case 1:
            return "Sunday"
            case 2:        
            return "Monday";        
        case 3:
            return "Tuesday";        
        case 4:
            return "Wednesday";        
        case 5:
            return "Thursday";        
        case 6:
            return "Friday";        
        case 7:
            return "Saturday";
        default:
            return "The number isn't Valid, please try again: "
    }  
    
}


/*Ex 4: The function receives one number, if the number is between 1 to 12, 
then the function will return the specific month, otherwise the function will return “please enter another number”
*/
function getMonth(a){
    let x = parseInt(a);
    switch (x) {
        case 1:
            return "January"
        case 2:
            return "February"
        case 3:
            return "March"        
        case 4:
            return "April"        
        case 5:
            return "May"        
        case 6:
            return "June"        
        case 7:
            return "July"
        case 8:
            return "August"
        case 9:
            return "September"
        case 10:
            return "October"
        case 11:
            return "November"
        case 12:
            return "December"
        default:
            return "The nuuber isn't valid!! , Please Try Again:  "

    }        
}
/**Ex 5: The function receives a letter and has to check if the letter is a vowel or a consonant. 
 * The vowel letters are : a,e,i,o,u,y and the rest of the letters a consonant.
*/
function isVowelLetters(a) {
    let vowelLetters = ['a','e','i','o','u','y'];
    let x = vowelLetters.includes(a);
    switch (x) {
        case true:
            return "The letter is Vowel"
        case false:
            return typeof a == 'string' ? "The letters is consonant" : "The char isn't valid";
        }
}
/* The function receives a number between 0 to 100.
    If the number is between 0 to 20, the function returns : “D”.
    If the function is between 21 to 55, the function returns : “C ”.
    If the function is between 56 to 70, the function returns : “B ”.
    If the function is between 71 to 90, the function returns : “A ”.
    If the function is between 90 to 100, the function returns : “A+ ”.
*/
function getRarigByNumber(a){
    let x = parseInt(a);
    switch (true) {
        case x > -1 && x < 21:
            return "D"
        case x > 20 && x < 56:
            return "C"    
        case x > 55 && x < 71:
            return "B"
        case x > 70 && x < 91:
            return "A"
        case x > 89 && x <101:
            return "A+"
        default:
            return "The great isn't Valid, Try again: "
    }
}
/*
Ex 7: The function receives 3 parameters(2 integer numbers and number between 1 to 4). 
number 1 -> addition
number 2 -> subtraction
number 3 -> division
number 4 -> multiplication
For example, if the third parameter is 4, 
the function returns the first parameter * the second parameter.
If the third parameter is 2, the function returns the first parameter - the second parameter.
*/
function calcFunc(a, b, c) {
    let x = parseInt(a), y = parseInt(b), z = parseInt(c);
    if (z > 4 || z < 1) return "Number is Invalid!!!";
    switch (z) {
        case 1:
            return x + y;
        case 2:
            return x - y;
        case 3:
            return y != 0 ? x /y : "Cann't divising by ZERO!!"
        case 4:
            return x * y;
    }
}
