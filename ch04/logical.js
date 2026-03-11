const isLogin = true
const isAdmin = false

// &&(AND) 연산 -> 모든 항이 참이여야 true 반환
console.log(isLogin && isAdmin) // false

// ||(OR) 연산 -> 둘 중 하나만 참이여도 ture 반환
console.log(true || false) // true
console.log(false || false) // false

let id = "dmddo"
let pw = "9999"
let correctid = "dmddo"
let correctpw = "9999"

// id와 pw가 모두 일치해야 로그인 성공
let result = (id === correctid && pw === correctpw) ? "로그인이되었습니다." : "아이디 또는 비밀번호가 틀렸습니다."

console.log(result)

// ! 뒤에 오는 값을 반전시킨다.
console.log(!true) // false
console.log(!null) // true

// ?? - Nullish 병합 연산자
let email = "ABCD"
let result2 = (email !== null && email !== undefined) ? "이메일 확인" : "이메일 입력되지 않음"
let result3 = (email ?? null) ? "이메일 확인" : "이메일 입력되지 않음"

console.log(result2)
console.log(result3)
console.log(null ?? "기본값") // 기본값
console.log(undefined ?? "기본값") // 기본값
console.log("안녕하세요" ?? "기본값") // 안녕하세요