import React, {useState, useRef, useEffect} from 'react';
import './Dodgegoblin.css';

const Game = () => {
    const canvasRef = useRef(null);
    const [player, setPlayer] = useState({ x: 50, y: 175 }); //게임 주인공 위치, 위치는 실시간 변경
    const [obstacles, setObstacles] = useState([{ x: 300, y: 50 }]); //장애물 위치, 위치는 실시간 변경
    const [isRunning, setIsRunning] = useState(true); //boolean값 설정
    const playerImageRef = useRef(null);
    const obstacleImageRef = useRef(null);

    useEffect(() => {
        const playerImg = new Image();

        //컴퓨터 환경에서 public으로 시작하는 폴더에 있는 /player.png가 있으면 보여주기
        playerImg.src = process.env.PUBLIC_URL + '/player.png'; 
        
        playerImg.onload = () => { //개발자 전용으로 이미지 무사히 가져왔는지 확인하는 코드
            playerImageRef.current = playerImg;
            console.log('Player 이미지 가져오기 성공');
        };
        playerImg.onerror = () => { //개발자 전용으로 이미지 가져오지 못하면 나오는 코드
            console.error('Player 이미지 가져오기 실패');
        };

        const obstacleImg = new Image();
        obstacleImg.src = process.env.PUBLIC_URL + '/obstacle.png';
        obstacleImg.onload = () => {
            obstacleImageRef.current = obstacleImg;
            console.log('Obstacle 이미지 가져오기 실패');
        };
        obstacleImg.onerror = () => {
            console.error('Obstacle 이미지 가져오기 실패');
        };
    }, []);


    useEffect(() => {
        const handleKeyDown = (event) => {
            let newPlayer = { ...player };
            switch (event.key) {
                case 'ArrowUp': case 'w':
                    newPlayer.y = Math.max(newPlayer.y - 40, 0);
                    break;
                case 'ArrowDown': case 's':
                    newPlayer.y = Math.min(newPlayer.y + 40, canvasRef.current.height - 40);
                    break;
                case 'ArrowLeft': case 'a':
                    newPlayer.x = Math.max(newPlayer.x - 40, 0);
                    break;
                case 'ArrowRight': case 'd':
                    newPlayer.x = Math.min(newPlayer.x + 40, canvasRef.current.width - 40);
                    break;
                default:
                    break;
                }
                setPlayer(newPlayer);
            };
    
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }, [player]);
    
    
        useEffect(() => {
            const canvas = canvasRef.current; //canvas = 사진, 그림, 배경을 표현할 때 주로 씀
            const context = canvas.getContext('2d');
    
            const updateGame = () => {
                if (!isRunning) return;
    
                context.clearRect(0, 0, canvas.width, canvas.height);
    
    
                if (playerImageRef.current) { //public에 이미지가 없으면 적용
                    context.drawImage(playerImageRef.current, player.x, player.y, 40, 40);
                } else {
                    context.fillStyle = 'blue'; //public에 이미지가 없다면 40 x 40 정사각형으로 표현
                    context.fillRect(player.x, player.y, 10, 10);
                }
    
    
                let newObstacles = obstacles.map(obstacle => ({
                    ...obstacle,
                    x: obstacle.x - 5
                })).filter(obstacle => obstacle.x > 0);
    
    
                newObstacles.forEach(obstacle => {
                    if (obstacleImageRef.current) {
                        context.drawImage(obstacleImageRef.current, obstacle.x, obstacle.y, 40, 40);
                    } else {
                        context.fillStyle = 'red';
                        context.fillRect(obstacle.x, obstacle.y, 40, 40);
                    }
    
                    if (
                        player.x < obstacle.x + 40 &&
                        player.x + 40 > obstacle.x &&
                        player.y < obstacle.y + 40 &&
                        player.y + 40 > obstacle.y
                    ) {
                        setIsRunning(false);
                    }
                });
    
                setObstacles(newObstacles);
            };
            const interval = setInterval(updateGame, 1000 / 60); 
        return () => clearInterval(interval);
    }, [player, obstacles, isRunning]);
    useEffect(() => {
        const addObstacle = () => {
            if (!isRunning) return;

            const newObstacle = {
                x: canvasRef.current.width,
                y: Math.random() * (canvasRef.current.height - 40) 
            };
            setObstacles(prevObstacles => [...prevObstacles, newObstacle]);
        };

        const interval = setInterval(addObstacle, 400); 
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div className="game-container">
            {/* 
            canvas는 동영상, 사진을 보여줄 때 보여줄 틀을 제공
                -> 여기서는 게임의 틀을 제공
             */}
            <canvas ref={canvasRef} width="600" height="400" className="game-canvas" />
            <button onClick={() => setIsRunning(!isRunning)} className="game-button">
                {isRunning ? 'Pause' : 'Start'}
            </button>
            {!isRunning && <h2>Game Over</h2>}
        </div>
    );
};

export default Game;
