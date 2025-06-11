# 🎨 Random Color Generator Web App


이 프로젝트는 **Flask + SQLite + Docker**를 활용한 웹 애플리케이션입니다.  
사용자는 버튼을 눌러 배경색을 변경하고, 기분을 선택하여 응원 메시지를 받을 수 있으며, 페이지 체류 시간도 실시간으로 확인할 수 있습니다.


---


## 📌 주요 기능


- 🎨 **랜덤 배경색 변경 및 저장**
- 🧠 **기분 선택 → 감정 이모지 + 응원 멘트 출력**
- ⏱ **페이지 체류 시간 실시간 표시**
- 📋 **색상 코드 복사 기능**
- 🧩 **Flask 기반 동적 페이지 구현**
- 🛢 **SQLite 데이터베이스 연동 (Docker 내부에서 자동 생성 및 유지)**
- 🐳 **Docker + Docker Compose로 컨테이너화 및 재현 가능한 실행 환경 제공**


---


## 📂 프로젝트 구조


random-color-generator/

├── app.py # Flask 메인 앱

├── requirements.txt # 의존성 패키지

├── Dockerfile # Docker 이미지 빌드 설정

├── docker-compose.yml # 컨테이너 오케스트레이션

├── instance/

│ └── database.db # SQLite DB 파일

├── static/

│ ├── style.css # 스타일시트

│ └── script.js # 프론트엔드 JS

├── templates/

│ └── index.html # HTML 템플릿


---


## ▶️ 실행 방법


### 1. Docker로 실행

```bash
docker-compose up --build
웹 브라우저에서 접속: http://localhost:8080

🧪 개발 환경
Python 3.10

Flask 2.3.3

Flask-SQLAlchemy 3.1.1

SQLite3 (내장 DB)

Docker + Docker Compose
