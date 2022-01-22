import { io } from 'socket.io-client';

const Socket = (connectionUrl:string) => {
    const socket = io(connectionUrl);
    return socket;
}

export default Socket('http://localhost:8000');