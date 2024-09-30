import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [zipcode, setZipcode] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCity("");
        setCountry("");
        setZipcode("");

        const payload = zipcode ? { zipcode } : { city, country };

        try {
            const weatherData = await axios.post(
                "http://localhost:5000", // Replace with your server URL
                payload
            );
            navigate("/weather", { state: { data: weatherData.data } });
        } catch (error) {
            alert("Invalid input!");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
            <Link to="/">
                <h1 className="text-center p-5 text-4xl font-bold">
                    ENTER CITY NAME
                </h1>
            </Link>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full max-w-md p-4 bg-white shadow-md rounded-lg"
            >
                <input
                    className="p-3 mb-3 border border-green-500 rounded focus:outline-none focus:border-green-600"
                    value={city}
                    type="text"
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City..."
                />
                <input
                    className="p-3 mb-3 border border-green-500 rounded focus:outline-none focus:border-green-600"
                    value={country}
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Country..."
                />
                <button
                    type="submit"
                    className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default Form;
