let cost;
let message = prompt("Введите страну доставки");
let result = "";
for (let i = 0; i < message.length; i++) {
  if (i === 0) {
    result += message[i].toUpperCase();
    continue;
  } else {
    result += message[i].toLowerCase();
  }
}
switch (result) {
  case "Китай":
    cost = 100;
    alert("Доставка в " + result + " будет стоить " + cost + " кредитов");
    break;

  case "Чили":
    cost = 250;
    alert("Доставка в " + result + " будет стоить " + cost + " кредитов");
    break;

  case "Австралия":
    cost = 170;
    alert("Доставка в" + result + " будет стоить " + cost + " кредитов");
    break;

  case "Индия":
    cost = 80;
    alert("Доставка в " + result + " будет стоить " + cost + " кредитов");
    break;

  case "Ямайка":
    cost = 120;
    alert("Доставка в " + result + " будет стоить " + cost + " кредитов");
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
