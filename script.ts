const user: { name: string, email: string } = {
    name: 'pupkin',
    email: 'pupkin@gmail.com'
}
console.log(user);

//Необязательные свойства
const user2: { name: string, email: string, age?: number } = {
    name: 'Oleg',
    email: 'oleg44@gmail.com',
    // age: 28,
}
console.log(user2);


//Проверяем свойства обекта
if ('test' in user2) {
    console.log(1);
} else {
    console.log(0);
}

//Обрашение к необязательному свойству 
console.log(user2.age);

//Обект как аргумент функци 
function userPorcess(some_var: { name: string, email: string }): void {
    console.log(some_var.email);
}

const obj = { name: 'Ivan', email: 'ivan@us.ua', 'test': false };
userPorcess(obj)

//Декомпазиция

function foo({ name, email }: { name: string, email: string }) {
    console.log(name, email);
}
foo(user2)