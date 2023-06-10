    const currentButton = document.querySelector("#Currentbtn");
    const searchButton = document.querySelector("#Searchbtn");
    const cityInput = document.querySelector("#cityInput");
    const cityElement = document.querySelector("#city");
    const temperatureElement = document.querySelector("#temperature");
    const dateElement = document.querySelector("#date");
    const timeElement = document.querySelector("#time");
    const humidityElement = document.querySelector("#humidity");
    const windElement = document.querySelector("#wind");
    const weatherElement = document.querySelector("#weather");

    currentButton.addEventListener("click", function(e) {
        e.preventDefault()
        console.log("click");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCurrentWeatherData);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });

    searchButton.addEventListener("click", function(e) {
      e.preventDefault();
      const city = cityInput.value.trim();

      if (city !== "") {
        getWeatherData(city);
      }
    });

    function getCurrentWeatherData(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const apiKey = "d0e31a06c60d125988f52749a1dcd56f";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

         axios.get(apiUrl)
        .then(response => {
          const data = response.data;
          const city = data.name;
          const temperature = data.main.temp;
          const humidity = data.main.humidity;
          const windSpeed = data.wind.speed;
          const weatherDescription = data.weather[0].description;

          const currentDate = new Date();
          const date = currentDate.toDateString();
          const time = currentDate.toLocaleTimeString();

          cityElement.textContent = `City: ${city}`;
          temperatureElement.textContent = `Temperature: ${temperature}°C`;
          dateElement.textContent = `Date: ${date}`;
          timeElement.textContent = `Time: ${time}`;
          humidityElement.textContent = `Humidity: ${humidity}%`;
          windElement.textContent = `Wind Speed: ${windSpeed} m/s`;
          weatherElement.textContent = `Weather: ${weatherDescription}`;
        })
        .catch(error => {
          console.log("Error:", error);
        });
    }

    function getWeatherData(city) {
      const apiKey = "d0e31a06c60d125988f52749a1dcd56f";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

         axios.get(apiUrl)
        .then(response => {
            const data = response.data;
          const temperature = data.main.temp;
          const humidity = data.main.humidity;
          const windSpeed = data.wind.speed;
          const weatherDescription = data.weather[0].description;

          const currentDate = new Date();
          const date = currentDate.toDateString();
          const time = currentDate.toLocaleTimeString();

          cityElement.textContent = `City: ${city}`;
          temperatureElement.textContent = `Temperature: ${temperature}°C`;
          dateElement.textContent = `Date: ${date}`;
          timeElement.textContent = `Time: ${time}`;
          humidityElement.textContent = `Humidity: ${humidity}%`;
          windElement.textContent = `Wind Speed: ${windSpeed} m/s`;
          weatherElement.textContent = `Weather: ${weatherDescription}`;
        })
        .catch(error => {
          console.log("Error:", error);
        });
    }