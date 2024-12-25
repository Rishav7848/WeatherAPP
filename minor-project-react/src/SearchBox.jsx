import { useState } from "react";

export default function SearchBox({ UpdateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "c99ab7e7f358d9d92c86abf34636aedc";

  const getWeatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await res.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      let newinfo = await getWeatherInfo();
      UpdateInfo(newinfo);
      setError(false);
      setCity(""); // Clear input field
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            id="city"
            type="text"
            placeholder="Search weather of your city"
            value={city}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Search
          </button>
        </form>
        {error && (
          <p className="mt-4 text-center text-red-500 font-semibold">
            No such place found! Try another city.
          </p>
        )}
      </div>
    </div>
  );
}


