import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    feelsLike: 24.84,
    weather: "haze",
  });

  const UpdateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r  text-white">
      <div className="w-full p-2 bg-white rounded-lg shadow-md text-gray-900">
        <h1 className="text-3xl font-bold text-center mb-2">Weather App</h1>
        <div className=" w-full min-h-screen ">
            <div>
            <SearchBox UpdateInfo={UpdateInfo} />
            </div>
            <div>
            <InfoBox info={weatherInfo} />
            </div>
        </div>
      </div>
    </div>
  );
}

// import SearchBox from "./SearchBox.jsx";
// import InfoBox from "./InfoBox.jsx";
// import { useState } from "react";

// export default function WeatherApp(){
//     const [weatherInfo,setweatherInfo]=useState({
//         city:"Delhi",
//         temp:25.05,
//         tempMin:25.05,
//         tempMax:25.05,
//         humidity:47,
//         feelsLike:24.84,
//         weather:"haze",
//     });
//     let UpdateInfo=(newinfo)=>{
//         setweatherInfo(newinfo);
//     }
//     return(
//         <div>
//             <SearchBox UpdateInfo={UpdateInfo}/>
//             <InfoBox info={weatherInfo}/>
//         </div>
//     )
// }