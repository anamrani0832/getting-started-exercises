function make_album(artist, title , tracks = 0){

    album_dict = {
        'artist': artist,
        'title': title,
        }
    if (tracks) {
        album_dict["tracks"] = tracks;
    }
    return album_dict;
}
   


album = make_album('Anam', 'ride the lightning')
console.log(album)

album = make_album('Rani', 'ninth symphony')
console.log(album)

album = make_album('Noor', 'red-headed stranger')
console.log(album)

album = make_album('Maham', 'piece of mind', tracks=8)
console.log(album)
