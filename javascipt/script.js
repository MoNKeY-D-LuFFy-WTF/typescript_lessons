"use strict";
//Стрелочные функции 
const t01 = () => {
    console.log(1);
};
t01();
//аргументы 
const t02 = (a, b) => {
    return a * b;
};
console.log(t02(3, 5));
//Необязательное параметры знак ?
const t03 = (a, b) => {
    if (b)
        return a * b;
    return a;
};
console.log(t03(3));
//одинь аргумент
const t04 = (a) => a * a;
console.log(t04(5));
//Аргументы по умолчанию
const t05 = (a = 1, b = 100) => {
    return Math.max(a, b);
};
console.log(t05());
//# sourceMappingURL=script.js.map