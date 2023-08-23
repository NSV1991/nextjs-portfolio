import { Server } from 'socket.io';

const joinRoomListener = (socket, rooms) => {
    // When someone attempts to join the room
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId); // Join the room
        rooms[socket.id] = roomId;
        socket.broadcast.emit('user-connected', userId); // Tell everyone else in the room that we joined

        // Communicate the disconnection
        socket.on('disconnect', () => {
            const room = rooms[socket.id];
            if (room) {
                socket.broadcast.emit('user-disconnected', userId);
                delete rooms[socket.id];
            }
        });
    });
};

const SocketHandler = (req, res) => {
    try {
        if (res.socket.server.io) {
            console.log('Socket is already running');
        } else {
            console.log('Socket is initializing');
            const io = new Server(res.socket.server, {
                path: '/api/socket',
                addTrailingSlash: false,
            });
            const rooms = {};
            io.on('connection', (socket) => {
                // When someone attempts to join the room
                joinRoomListener(socket, rooms);
            });
            res.socket.server.io = io;
        }
        res.status(200);
    } catch (error) {
        console.log('error:', error);
        res.status(500);
    }
};

export default SocketHandler;
