const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 10000;
const axios = require("axios");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/", async (req, res) => {
    const { city, country } = req.body;

    try {
        if (city) {
            // Validate the city and country
            const query = country ? `${city},${country}` : city;
            const weather = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.api_key}&units=imperial`
            );
            return res.send(weather.data);
        } else {
            return res
                .status(400)
                .json({ message: "No valid input provided!" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "An error occurred while fetching the weather.",
        });
    }
});

app.listen(port, () => {
    console.log(`The server is running on ${port}`);
});
