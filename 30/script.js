let usernames = ['admin', 'client', 'server', 'layman'];
for ( member of usernames) {
     if(member == "admin") {
        console.log("Hello admin, would you like to see a status report?");
     }
     else{
        console.log(`Hello ${member}, thank you for logging in again.`);
     }
    
}