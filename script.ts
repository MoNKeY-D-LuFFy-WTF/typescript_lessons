//Стрелочные функции 
const t01 = (): void => {
    console.log(1);
};
t01();

//аргументы 

const t02 = (a: number, b: number): number => {
    return a * b;

}
console.log(t02(3, 5));


//Необязательное параметры знак ?

const t03 = (a: number, b?: number): number => {
    if (b) return a * b;
    return a;

}
console.log(t03(3));

//одинь аргумент

const t04 = (a: number): number => a * a;
console.log(t04(5));

//Аргументы по умолчанию
const t05 = (a: number = 1, b: number = 100): number => {
    return Math.max(a, b);
}
console.log(t05());
