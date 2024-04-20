"use strict";
//При выборе через класс querySelector('.name__class') нужно указать html element 
const a1 = 'Hello typeScript';
document.querySelector('.out-1').textContent = a1;
const a2 = document.querySelector('.out-2').textContent;
console.log(a2);
const a3 = +document.querySelector('.out-3').textContent;
console.log(a3);
//получаем value из input HTMLInputElement
const i5 = document.querySelector('.i-5');
const hi = i5.value;
console.log(hi);
// number
const i6 = document.querySelector('.i-6');
i6.value = String(88);
console.log(+i6.value);
//checkbox
const checkbox = document.querySelector('input[type="checkbox"]');
if (checkbox.checked) {
    console.log('checked');
}
else {
    console.log('no checked');
}
//radio
const radio = document.querySelector('input[name="r"]:checked');
console.log(radio.value);
//select 
const select = document.querySelector('.s-1');
select.value = 'aaa';
console.log(select.value);
//# sourceMappingURL=script.js.map