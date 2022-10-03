let myArray = [120, false, 'Anam',400];
console.log(myArray);
let popedElements = []
for ( i =0; i < myArray.length; i ++) {
    if (myArray.length > 2) {
        popedElements.push(myArray.pop(i)); 
    }
}
console.log("popped elements  : " + popedElements);
console.log( "Remaining elemts of array : " + myArray);

