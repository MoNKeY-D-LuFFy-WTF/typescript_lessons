"use strict";
//Стрелочные функции 
// const t01 = (): void => {
//     console.log(1);
// };
// t01();
//аргументы 
// const t02 = (a: number, b: number): number => {
//     return a * b;
// }
// console.log(t02(3, 5));
//Необязательное параметры знак ?
// const t03 = (a: number, b?: number): number => {
//     if (b) return a * b;
//     return a;
// }
// console.log(t03(3));
//одинь аргумент
// const t04 = (a: number): number => a * a;
// console.log(t04(5));
//Аргументы по умолчанию
// const t05 = (a: number = 1, b: number = 100): number => {
//     return Math.max(a, b);
// }
// console.log(t05());
//Массивы
//этот массив пренимает только числа
const arr_01 = [];
arr_01.push(44);
console.log(arr_01);
//readonly массив массив который изменять нельзя
const arr_02 = [22, 33, 44, 55];
// arr_02.push(fsda) попыткак push вызывает ошибку в typeScript
// arr_02[0] = 11; ошибка
//Автоопребеление типа
const arr_03 = ["hello", 'ts']; // автоматически отредилил тип попытка заложить число вызыветь ошибку
arr_03.push("hi");
//Декомпозиция массива
const arr_04 = [222, 333, 444, 555];
const [a, b, ...c] = arr_04; //первый елемнет массива в (a) второй в (b) остальные в (c)
console.log(a, b, c);
//Двумерный массив
// const arr_05: number[][] = [[22, 33, 44], [55, 66, 77]];
const arr_05 = [];
arr_05[0] = [11, 22];
arr_05.push([33, 44]);
console.log(arr_05);
//Смешонное по типу массивы 
const arr_06 = [12, 21, false, 21, false];
console.log(arr_06);
const arr_07 = ['hello', 1, 2];
console.log(arr_07);
//Кортежи
const cort_01 = ['alex', 25];
console.log(cort_01);
cort_01.push(2);
console.log(cort_01);
//Необязательный елемент Кортежа
const cort_02 = [25, 100];
console.log(cort_02);
//Если кол-во елементов в кортеже неопределено
const cort_03 = [222, 'alex', 'maxim'];
console.log(cort_03);
//# sourceMappingURL=script.js.map