const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data)

        // if (mensaje.usuario)
        //     callback({
        //         resp: 'OK'
        //     });
        // else
        //     callback({
        //         resp: 'FAIL'
        //     });

    });

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido a esta APP'
    })
});