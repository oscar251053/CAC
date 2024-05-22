// Función para obtener datos del clima
async function fetchWeather(city) {
    // Definir la URL de la API del clima
    const url = "https://api.openweathermap.org/data/2.5/weather";
    // Clave de API para acceder a la API del clima
    const apiKey = "21e3195e9bfeb6879e788ec605b09ab0";
    // Unidades de medida para la temperatura (en este caso, Celsius)
    const units = "metric";
    // Idioma para los datos de respuesta (en este caso, español)
    const lang = "es";

    // Realizar una solicitud GET a la API del clima
    const response = await fetch(`${url}?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`);
    // Convertir la respuesta a formato JSON
    const data = await response.json();
    // Devolver los datos del clima
    return data;
}

// Función para actualizar la tarjeta con los datos del clima
async function updateWeatherCard(city) {
    // Obtener los datos del clima para la ciudad especificada
    const weatherData = await fetchWeather(city);
    console.log(weatherData);
    // Actualizar el elemento HTML con el nombre de la ciudad
    document.getElementById("city").textContent = weatherData.name;
    // Actualizar el elemento HTML con la temperatura
    document.getElementById("temperature").textContent = weatherData.main.temp;
    // Actualizar el elemento HTML con la descripción del clima
    document.getElementById("weather").textContent = weatherData.weather[0].description;
    // Actualizar el elemento HTML con la humedad
    document.getElementById("humidity").textContent = weatherData.main.humidity;
    // Actualizar el elemento HTML con la velocidad del viento
    document.getElementById("windSpeed").textContent = weatherData.wind.speed;
}
updateWeatherCard("Buenos Aires");