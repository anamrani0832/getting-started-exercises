let personName = "anam rani";
function toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
document.getElementById("lowercase").innerHTML = personName.toLowerCase(); 
document.getElementById("uppercase").innerHTML = personName.toUpperCase(); 
document.getElementById("titlecase").innerHTML = toTitleCase(personName);
console.log(toTitleCase(personName));


