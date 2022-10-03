let current_users = ["anam", "rabia", "noor", "halimah", "sadia", "maham", "fariha"];
let new_users = ["muniba", "alia", "aroosa", "maryam", "maham", "fariha"];
current_user_tolower = current_users.map(function(user) {return user.toLowerCase(); });
for ( let newUser of new_users) {
    if (current_users.includes(newUser))
    {
        console.log("Sorry " + newUser + ", that name is taken.");
    }
    else {
        console.log("Great, " + newUser + " is still available.");
    }
}