function getRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function changeColor() {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
    document.getElementById("colorCode").innerText = color;
}

function saveColor() {
    const color = document.getElementById("colorCode").innerText;
    let saved = JSON.parse(localStorage.getItem("savedColors") || "[]");
    if (!saved.includes(color)) {
        saved.push(color);
        localStorage.setItem("savedColors", JSON.stringify(saved));
        renderSavedColors();
    }
}

function renderSavedColors() {
    const saved = JSON.parse(localStorage.getItem("savedColors") || "[]");
    const list = document.getElementById("savedColors");
    list.innerHTML = '';
    saved.forEach(c => {
        const li = document.createElement('li');
        li.innerText = c;
        list.appendChild(li);
    });
}

function copyColor() {
    const color = document.getElementById("colorCode").innerText;
    navigator.clipboard.writeText(color).then(() => {
        alert("색상 코드가 복사되었습니다!");
    });
}

const messagesByMood = {
    "😄": ["멋져요! 오늘도 웃는 하루!", "기분 좋은 에너지가 가득하네요 ☀️", "긍정적인 너는 최고의 개발자!"],
    "😐": ["괜찮아요, 다 잘될 거예요 🙂", "조금은 평범한 날도 필요한 법이죠!", "쉬엄쉬엄 해도 돼요!"],
    "😡": ["화났을 땐 딥 브레스 🌬️", "오늘은 코딩 말고 휴식 어때요?", "당신은 소중하니까요 💖"]
};

function selectMood(mood) {
    const msgList = messagesByMood[mood];
    const randomMsg = msgList[Math.floor(Math.random() * msgList.length)];
    const moodResult = document.getElementById("moodResult");
    moodResult.innerHTML = `${mood} ${randomMsg}`;
}

// 체류 시간 측정
let startTime = Date.now();

function updateStayTime() {
    const now = Date.now();
    const seconds = Math.floor((now - startTime) / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const display = document.getElementById("stayTime");
    display.innerText = `페이지에 머문 시간: ${minutes}분 ${remainingSeconds}초`;
}

setInterval(updateStayTime, 1000);

// 초기 실행
window.onload = () => {
    renderSavedColors();
    changeColor();
}
