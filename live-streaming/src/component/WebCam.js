import React, { useRef, useState } from 'react';

const Webcam = () => {
    const videoRef = useRef(null);
    const [isStreaming, setIsStreaming] = useState(false);

    const startStreaming = () => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                let video = videoRef.current;
                if (video) {
                    video.srcObject = stream;
                    video.addEventListener('loadedmetadata', () => {
                        video.play().catch(error => {
                            console.log('자동 재생이 차단되었습니다:', error);
                        });
                    });
                    setIsStreaming(true); // 스트리밍 상태를 true로 변경
                }
            })
            .catch((error) => {
                console.log('카메라 액세스 오류:', error);
            });
    };

    const stopStreaming = () => {
        let video = videoRef.current;
        if (video) {
            const stream = video.srcObject;
            if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
            }
            video.srcObject = null;
            setIsStreaming(false); // 스트리밍 상태를 false로 변경
        }
    };

    const toggleStreaming = () => {
        if (isStreaming) {
            stopStreaming();
        } else {
            startStreaming();
        }
    };

    return (
        <div className='webcam-layout-container'>
            <video className='webcam-container' ref={videoRef} autoPlay muted playsInline style={{ display: isStreaming ? 'block' : 'none' }} />
            <button onClick={toggleStreaming}>
                {isStreaming ? 'Streaming close' : 'Streaming Begin'}
            </button>
        </div>
    );
};

export default Webcam;
