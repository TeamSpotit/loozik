const express = require("express");
const app = express();
const port = process.env || 3000;

app.get("/", (req, res) => {
    res.send(`Server is running`);
})
app.get("*", (req, res) => {
    res.send(`Oops! 404`);
})

function keepAlive(){
    app.listen(port, () => {
         console.log(`Server is running on port:${port}`);
    })
}
module.exports = keepAlive;
