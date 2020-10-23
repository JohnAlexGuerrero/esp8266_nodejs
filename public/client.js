const socket = io();

//DOM elments

let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', () =>{
    console.log(username.value , ' ', message.value);

    socket.emit('chat:message', {
        message: message.value,
        username: username.value
    });

    socket.on('server:chat:message', (message)=>{
        output.innerHTML += `<p>
        <strong>${message.username}</strong>:${message.message}</p>`;
    })
})