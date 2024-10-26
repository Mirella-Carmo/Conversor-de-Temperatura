document.getElementById("toggle").onclick = function() {
    var celsius = parseFloat(document.getElementById("inputCelsius").value);
    var fahrenheitResult = document.querySelector(".valor_convertido_f");

    //Celsius para Fahrenheit
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitResult.textContent = fahrenheit.toFixed(2) + " °F";
    } else {
        fahrenheitResult.textContent = "Resultado °F";
    }

    //Fahrenheit
    var fahrenheit = parseFloat(document.getElementById("inputFahrenheit").value);
    var celsiusResult = document.querySelector(".valor_convertido_c");

    //Fahrenheit para Celsius
    if (!isNaN(fahrenheit)) {
        var celsiusConverted = (fahrenheit - 32) * 5 / 9;
        celsiusResult.textContent = celsiusConverted.toFixed(2) + " °C";
    } else {
        celsiusResult.textContent = "Resultado °C";
    }
};
