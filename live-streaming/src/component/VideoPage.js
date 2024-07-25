import { useRef } from 'react';
import videojs from 'video.js';
import VideoComponent from './VideoComponent';
import { useState } from 'react';

const VideosPage = () => {
  const [videoState, setVideoState] = useState('초기 메세지');
  const playerRef = useRef(null);

  const videoOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: 'http://vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
      setVideoState('동영상이 대기 중입니다.');
    });

    player.on('playing', () => {
      videojs.log('player is going now');
      setVideoState('동영상이 재생 중입니다.');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <ContentsLayout>
      <div>{videoState}</div>
      <Style.VideoPlayerBox>
        <VideoComponent
          options={videoOptions}
          onReady={handlePlayerReady}
          videoState={videoState}
          setVideoState={setVideoState}
        />
      </Style.VideoPlayerBox>
    </ContentsLayout>
  );
};

export default VideosPage;
