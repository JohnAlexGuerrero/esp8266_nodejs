const express = require('express');
const path = require('path');
const app = express();
const SocketIO = require('socket.io');
const port = 3000;

//settings
app.set('port', process.env.PORT || 3000);

//static
app.use(express.static(path.join(__dirname, 'public')));

//router


//start server

const server = app.listen(port, ()=>{
    console.log('Server escuchando en el puerto %s', port);
});

//websocket
const io = SocketIO(server);

io.on('connection', (socket) => {
    console.log('nueva conexion el ID del socket es ', socket.id);

    socket.on('disconnet', (socket)=>{
        console.log('el socket se ha desconectado ', socket.id);
    });

    socket.on('chat:message', (message)=>{
        console.log('ha llegado un nuevo mensaje ', message);
        io.emit('server:chat:message', message);
    });

    
});