import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import WeatherData from "./components/WeatherData";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/weather" element={<WeatherData />} />
            </Routes>
        </div>
    );
}

export default App;
