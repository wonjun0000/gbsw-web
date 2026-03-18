const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("점수를 입력하세요. :", function(num) {
    switch(num) {
        case num > 100 || num < 0:
            console.log("범위를 벗어났습니다.")
            break
        case num >= 91:
            console.log("A학점")
            break
        case num >= 81:
            console.log("B학점")
            break
        case num >= 71:
            console.log("C학점")
            break
        case num >= 61:
            console.log("D학점")
            break
        default:
            console.log("F학점")
    }
    rl.close()
});