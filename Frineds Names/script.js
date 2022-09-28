// array of frind List
let friendsNames = ['Mam Sadia', 'Maham', 'Noor', 'fariha', 'Mam Muniba'];
console.log(friendsNames[4] + " Can't make dinner");
friendsNames[4] = "Mam Hina";
console.log("I found a bigger dinner table.");
friendsNames.unshift("Zunaira");
friendsNames.splice(3, 0 , "Ayehsa");
friendsNames.push("sibgha");
console.log("I can invite only two people for dinner");
for ( i = 0; i <=5; i++) {
    consol.log(`${friendsNames[i]} you’re sorry I can’t invite you to dinner`);
    friendsNames.pop(i)
}
for ( var i =0; i < friendsNames.length; i ++) {
   console.log("Hello, I'm invitin  you for Dinner  " + friendsNames[i]);
}
