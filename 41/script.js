function show_magicians(magicians) {
for ( let magic of magicians)
{
   console.log(magic);
}
}
function make_great(magicians) {
for (let i=0; i < magicians.length; i ++)
{
   magicians[i] += " the great";
}

}

let magiciArray = ['Anam', 'Maham', 'Noor'];
show_magicians(magiciArray);
make_great(magiciArray);
show_magicians(magiciArray);