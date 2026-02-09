// 1. http 모듈(Node.js 내장 도구)을 불러옵니다.
const http = require('http');

// 2. 서버가 응답할 주소와 포트를 설정합니다.
const hostname = '127.0.0.1'; // 내 컴퓨터(localhost)
const port = 3000;            // 3000번 포트 개방

// 3. 서버 객체를 생성합니다.
const server = http.createServer((req, res) => {
  // 클라이언트(브라우저)가 요청을 보내면 실행되는 부분입니다.
  res.statusCode = 200;                // 성공 응답 (HTTP 200 OK)
  res.setHeader('Content-Type', 'text/html; charset=utf-8'); // 한글 깨짐 방지
  
  // 브라우저 화면에 보낼 내용입니다.
  res.end('<h1>안녕하세요, Jacob님!</h1><p>Node.js 서버가 성공적으로 가동되었습니다. 🚀</p>');
});

// 4. 서버를 실행하여 대기 상태로 만듭니다.
server.listen(port, hostname, () => {
  console.log(`서버가 가동되었습니다: http://${hostname}:${port}/`);
});