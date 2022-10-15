require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const path = require('path')

app.use(cors())

app.use(express.static(path.join(__dirname + "/public")));

app.listen(PORT, () => {
    console.log("Server started on port: " + PORT);
})

const fetchHeaders = {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": process.env.API_KEY,
};

app.get("/countries", (req, res) => {
    async function fetchCountries() {
        const responseAPI = await fetch("https://v3.football.api-sports.io/countries", {
            method: "GET",
            headers: fetchHeaders,
        });

        try {
            const data = await responseAPI.json();
            res.send(data.response);
        } catch (error) {
            console.log("Error:" + error);
            res.send("error");
        }
    }
    fetchCountries();
})
app.get("/teams/:countryName", (req, res) => {
    async function fetchTeamsFromCountry() {
        const responseAPI = await fetch(
            `https://v3.football.api-sports.io/teams?country=${req.params.countryName}`,
            {
                method: "GET",
                headers: fetchHeaders
            }
        );

        try {
            const data = await responseAPI.json();
            res.send(data.response);
        } catch (error) {
            res.send("error");
            console.log(error);
        }
    }
    fetchTeamsFromCountry();
})

app.get("/league/:teamID", (req, res) => {
    async function fetchLeagueByTeamID() {
        const responseAPI = await fetch(
            `https://v3.football.api-sports.io/leagues?team=${req.params.teamID}&type=league&current=true`,
            {
                method: "GET",
                headers: fetchHeaders
            }
        );

        try {
            const data = await responseAPI.json();
            res.send(data.response);
        } catch (error) {
            res.send("error");
        }

    }
    fetchLeagueByTeamID();
})

app.get("/standings/:leagueID", (req, res) => {
    async function fetchStandings() {
        const responseAPI = await fetch(
            `https://v3.football.api-sports.io/standings?league=${req.params.leagueID
            }&season=${new Date().getFullYear()}`,
            {
                method: "GET",
                headers: fetchHeaders
            }
        );

        try {
            const data = await responseAPI.json();
            res.send(data.response);
        } catch (error) {
            res.send("error");
            console.log(error);
        }
    }
    fetchStandings();
})

app.get("/fixtures/:teamID", (req, res) => {
    async function fetchFixturesByTeamID() {
        const responseAPI = await fetch(
            `https://v3.football.api-sports.io/fixtures?team=${req.params.teamID
            }&season=${new Date().getFullYear()}`,
            {
                method: "GET",
                headers: fetchHeaders
            }
        );


        try {
            const data = await responseAPI.json();
            res.send(data.response);
        } catch (error) {
            res.send("error");
            console.log(error);
        }

    }

    fetchFixturesByTeamID();
})


