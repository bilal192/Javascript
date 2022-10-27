//Ex1 => Write a for loop that prints the numbers from 12 to 24
for(let i = 12; i <= 24; i++){
    document.write(i);
}

// Ex2=> Write a for loop that prints the ODD numbers from 7 to 31
for(let i = 7; i<=31; i++){
    if(i % 2 ==0){
        document.write(i);
    }
}

//Ex3=> Write a for loop that prints the EVEN numbers from 10 to -20.
for(let i =10; i >= -2; i--){
    if(i % 2 == 1){
        document.write(i);
    }
}

/* Ex4 
 Write a for loop that iterates through all numbers from 1 to 45. Print the following:
 ● For each multiples of 3 print “Fizz”
 ● For each multiples of 5 print “Buzz”
 ● For each multiples of 3 and 5 print “FizzBuzz”
*/

for(let i =1; i <= 45; i++){
    if(i % 3 == 0) {
        if(i % 5 == 0 ){
            document.write(i + " FizzBuzz"+ "<br>");
        }
        else{
            document.write(i + " Fizz" + "<br>");
        }
    }
    else if(i % 5 == 0){
        if(i % 3 == 0) {
        document.write(i + " FizzBuzz"+ "<br>");
        }
        else{
            document.write(i + " Buzz"+ "<br>");
        }
    }
}

/* Ex5:
Write a function that receives an array that calculates the sum of all the numbers in the following array.
var numbersArray = [1,13,22,123,49,34,5,24,57,45]
*/

function sumAllArrayNumbers(myArray){
    const arraylength = myArray.length;
    let sum = 0;
    for(let i =0; i < arraylength; i++){
        sum += myArray[i];
    }

    return sum;
}

/* Ex6:
Write a function that receives an array of objects.
Each object should represent a student with the properties:
- id
- first name
- last name
- age
- country
- city
In addition, the function should receive a property to change.*/

/* */




// Functions Lecture //



function getDiff(x, y){
    return Math.abs(a - b);

}

// 
function getAvg(x, y){
    return (x + y)/2;
}




function getAvgOfList(numbersArray){
    let lengthOfArray = numbersArray.length;
    let sum = 0 ;
    for (let i = 0; i < lengthOfArray ; i++){
        sum += numbersArray[i];
    }
    return sum / lengthOfArray;
}

//*bonus: create a function which 
//            gets first parameter as a list (of numbers)
        //         second parameter as a number (default is zero)
        //         the function will return true if the numbers exists inside the list
        //         otherwise will print false
        //         -implement and call it twice (true/false)

function list_func(listOfNumbers, a){    
    for(let i = 0 ; i < listOfNumbers.length ; i++){
        if (parseInt(listOfNumbers[i]) == a ) return true;
    }
    return false;
}





