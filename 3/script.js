let personName = "anam rani";
function toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
console.log( personName.toLowerCase()); 
console.log(personName.toUpperCase()) ; 
console.log(toTitleCase(personName));


