import { WebSocketServer, createWebSocketStream } from 'ws';
import dotenv from 'dotenv';
import { runCommands } from './commands'; 

dotenv.config();

export const initWSServer = (port: number) => {
    const WSServer = new WebSocketServer({ port });

    WSServer.on('connection', (ws) => {
        console.log(`Websocket server on the ${port} port!`);

        const duplex = createWebSocketStream(ws, {
            decodeStrings: false,
            defaultEncoding: 'utf8'
        });


        duplex.on('data', async (message) => {
            try {   
                const results = await runCommands(message.toString());
                console.log('message', message.toString());
                console.log(`Command result: ${results}`);
    
                duplex.write(results);
            } catch (error) {
                console.error(error);
            }
        });
    });
}
