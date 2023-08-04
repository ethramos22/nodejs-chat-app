const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const response = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "743f3753-8dbd-4544-a1e7-289e77c6d4c8" } }
        );
        return res.status(response.status).json(response.data);
    }
    catch (error) {
        return res.status(error.response.status).json(response.data);
    }
});


app.listen(3001);