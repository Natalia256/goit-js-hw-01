const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let balance;
let message = prompt("Сколько дроидов вы хочете купить?");

while (true) {
  if (message === null) {
    alert("Отменено пользователем!");
    break;
  }
  totalPrice = message * pricePerDroid;
  balance = credits - totalPrice;

  if (totalPrice < credits) {
    alert(
      "Вы купили " +
        message +
        " дроидов, на счету осталось " +
        balance +
        " кредитов."
    );
    break;
  }

  message = prompt("Недостаточно средств на счету!");
}
