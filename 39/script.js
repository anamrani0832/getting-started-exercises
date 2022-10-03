function describe_city( city , country = "Pakistan") {
    let msg = `${city} is in ${country}`;
    return alert(msg);
}
describe_city(city = "Karachi");
describe_city(city = "Lahore");
describe_city( "Farscisco", "Landon");