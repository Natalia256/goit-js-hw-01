const total = 100; //количество товаров на складе//
const ordered = 50; //единиц товара в заказе//
let biggerNumber;

if (ordered > total) {
  biggerNumber = "На складе недостаточно твоаров!";
} else {
  biggerNumber = "Заказ оформлен, с вами свяжется менеджер";
}
console.log(biggerNumber);
