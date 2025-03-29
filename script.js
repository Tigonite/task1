let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let answ1 = prompt("Введите обязательную статью расходов в этом месяце");
let answ2 = +prompt("Во сколько обойдется?");

let appData = {
    "budget": money,
    "timeData": time,
    "expenses": {answ1:answ2},
    "optionalExpenses": {},
    "income": [],
    "savings": false
}



alert(appData.budget/30)


