
let boxNum;

window.addEventListener('DOMContentLoaded', () => {
    boxNum = document.querySelectorAll('.box').length;
    console.log(`[DOMContentLoaded] .box 요소의 개수는 ${boxNum}입니다.`);
});


boxNum = document.querySelectorAll('.box').length;
console.log(`[none] .box 요소의 개수는 ${boxNum}입니다.`);