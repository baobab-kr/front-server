# nodejs 버전 설정
FROM node:16-alpine

# 내부 작업 경로 설정
WORKDIR /usr/src/app

# 필수 패키지 파일을 이미지 내부로 복시
COPY package*.json ./

# 설치
RUN npm i

# 복사
COPY . .

# 빌드
#RUN npm run build

CMD ["npm", "run", "start:dev"]