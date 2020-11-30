let cost;
let message = prompt("Введите страну доставки");
let result = "";

result=message[0].toLocaleUpperCase()+message.slice(1).toLowerCase();
switch (result) {
  case   "Китай":
    cost = 100;
    break;

  case "Чили":
    cost = 250;
    break;

  case "Австралия":
    cost = 170;
    break;

  case "Индия":
    cost = 80;
    break;

  case "Ямайка":
    cost = 120;
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
alert(`Доставка в ${result} будет стоить ${cost} кредитов`);
