import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  let summerimg =
    "https://plus.unsplash.com/premium_photo-1663127675069-2a52f0eb9c75?w=600&auto=format&fit=crop&q=60";
  let rainyimg =
    "https://images.unsplash.com/photo-1691265690307-47c9a0cffb0a?w=600&auto=format&fit=crop&q=60";
  let winterimg =
    "https://images.unsplash.com/photo-1577457943926-11193adc0563?w=600&auto=format&fit=crop&q=60";

  const weatherIcon =
    info.humidity > 80 ? (
      <ThunderstormIcon className="text-yellow-400" />
    ) : info.temp > 30 ? (
      <WbSunnyIcon className="text-yellow-500" />
    ) : (
      <AcUnitIcon className="text-blue-400" />
    );

  const weatherImg =
    info.humidity > 80 ? rainyimg : info.temp > 30 ? summerimg : winterimg;

  return (
    <div className="bg-gradient-to-br flex items-center justify-center py-2 w-full">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-48">
          <img
            className="w-full h-full object-cover"
            src={weatherImg}
            alt="weather condition"
          />

          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-white text-xl font-semibold">{info.city}</h1>
            <span className="ml-2">{weatherIcon}</span>
          </div>
        </div>
        <div className="p-2">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-800">
              Current Weather
            </h2>
          </div>
          <div className="mt-2 flex flex-col space-y-1 text-balance">
            <p className="text-gray-700">
              Temperature:{" "}
              <span className="font-semibold">{info.temp}&deg;C</span>
            </p>
            <p className="text-gray-700">
              Min Temp:{" "}
              <span className="font-semibold">{info.tempMin}&deg;C</span>
            </p>
            <p className="text-gray-700">
              Max Temp:{" "}
              <span className="font-semibold">{info.tempMax}&deg;C</span>
            </p>
            <p className="text-gray-700">
              Humidity: <span className="font-semibold">{info.humidity}%</span>
            </p>
            <p className="text-gray-700">
              Feels Like:{" "}
              <span className="font-semibold">{info.feelsLike}&deg;C</span>
            </p>
            <p className="text-gray-700">
              Weather: <span className="font-semibold">{info.weather}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

