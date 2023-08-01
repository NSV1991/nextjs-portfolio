import { Button } from '@components/index';
import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const VideoCall = () => {
    const videoElement = useRef<HTMLVideoElement>(null);
    const remoteVideoElement = useRef<HTMLVideoElement>(null);

    const [room, setRoom] = useState<string>();
    let socket: any;
    const localStreamConstraints = {
        audio: true,
        video: true,
    };

    const getMediaStream = async (): Promise<MediaStream> => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            });
            return mediaStream;
        } catch (error) {
            console.error('Error accessing media devices:', error);
            throw error;
        }
    };

    // Function to display the user's media stream in a video element
    const displayMediaStream = (
        mediaStream: MediaStream,
        videoElement: HTMLVideoElement
    ): void => {
        videoElement.srcObject = mediaStream;
    };

    // Function to handle errors if media stream access is denied by the user
    const handleMediaStreamError = (error: any): void => {
        console.error('Error accessing media stream:', error);
    };

    // Main function to start the media capture and display the stream
    const startMediaCapture = async () => {
        try {
            const mediaStream = await getMediaStream();
            displayMediaStream(
                mediaStream,
                videoElement.current as HTMLVideoElement
            );
        } catch (error) {
            handleMediaStreamError(error);
        }
    };

    const joinRoom = () => {
        if (room !== '') {
            socket.emit('create or join', room);
            console.log('Attempted to create or  join room', room);
        }
    };

    return (
        <>
            <h1>Media Capture Example</h1>
            <input
                type='text'
                onChange={(event) => setRoom(event.target.value)}
            />
            <Button variant='primary' onClick={() => joinRoom()}>
                Join Room
            </Button>
            <div className='h-100' id='video_display'>
                <div id='video_container' className='align-items-center'>
                    <div className='local_div' id='div1'>
                        <video
                            ref={videoElement}
                            autoPlay
                            muted
                            playsInline></video>
                    </div>
                    <div className='remote_div' id='div2'>
                        <video
                            ref={remoteVideoElement}
                            autoPlay
                            playsInline></video>
                    </div>
                </div>
            </div>
            {/* <video ref={videoElement} autoPlay playsInline></video> */}
        </>
    );
};

export default VideoCall;
