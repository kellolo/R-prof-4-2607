const express = require('express');
const fs = require('fs');

const server = express();


server.get('/chat/:id', (req, res) => {
    fs.readFile(`./server/db/chat_${req.params.id}.json`, 'utf-8', (err, data) => {
        if (!err) {
            //data = JSON.parse(data);
            //res.json(data);
            res.json(JSON.parse(data));
        }
    })
});

server.get('/messages', (req, res) => {
    fs.readFile(`./server/db/messages.json`, 'utf-8', (err, data) => {
        if (!err) {
            //data = JSON.parse(data);
            //res.json(data);
            res.json(JSON.parse(data));
        }
    })
});

server.get('/chats', (req, res) => {
    fs.readFile(`./server/db/chats.json`, 'utf-8', (err, data) => {
        if (!err) {
            //data = JSON.parse(data);
            //res.json(data);
            res.json(JSON.parse(data));
        }
    })
});

server.listen(3000, () => {
    console.log('Server @ port 3000...'); 
});