"use strict";
//При выборе через класс querySelector('.name__class') нужно указать html element 
// const a1: string = 'Hello typeScript';
// document.querySelector('.out-1').textContent = a1;
// const a2: string = document.querySelector('.out-2').textContent;
// console.log(a2);
// const a3: number = +document.querySelector('.out-3').textContent;
// console.log(a3);
//получаем value из input HTMLInputElement
// const i5 = <HTMLInputElement>document.querySelector('.i-5');
// const hi: string = i5.value
// console.log(hi);
// number
// const i6 = document.querySelector('.i-6') as HTMLInputElement;
// i6.value = String(88);
// console.log(+i6.value);
//checkbox
// const checkbox = <HTMLInputElement>document.querySelector('input[type="checkbox"]');
// if (checkbox.checked) {
//     console.log('checked');
// } else {
//     console.log('no checked');
// }
//radio
// const radio = <HTMLInputElement>document.querySelector('input[name="r"]:checked');
// console.log(radio.value);
//select 
// const select = document.querySelector('.s-1') as HTMLSelectElement;
// select.value = 'aaa';
// console.log(select.value);
//Функции TypeScript
function t01() {
    console.log(1);
}
//Возвращаем тип данных
function t02() {
    const n = 66;
    return n;
}
console.log(t02());
//  Процедура
function t03() {
    document.querySelector('.out-1').textContent = 'hello';
}
t03();
//Аргументы 
function t04(a, b) {
    return a * b;
}
console.log(t04(4, 5));
//Процедура аргумента 
function t05(a, b) {
    console.log(a * b);
}
t05(5, 6);
//количество аргументов и необязательное 
function t06(a, b) {
    return a * b;
}
console.log(t06(10));
//Несколько типов значений
function checkEmail(email) {
    //проверить есть ли @
    if (email.indexOf('@') !== -1)
        return email.toLowerCase();
    return false;
}
console.log(checkEmail('harry@Potter.ua'));
//# sourceMappingURL=script.js.map