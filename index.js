import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/books/search", async (req, res) => {
    try {
        const wordToSearch = req.query.wordToSearch;
        const result = await axios.get(`${apiUrl}/books?filter[title_cont]=${wordToSearch}`);
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

app.get("/characters/search", async (req, res) => {
    try {
        const wordToSearch = req.query.wordToSearch;
        const result = await axios.get(`${apiUrl}/characters?filter[name_cont]=${wordToSearch}`);
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

app.get("/movies/search", async (req, res) => {
    try {
        const wordToSearch = req.query.wordToSearch;
        const result = await axios.get(`${apiUrl}/movies?filter[title_cont]=${wordToSearch}`);
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

app.get("/potions/search", async (req, res) => {
    try {
        const wordToSearch = req.query.wordToSearch;
        const result = await axios.get(`${apiUrl}/potions?filter[name_cont]=${wordToSearch}`);
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

app.get("/spells/search", async (req, res) => {
    try {
        const wordToSearch = req.query.wordToSearch;
        const result = await axios.get(`${apiUrl}/spells?filter[name_cont]=${wordToSearch}`);
        res.render("index.ejs", {result: result.data});
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});