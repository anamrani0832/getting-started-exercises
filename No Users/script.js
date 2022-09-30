let usernames = ['admin', 'client', 'server', 'layman'];


 while (usernames.length > 0) {
    usernames.pop();
}
console.log(usernames.length);
if ( usernames.length == 0) {
    console.log("We need to find some users!");
}

