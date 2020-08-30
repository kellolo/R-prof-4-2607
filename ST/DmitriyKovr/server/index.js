const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const server = express();
server.use(bodyParser.json());


function asyncRead(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            resolve(JSON.parse(data));
        });
    });
};


server.use('/chats', async (req, res, next) => {
    req.chats = await asyncRead('./server/db/chats.json');
    next();
});

server.get('/chats', (req, res) => {
    const chats = req.chats;
    res.json(chats);
});

server.post('/chats/add-chat', (req, res) => {
    const chats = req.chats;
    const id = +chats[chats.length - 1].id + 1;
    const chat = { id, 'title': req.body.title, messageList:[]};
    chats.push(chat);
    fs.writeFile('./server/db/chats.json', JSON.stringify(chats, null, ' '), err => {
        if (!err) {
            res.json(chat);
        }
    })
});

server.post('/chats/send-msg', (req, res) => {
    let chats = req.chats;
    const { text, sender, chatId } = req.body;
    
    const chat = chats.find( item => item.id === chatId );
    const { messageList } = chat;
    
    const messListlength = messageList.length - 1;
    let id = `${chatId}_1`;
    if (messListlength >= 0) {
        id = ''+ chatId + '_' + (+messageList[messListlength].id.replace(chatId + '_', '') + 1);
    };
    
    const message = { id, text, sender };
    chat.messageList.push(message);
    
    chats = chats.map( item => {
        if (item.id === chatId) {
            return chat;
        }
        return item;
    });
    fs.writeFile('./server/db/chats.json', JSON.stringify(chats, null, ' '), err => {
        if (!err) {
            res.json([chat]);
        }
    })
});


server.listen(3000, () => {
    console.log('Server has been started.. port: 3000'); 
});