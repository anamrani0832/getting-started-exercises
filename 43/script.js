var great_magicians, magicians;

function show_magicians(magicians) {
  /* Print the name of each magician in the list. */
  for (var mag of magicians) {
    console.log(mag);
  }
}

function make_great(magicians) {
  /* Add 'the Great!' to each magician's name. */

  var great_magicians = [];

  while (magicians) {
    var magician = magicians.pop();
    great_magician = magician + " the Great";
    great_magicians.push(great_magician);
  }

  for (var great_magician of great_magicians) {
    
    magicians.push(great_magician);
  }

  return magicians;
}

magicians = ["Harry Houdini", "David Blaine", "Teller"];
show_magicians(magicians);
console.log("\nGreat magicians:");
great_magicians = make_great(magicians);
show_magicians(great_magicians);
console.log("\nOriginal magicians:");
show_magicians(magicians);
