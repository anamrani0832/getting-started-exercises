// array of frind List
let friendsNames = ['Mam Sadia', 'Maham', 'Noor', 'fariha', 'Mam Muniba'];
console.log(friendsNames[4] + " Can't make dinner");
friendsNames[4] = "Mam Hina";
console.log("you found a bigger dinner table.");
friendsNames.unshift("Zunaira");
friendsNames.splice(3, 0 , "Ayehsa");
friendsNames.push("sibgha");
for ( var i =0; i < friendsNames.length; i ++) {
   console.log("Hello, I'm invitin  you for Dinner  " + friendsNames[i]);
}
