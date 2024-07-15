

function App() {
  return (
    <>
    <h1>백엔드 스프링과 연결하기</h1>
    <pre>
      package.json에

      ,
      "proxy" : "http://localhost:9090" 
      
      를 추가해주면 9090 포트로 연결한 스프링부트와 연결할 수 있음

      package.json에서 proxy의 위치는 크게 중요하지 않으나 각 요소들의 중괄호 안에 작성하면 안됨
    </pre>
    </>
  );
}

export default App;
