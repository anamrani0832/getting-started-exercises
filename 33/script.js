let ordinalNumbers = [1,2,3,4,5,6,7,8,9];
for (let num of ordinalNumbers) {
    if (num == 1) {
        console.log("1st");
    }
    
    else if(num == 20) {
        console.log("2nd");
    }
    else if (num ==  3) {
        console.log("3rd");
    }
    else {
        console.log(num + "th");
    }
}