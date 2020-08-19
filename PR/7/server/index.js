const express = require('express');
//основной конструктор будущего сервера
const fs = require('fs');
//модуль для работы с fileStream - чтение/запись файлов

const server = express();

// server.use('/', express.static('dist'));
//для финальной реализации (после финальной сборки)

//for dev
// server.get('/', (req, res) => {
//     res.send("Hello server")
// })

server.get('/chat/:id', (req, res) => {
    fs.readFile(`./server/db/chat_${req.params.id}.json`, 'utf-8', (err, data) => {
        if (!err) {
            data = JSON.parse(data);
            res.json(data);
        }
    })
})

server.post('/chat/:id', (req, res) => {
    fs.readFile(`./server/db/chat_${req.params.id}.json`, 'utf-8', (err, data) => {
        if (!err) {
            data = JSON.parse(data);
            data[req.body.messageId] = { sender: req.body.sender, text: req.body.text }
            fs.writeFile(`./server/db/chat_${req.params.id}.json`, JSON.stringify(data, null, ' '), err => {
                if (!err) {
                    res.json({ status: true });
                }
            })
        }
    })
});

server.listen(3000, () => { console.log('Server @ port 3000...') });