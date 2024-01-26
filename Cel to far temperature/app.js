function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

console.log(celsiusToFahrenheit(60));
console.log(fahrenheitToCelsius(104));
