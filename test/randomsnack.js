let snacks = ["치즈 토스트", "딸기 에이드", "초코 우유"]

const getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

document.getElementById("btn_event").onclick = function () {
    const num = getRandomNumber(0, snacks.length - 1)
    document.getElementById("event_result").textContent = 
    `오늘의 간식은 ${snacks[num]}입니다!`
}

const rendersnack = function (snack) {
    const li = document.createElement("li")
    li.textContent = snack
    document.getElementById("menu_list").appendChild(li)
};

const addSnack = function (snack) {
    if (snack) {
        snacks.push(snack)
        return true
    } else {
        return false
    }
}

for (let i = 0; i < snacks.length; i++) {
    rendersnack(snacks[i])
}
document.getElementById("btn_add").onclick = function () {
    const snack = document.getElementById("input_snack").value
    
    if (addSnack(snack)) {
        rendersnack(snack)
    } else {
        alert("간식 이름을 입력해주세요.")
    }

}