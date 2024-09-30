import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const WeatherData = () => {
    const { state } = useLocation();
    const { data } = state;
    const icon = data.weather[0].icon;
    const icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
            <div className="bg-white shadow-md rounded-lg p-5 text-center">
                <h1 className="text-3xl font-bold mb-2">
                    {data.name}, {data.sys.country}
                </h1>
                <div className="flex flex-col items-center mb-4">
                    <img
                        src={icon_url}
                        alt={data.weather[0].main}
                        className="w-24 h-24"
                    />
                    <h3 className="text-lg font-semibold mt-2">
                        {data.weather[0].description}
                    </h3>
                </div>
                <div className="justify-around mb-4">
                    <h1 className="text-lg font-bold">
                        Temp: {data.main.temp}°F
                    </h1>
                    <h1 className="text-lg font-bold">
                        Humidity: {data.main.humidity}%
                    </h1>
                    <h1 className="text-lg font-bold">
                        Feels Like: {data.main.feels_like}°F
                    </h1>
                </div>
                <button
                    onClick={back}
                    className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default WeatherData;
