///task 1
const b = (str) => {
    const a = /^\d+$/;
    return a.test(str);
}

console.log(b("12345"));
console.log(b("12a45"));


/// task 2

// function timer() {
//     let interval = 0;
//     setInterval(() => {
//         console.log(`Прошла секунда: ${interval}`);
//         interval++;
//     }, 1000);
// }
// timer();


/// task 3

// function numberTen() {
//     let i = 1;
//     const intervalId = setInterval(() => {
//         console.log(i);
//         if (i === 10) {
//             clearInterval(intervalId);
//         }
//         i++;
//     }, 1000);
// }
//
// numberTen();



/// task 4

const block = document.querySelector(".block");








/// task 5

// const xhr = new XMLHttpRequest();
// xhr.open("GET","main.json");
//
// xhr.onload = function () {
//     const data = JSON.parse(xhr.response);
//     console.log(data);
// };
// xhr.send();

