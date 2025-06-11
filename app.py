from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os

app = Flask(__name__)

# SQLite 경로 설정
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# 색상 저장용 모델
class Color(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(10))
    saved_at = db.Column(db.DateTime, default=datetime.utcnow)

# DB 초기화
with app.app_context():
    db.create_all()

# ✅ 루트 페이지 연결
@app.route('/')
def index():
    return render_template('index.html')

# ✅ 색상 저장 API
@app.route('/save-color', methods=['POST'])
def save_color():
    data = request.json
    new_color = Color(code=data['color'])
    db.session.add(new_color)
    db.session.commit()
    return jsonify({'message': 'Color saved!'})

# ✅ 앱 실행
if __name__ == '__main__':
    app.run(debug=True)
