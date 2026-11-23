import express from "express";
import dotenv from "dotenv";

// 환경설정 파일을 불러오는 도구가 필요함 => 그래서 설치한게 dotenv 패키지
// 환경설정 파일을 불러오는 dotenv 패키지 호출
dotenv.config();

// 백엔드를 구성하는 express 패키지를 이용해 앱 만들기
const app = express();

// 환경변수 중 key가 PORT인 값을 가져옴
// 프로그램을 실행한 입장에서 PORT는 있을 수도 있고, 없을 수도 있는 상황
// PORT라는 환경변수는 프로그램에 포함된게 아니라 .env라는,
// 자바스크립트 엔진이 관장하는 영역이 아니기 때문

// VITE(react)에서 환경변수 값을 불러오는건  import.meta.env.VITE_PORT
// dotenv(express)에서 환경변수 값을 불러오는건  process.env.PORT
// PORT라는 변수에 값이 string | undefined 3가지 경우,
// 1. PORT = 8000 (숫자)
// 2. PORT = FADFA (숫자가 아닌 string)
// 3. PORT = undefined
const PORT = process.env.PORT;

if (isNaN(Number(PORT))){
    console.log( "PORT에 오류가 존재합니다.");
    // 프로그램 종료 코드
    process.exit(1);
}
// 실제 app을 구동
// app.listen(여는 포트번호, 서버가 실행되면서 해야되는 함수)
//localhost의 8000포트로 접속했더니, 접속은 됐음. 다만 express가 지금 아무런 일을 해주지 못함
app.listen( PORT, () => {
    console.log(`서버 실행됨! http://localhost:${PORT}`);
});

