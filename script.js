document.getElementById("convertBtn").addEventListener("click", function() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var conversionType = document.getElementById("conversionType").value;
    var convertedTemperature;
  
    if (conversionType === "celsius") {
      convertedTemperature = (temperatureInput - 32) * 5 / 9;
      document.getElementById("result").innerHTML = temperatureInput + "°F is " + convertedTemperature.toFixed(2) + "°C";
    } else if (conversionType === "fahrenheit") {
      convertedTemperature = (temperatureInput * 9 / 5) + 32;
      document.getElementById("result").innerHTML = temperatureInput + "°C is " + convertedTemperature.toFixed(2) + "°F";
    }
  });
  
  // Reset result when the temperature input changes
  document.getElementById("temperatureInput").addEventListener("input", function() {
    document.getElementById("result").innerHTML = "";
  });
  