const notificationBalance = "O Herói tem de saldo de ";
const notificationLevel = " está no nível de ";

let victory = 62;
let defeat = 0;
let victoryBalance = winLose(victory, defeat);

if (victoryBalance <= 10) {
  console.log(
    notificationBalance +
      victoryBalance +
      " vitórias " +
      notificationLevel +
      " Ferro"
  );
} else if (victoryBalance >= 11 && victoryBalance <= 20) {
  console.log(
    notificationBalance +
      victoryBalance +
      " vitórias " +
      notificationLevel +
      " Bonze"
  );
} else if (victoryBalance >= 21 && victoryBalance <= 50) {
  console.log(
    notificationBalance +
      victoryBalance +
      " vitórias " +
      notificationLevel +
      " Prata"
  );
} else if (victoryBalance >= 51 && victoryBalance <= 80) {
  console.log(
    notificationBalance +
      victoryBalance +
      " vitórias " +
      notificationLevel +
      " Ouro"
  );
} else if (victoryBalance >= 81 && victoryBalance <= 90) {
  console.log(
    notificationBalance +
      victoryBalance +
      " vitórias " +
      notificationLevel +
      " Diamante"
  );
} else if (victoryBalance >= 91 && victoryBalance <= 100) {
  console.log(
    notificationBalance +
      victoryBalance +
      " vitórias " +
      notificationLevel +
      " Lendário"
  );
} else if (victoryBalance >= 101) {
  console.log(
    notificationBalance +
      victoryBalance +
      " vitórias " +
      notificationLevel +
      " Imortal"
  );
}

//função que recebe como parametro quantidade de win/lose
function winLose(win, lose) {
  let resultado = win - lose;
  return resultado;
}
