var favoriteTransportation = ['car', 'airplan', 'bike'];
for (let i = 0; i < favoriteTransportation.length; i++) {
    let statement = prompt(`Enter your statement for ${favoriteTransportation[i]}`);
    alert(statement);
}