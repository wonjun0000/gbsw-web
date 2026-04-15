//1
function solution(num_list) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    return [even, odd]; 
}

//2
function solution(my_string, letter) {
    return my_string.replaceAll(letter, '');
}

//3
function solution(numbers) {
    numbers.sort((a, b) => b - a);
    let result = numbers[0] * numbers[1];
    return result;
}

//4
function solution(money) {
    let count = Math.floor(money/5500)
    let change = money % 5500
    return [count, change]
}