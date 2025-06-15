async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "d8913ccac16e1373e5d64bafd8b81458"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod !== 200) {
        document.getElementById("weatherResult").innerHTML = "City not found!";
        return;
      }
  
      const weatherHtml = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
          <p>🌡️ Temperature: ${data.main.temp} °C</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
        `;
  
      document.getElementById("weatherResult").innerHTML = weatherHtml;
    } catch (error) {
      document.getElementById("weatherResult").innerHTML =
        "Error fetching weather!";
    }
  }
  