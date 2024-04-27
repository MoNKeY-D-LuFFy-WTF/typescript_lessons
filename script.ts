// const user: { name: string, email: string } = {
//     name: 'pupkin',
//     email: 'pupkin@gmail.com'
// }
// console.log(user);

//Необязательные свойства
// const user2: { name: string, email: string, age?: number } = {
//     name: 'Oleg',
//     email: 'oleg44@gmail.com',
//     // age: 28,
// }
// console.log(user2);


//Проверяем свойства обекта
// if ('test' in user2) {
//     console.log(1);
// } else {
//     console.log(0);
// }

//Обрашение к необязательному свойству 
// console.log(user2.age);

//Обект как аргумент функци 
// function userPorcess(some_var: { name: string, email: string }): void {
//     console.log(some_var.email);
// }

// const obj = { name: 'Ivan', email: 'ivan@us.ua', 'test': false };
// userPorcess(obj)

//Декомпазиция

// function foo({ name, email }: { name: string, email: string }) {
//     console.log(name, email);
// }
// foo(user2)

//OOP
//Обявляем класс
class Button {
    text: string;
    className: string[];
}

const b_01 = new Button();
b_01.text = 'Push me';
b_01.className = ['btn', 'btn-success'];
console.log(b_01);

//Заносим данные сразу в класс 

class Heade {
    text: string = 'Header-1 ';
    fontZise: string = '24px';

}
const h_01 = new Heade();
console.log(h_01);

//Методы 

class Btn {
    text: string;
    className: string[];
    create(): HTMLButtonElement {
        const button = document.createElement('button');
        button.textContent = this.text;
        this.className.forEach(item => button.classList.add(item));
        return button;
    }
}

const b_02 = new Btn();
b_02.text = 'button';
b_02.className = ['btn', 'btn-success'];

document.body.append(b_02.create())

//Конструкот 

class ButtonElement {
    text: string;
    className: string[];
    readonly role: string;
    constructor(text: string, className: string[]) {
        this.text = text;
        this.className = className;
    }

    create(): HTMLButtonElement {
        const button = document.createElement('button');
        button.textContent = this.text;
        this.className.forEach(item => button.classList.add(item));
        return button;
    }
}

const b_03 = new ButtonElement('push me', ['btn', 'btn-primary']);
document.body.append(b_03.create())
