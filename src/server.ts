import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';

const PORT = process.env.PORT ?? 8888;
const HOST = process.env.HOST ?? 'localhost';

const buildPath = path.resolve(process.cwd(), 'build');
const indexFile = path.resolve(buildPath, 'index.html');

const app = express();
app.use(buildPath);

const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => res.sendFile(indexFile));

io.on('connection', socket => {
  console.log('a user connected');
});

server.listen(PORT, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});
