<div align="center">
  <h3 align="center">Baobab Frontend Server</h3>

  <p align="center">
    바오밥 서비스의 UI를 제공합니다. <br/> 
    개발자들을 위한 반응형 Web Application Blog Service입니다. <br/>
    <br />
    <a href="https://github.com/baobab-kr/front-server"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://qa.baobab.blog">View Demo</a>
    ·
    <a href="https://github.com/baobab-kr/front-server/issues">Report Bug</a>
    ·
    <a href="https://github.com/baobab-kr/front-server/issues">Request Feature</a>
  </p>
</div>

## Installation

해당 섹션에서는 API 서버를 로컬에 설치하는 방법을 안내합니다. <br/>
이미 도커 엔진이 로컬 PC에 설치되어 있음을 가정하에 제작되었습니다. <br/>

- Clone the repo
  ```sh
  git clone https://github.com/baobab-kr/front-server.git
  ```
- Docker Container build and Run

  ```sh
    docker build -t blog_front .
  ```

  ```sh
    docker run -d -p 2999:2999 blog_front
  ```

  <br/>

## How to Test

컨테이너를 동작 시킨 후 웹 브라우저로 https://localhost:2999/ 접속하여 테스트해 보실 수 있습니다. <br/>
<br/>
<br/>

## Environment Table

| Variable           | dev | qa/prod |        Example         | Explanation                                    |
| ------------------ | :-: | :-----: | :--------------------: | ---------------------------------------------- |
| NODE_ENV           | ✅  |   ✅    |      development       | Nodejs의 실행 환경을 지정합니다.               |
| REACT_APP_API_ROOT | ✅  |   ✅    | http://localhost:3000/ | Backend API의 도메인과 포트 번호를 지정합니다. |
| PORT               | ✅  |   ✅    |          2999          | Frontend의 포트 번호를 지정합니다.             |
| GENERATE_SOURCEMAP | ✅  |   ✅    |         false          | 디버깅을 위한 파일의 생성 여부를 지정합니다.   |
