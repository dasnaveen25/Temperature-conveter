
    function convertTemperature() {
        var temperatureInput = document.getElementById("temperatureInput").value;
        var unitSelector = document.getElementById("unitSelector");
        var selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;

        if (selectedUnit === "celsius") {
            var result = (temperatureInput * 9/5) + 32;
            document.getElementById("result").innerHTML = temperatureInput + " Celsius is equal to " + result + " Fahrenheit";
        } else {
            var result = (temperatureInput - 32) * 5/9;
            document.getElementById("result").innerHTML = temperatureInput + " Fahrenheit is equal to " + result + " Celsius";
        }
    }

    