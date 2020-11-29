const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt("Введите пароль");

while (true) {
  if (message === ADMIN_PASSWORD) {
    alert("Добро пожаловать!");
    break;
  }
  if (message === null) {
    alert("Отменено пользователем!");
    break;
  }
  message = prompt("Доступ запрещен, неверный пароль!");
}
