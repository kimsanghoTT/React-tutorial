import videojs from 'video.js';
import {useRef, useEffect} from 'react';
import 'video.js/dist/video-js.css'

const VideoComponent = ({options, onReady, setVideoState}) => {

    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        //비디오 플레이어가 한 번만 초기화
        if(!playerRef.current){
            const videoElement = document.createElement('video-js');

            videoElement.classList.add('vjs-big-play-centered');
            videoRef.current.appendChild(videoElement);

            const player = (playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                setVideoState('동영상 재생이 준비되었습니다.');
                onReady && onReady(player);
            }));
        }
        else{
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.sources);
        }
    }, []);

    //컴포넌트 언마운트 시 플레이어 삭제
    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if(player && !player.isDisposed()){
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);

    return(
        <div data-vjs-player>
            <div ref={videoRef}/>
        </div>
    )
}
export default VideoComponent;