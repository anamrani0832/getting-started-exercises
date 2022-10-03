let friendsNames = ['Mam Sadia', 'Maham', 'Noor', 'fariha', 'Mam Muniba'];
// printing list
for (let frnd of friendsNames) {
    console.log(`${frnd} , HI Inviting you for dinner`);
}
// informing can't make dinner
console.log(friendsNames[0] + " Can't make dinner");
// replacing frnd name
friendsNames[0] = "Alina";
// aggain printing list to show new frnd
for (let frnd of friendsNames) {
    console.log(`${frnd} , HI Inviting you for dinner`);
}
// msg to show bigger table
console.log("found a bigger dinner table.");
// frnd at the start
friendsNames.unshift("Zunaira");
// frnd at the middle
friendsNames.splice(3, 0 , "Ayehsa");
// adding at the last
friendsNames.push("sibgha");
//  print updated list
for (let frnd of friendsNames) {
    console.log(`${frnd} , HI Inviting you for dinner`);
}

// msg to show i can invite only two members

console.log("i can invite only two members");

let sorry_people = []
while(friendsNames.length > 2) {
     sorry_people.push(friendsNames.pop()); 
    }
for(let pooped of sorry_people) {
    console.log(`${pooped} , sorry i can't invite you for dinner`);

}

for (let frnd of friendsNames) {
    console.log(`${frnd} , still invited`);
}

friendsNames.pop();
friendsNames.pop();
console.log(friendsNames);