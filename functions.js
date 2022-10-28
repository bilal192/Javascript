/* Ex1
Write a function that receives two parameters of type int.
If the first parameter is bigger than the second parameter -> the function should returns the first parameter
else -> the function should return the second parameter*/
function getMax(a, b){
    return a > b ? a : b; 
}
/*
Write a function that receives 2 parameters of type int.
If the first parameter is equal to the second parameter -> the function should add 1 to the first parameter and return it.
*/
function getNewNumber(a, b){
    return a === b ? ("the new number is:" + (a + 1)) : "The numbers are not equals"; 
}
/*
Write a function that receives four parameters of type int.
The function has to return the smaller value between all of them. 
If one of the parameters is between 1 to 5, then return -1.
*/
function getMin(a, b, c, d){
    let arr = [parseInt(a),parseInt(b),parseInt(c),parseInt(d)]; // init the array with parameters
    let min = arr[0];
    
    for (let i = 1; i < arr.length; i++) {        
        if( arr[i] <= 5 && arr[i] >= 1) return -1;
        if (arr[i] < min) min = arr[i]; 
    }

    return min;
}
/*
Write a function that receives one parameter of type int.
If the number is even then return the string : “even”, otherwise “not even”.
*/
function isEven(a){
    if(a > 0)  return a % 2 == 1 ? "The number is enen" : "The number isn't even";
    else return "Number cann't be ZERO OR NEGATIVE!!"
}
/*
function that receives 4 parameters
Requermint {
    If all the four numbers are equal, => “all equals”.
    If 2 of the four numbers are equals, => “only 2 numbers are equals”.
    If none of the two cases happened, => “all numbers not equals”.
}
What should happen in case I have 2 number that appears twice? [a = b , c = d] i.e [17, 17, 92, 92]
 

*/
function isEquals(a, b, c, d){
    let arr = [parseInt(a),parseInt(b),parseInt(c),parseInt(d)]; // init the array with parameters
    let flage = 0;
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if (arr[i] == arr[j]){
                flage++;
            }
        }
    }
    return (arr.every(val => val === arr[0])) ? "All the numbers are equals." : flage == 2 ? "Two numbers are equals" : "all numbers not equals" 
}
/*
 Write a function that receives a parameter of type int.
The number has to be between 1 to 7 and each number represents each day of the week.
The function has to return the specific day that represents the number. 
If the number is not between 1 to 7, the function has to return the string “Error”.
Ex: if the number is 2, the function returns “Monday”,
if the number is 3, the function returns “Tuesday”.....
*/
function getDay(a){
    let days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];    
    return a >= 1 && a <= 7 ? days[ a - 1] : "The number is not Valid!!."
}
/*
Write a function that receives a number between 1 to 12.
Each number represents each month of the year.
The function has to return the number of the days in the month
*/
function getDaysInMonth(a){
    const numberOfDays = { month30 : [4,6,9,11] };

    function is30Days(a){
        return numberOfDays.month30.includes(a) ? true : false ;
    }

    if (a != 2 && a > 0 && a < 13){
        return is30Days(a) ? "30 Days in this month!" : "31 Days in this month";
    }
    else{
        return "the number isn't valid!!"
    }  
}