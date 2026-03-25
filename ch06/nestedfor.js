// 2중 for 문을 사용해 2단 ~ 9단 구구단을 출력하세요.

//for (let i = 2; 조건식; 증감문){
//    for (let j =1; 조건식; 증감문) {
//        console.log()
//    }
//}

//내부 반복문이 종료되어야 외부 반복문의 다음 루프가 실행 된다.
for (i = 0; i < 3; i++) {
    console.log(`i는${i}입니다.`)
    for (j = 0; j < 3; j++) {
        console.log(`   j는${j}입니다.`)
    }
    console.log(`\n`)

}

for (let i = 2; i <= 9; i++) {
    console.log(`${i}단`)
    for (let j = 1; j <= 9; j++){
        console.log(    `${i} x ${j} = ${i*j}`)
    }
    console.log(`\n`)
}