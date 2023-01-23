import dotenv from 'dotenv';
import { httpServer } from './src/http_server';
import { initWSServer } from './src/ws_server';

dotenv.config();

const HTTP_PORT = process.env['HTTP_PORT'] || 8181;
const WS_PORT = process.env['WS_PORT'] || 8080;

httpServer.listen(HTTP_PORT);
console.log(`Start static http server on the ${HTTP_PORT} port!`);

initWSServer(+WS_PORT);
