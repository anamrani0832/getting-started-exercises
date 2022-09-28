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
    console.log(`${friendsNames[i]} you’re sorry I can’t invite you to dinner`);
    friendsNames.pop(i)
}
for ( var i =0; i < friendsNames.length; i ++) {
   console.log("Hello, I'm invitin  you for Dinner  " + friendsNames[i]);
}
console.log("I can invite only two people for dinner.");
for ( var i =0; i <= 2; i ++) {
   console.log(`you’re sorry I can’t invite you ${friendsNames[i]} to dinner`);
   friendsNames.pop(friendsNames[i])
 }
 for ( var i =0; i <= friendsNames.length; i ++) {
    console.log(` you're  still invited ${friendsNames[i]} to dinner`);
  }
  console.log(friendsNames.length)