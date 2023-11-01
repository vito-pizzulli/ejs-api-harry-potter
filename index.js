import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

const apiUrl = "https://api.potterdb.com/v1";

app.get("/", (req, res) => {
    res.render("index.ejs", {result: {}});
});

app.get("/books/page/:page", async (req, res) => {
    try {
        const page = req.params.page;
        const result = await axios.get(`${apiUrl}/books?page[number]=${page}&page[size]=25`);
        res.render("index.ejs", {result: result.data});
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
})

app.get("/characters/page/:page", async (req, res) => {
    try {
        const page = req.params.page;
        const result = await axios.get(`${apiUrl}/characters?page[number]=${page}&page[size]=25`);
        res.render("index.ejs", {result: result.data});
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
})

app.get("/movies/page/:page", async (req, res) => {
    try {
        const page = req.params.page;
        const result = await axios.get(`${apiUrl}/movies?page[number]=${page}&page[size]=25`);
        res.render("index.ejs", {result: result.data});
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
})

app.get("/potions/page/:page", async (req, res) => {
    try {
        const page = req.params.page;
        const result = await axios.get(`${apiUrl}/potions?page[number]=${page}&page[size]=25`);
        res.render("index.ejs", {result: result.data});
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
})

app.get("/spells/page/:page", async (req, res) => {
    try {
        const page = req.params.page;
        const result = await axios.get(`${apiUrl}/spells?page[number]=${page}&page[size]=25`);
        res.render("index.ejs", {result: result.data});
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});