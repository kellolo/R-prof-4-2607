const express = require('express');
//основной конструктор будущего сервера
const fs = require('fs');
//модуль для работы с fileStream - чтение/запись файлов

const server = express();

server.use(express.json());
// server.use('/', express.static('dist'));
//для финальной реализации (после финальной сборки)

//for dev
// server.get('/', (req, res) => {
//     res.send("Hello server")
// })

server.get('/chat/:id', (req, res) => {
    fs.readFile(`./server/db/chat_${req.params.id}.json`, 'utf-8', (err, data) => {
        console.log(data)
        if (!err) {
            data = JSON.parse(data);
            res.json(data);
        }
    })
})

server.post('/chat/:id', (req, res) => {
    fs.readFile(`./server/db/chat_${req.params.id}.json`, 'utf-8', (err, data) => {
        if (!err) {
            console.log(data)
            data = JSON.parse(data);
            let id = `chat_${req.params.id}_${data.length}`;
            // data[req.body.messageId] = { sender: req.body.sender, text: req.body.text }
            data.push({ sender: req.body.sender, text: req.body.text, id });
            fs.writeFile(`./server/db/chat_${req.params.id}.json`, JSON.stringify(data, null, ' '), err => {
                if (!err) {
                    res.json({ id });
                }
            })
        }
    })
});

server.listen(3300, () => { console.log('Server @ port 3000...') });