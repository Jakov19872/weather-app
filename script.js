document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '7100c96556194479b07144613241808'; // Replace with your WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = data.current;
            document.getElementById('weatherResult').innerHTML = `
                <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${weather.temp_c}°C</p>
                <p>Condition: ${weather.condition.text}</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `
                <p>Could not fetch weather data. Please try again later.</p>
            `;
            console.error('Error fetching weather data:', error);
        });
});
