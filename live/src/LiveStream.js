import React, { useEffect, useRef } from 'react';

const LiveStream = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    };

    startStream();
  }, []);

  return (
    <div>
      <h1>Live Streaming</h1>
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%' }} />
    </div>
  );
};

export default LiveStream;