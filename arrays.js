 /* Ex1 */
 let daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satarday"];
 
 function sortArrayAlphabetically(a){
     return a.sort()   
 }
 function printArray(a){
     for(let i = 0; i< a.length ; i++){
         console.log(a[i]);
     }
 }
   
 
 sortArrayAlphabetically(daysArray)
 printArray(days)
 
 
 /* Ex2 */
 
 function printValueByIndex(a,b){
     if (b < 0) return `Sorry the index ${b} is not exist`;
     else{
         return a.length <  b  ? `Sorry the index ${b} is not exist` : a[b];
     }
     
 }
 
 printValueByIndex(a, b)
 
 /* Ex3*/
 
 function isAllOdd(a){
     let i = 0;
     while(i < a.length ){
         if (a[i] % 2 != 0 || a[i] == 0){
             return false;;
         }
         i ++;
     }
     return true;
 }
 
 console.log(isAllOdd(a)? "Odds" : "Not Odds")
 
 /*Ex4*/
 
 function add_5_ToValue(a){
     for(let i = 0; i < a.length; i++){
         if(a[i] < 10) a[i] += 5;
     }
     printArray(a);
 }
 
 /*Ex5*/
 
 function isFound(a,b ){
 
     return a.includes(b) ? true : false;
 
     // syntax 2
     for(let i =0 ; i < length; i++ ){
         if (a[i] == b){
             return true;
         }   
     }
     return false
 }
 
 
 /*Ex6*/ 
 
 function isEqual(arr, num1, num2){
     return arr[0] == num1 && arr[arr.length -1] == num2 ? true : false;
 }
 
 
 /*Ex 7*/
 
 function isBetween(a){
 
    const isSmallerThanFifty = a.every( e => e < 50)  // false
    const isBetweenFiftyAndOneHund = a.every( e => e > 50 && e <= 100) // false
    const isBetweenOneHundAndTwoHund = a.every( e => e > 100 && e <= 201) // true
    const isGreaterThanTwoHund = a.every( e => e > 200)
    return isSmallerThanFifty ? "All the values in the array are smaller than 50!!"
                              : isBetweenFiftyAndOneHund ? "All the values in the array are between 50 - 100" 
                              :  isBetweenOneHundAndTwoHund ? " All the values in the array are between 101 - 200"
                              : isGreaterThanTwoHund ? "All the values in the array are greater than 200" 
                              : "There is no suitable condition for the array"
   
 }