const { WebSocketServer } = require('ws');


const wss = new WebSocketServer({ port: 8080 });

wss.on('listening', () => console.log('Backend online!'));

wss.on('connection', client => {
    console.log('client connected!');

    client.on('message', message => {
        /*
        {
            username: string;
            imageId: number;
            message: string;
        }
        */

       console.log(`Got message: ${message.toString('utf-8')}`);

       let data;

       try {
            data = JSON.parse(message.toString('utf-8'));
           
       } catch (e) { return; } //epic validator

       if (data.username && data.message) {
           console.log('sending to clients');
           wss.clients.forEach(client => client.send(JSON.stringify(data)));
       }

    });

});