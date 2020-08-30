const express = require("express");
const fs = require("fs");

const server = express();




// для отображения собранного проекта в виде html, css, js
// server.use("/", express.static("dist"));

// server.get("/", (req, res) => {
//     res.send("hello server")
// });

server.get("/chat/:id", (req, res) => {
    let data = fs.readFile(`./server/db/chat_${req.params.id}.json`, "utf-8", (err, data) => {
        if (!err) {
            res.send(data)
        }
    })
});
server.listen(3000, () => {console.log("Server @ port 3000...") });