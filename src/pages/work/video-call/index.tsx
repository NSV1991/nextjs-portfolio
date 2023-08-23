import React, { useEffect, useRef, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import SimplePeer from 'simple-peer';
import { Button } from '@components/index';
import { useRouter } from 'next/router';

const VideoCall: React.FC = () => {
    const router = useRouter();

    const [signalData, setSignalData] = useState<string>('');
    const localVideoRef = useRef<HTMLVideoElement>(null);
    const remoteVideoRef = useRef<HTMLVideoElement>(null);
    const [roomId, setRoomId] = useState<string>('');

    const [localStream, setLocalStream] = useState<MediaStream>();
    const [remoteStream, setRemoteStream] = useState<MediaStream>();
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io({
            path: '/api/socket',
        });

        newSocket.on('connect', () => {
            console.log('connected');
        });
        setSocket(newSocket);
        return () => {
            socket?.disconnect();
        };
    }, []);

    const handleLeaveRoom = () => {
        const roomName = 'example-room';
        socket?.emit('leaveRoom', roomName);
        console.log('Left room:', roomName);
    };

    const startVideoCall = async () => {
        try {
            if (!socket) {
                console.log('startVideoCall socket is not initialized');
                return;
            }

            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            });
            setLocalStream(stream);

            const peer = new SimplePeer({
                initiator: true,
                trickle: false,
            });

            peer.on('signal', (offer) => {
                socket.emit('makeCall', { offer, to: 'recipient-client-id' }); // Replace 'recipient-client-id' with the id of the client you want to call
            });

            peer.on('stream', (stream) => {
                setRemoteStream(stream);
            });

            socket.on('incomingCall', (data) => {
                peer.signal(data.offer);
            });

            socket.on('callAccepted', (data) => {
                peer.signal(data.offer);
            });

            socket.on('userDisconnected', () => {
                peer.destroy();
                setRemoteStream(undefined);
            });
        } catch (error) {
            console.error('Error accessing media devices:', error);
        }
    };

    const handleCallAccepted = (offer: string | SimplePeer.SignalData) => {
        if (!socket) {
            console.log('handleCallAccepted socket is not initialized');
            return;
        }

        const peer = new SimplePeer({
            initiator: false,
            trickle: false,
        });

        peer.on('signal', (answer) => {
            socket.emit('callUser', { answer, to: 'caller-client-id' }); // Replace 'caller-client-id' with the id of the caller client
        });

        peer.on('stream', (stream) => {
            setRemoteStream(stream);
        });

        peer.signal(offer);

        setSocket((prevSocket) => {
            // Remove the event listener for 'incomingCall'
            prevSocket?.off('incomingCall');
            return prevSocket;
        });

        socket.on('userDisconnected', () => {
            peer.destroy();
            setRemoteStream(undefined);
        });
    };

    const hangUp = () => {
        socket?.emit('hangUp');
        if (localStream) {
            const tracks = localStream.getTracks();
            tracks.forEach((track) => track.stop());
            setLocalStream(undefined);
        }
    };

    const handleJoinRoom = () => {
        if (roomId) {
            socket?.emit('join-room', roomId);
            router.push(`video-call/room/${roomId}`);
        }
    };

    return (
        <div>
            <div>
                {localStream && (
                    <video
                        style={{ width: '50%', margin: '1rem' }}
                        autoPlay
                        muted
                        ref={(ref) => {
                            if (ref) {
                                ref.srcObject = localStream;
                            }
                        }}
                    />
                )}
                {remoteStream && (
                    <video
                        style={{ width: '50%', margin: '1rem' }}
                        autoPlay
                        ref={remoteVideoRef}
                    />
                )}
            </div>
            <div>
                <input
                    type='text'
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    placeholder='Enter Room Name'
                />
                <Button variant='primary' onClick={handleJoinRoom}>
                    Join Room
                </Button>
            </div>
        </div>
    );
};

export default VideoCall;
