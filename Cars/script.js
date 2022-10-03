function make_car(manufacturer , model, ...options) {
    var car_dict = {
        'manufacturer': manufacturer,
        'model': model,
        }
    for (const [key, value] of Object.entries(options)) {
        car_dict[key] = value; 
        }

    return car_dict;
}

my_accord = make_car('honda', 'accord', year=1991, color='white',
        headlights='popup')
console.log(my_accord);