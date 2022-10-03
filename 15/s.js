let friendsNames = ['Mam Sadia', 'Maham', 'Noor', 'fariha', 'Mam Muniba'];
for (let frnd of friendsNames) {
    console.log(`${frnd} , HI Inviting you for dinner`);
}

console.log(friendsNames[0] + " Can't make dinner");
friendsNames[0] = "Alina";

for (let frnd of friendsNames) {
    console.log(`${frnd} , HI Inviting you for dinner`);
}