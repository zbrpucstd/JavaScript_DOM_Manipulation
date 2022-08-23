function disable(player) {
  document.getElementById(player).disabled = true;
}

player1 = document.getElementById("player-1");
player1.addEventListener("click", function () {
  player1 = document.getElementById("playerName1").innerText;
  playerCall(player1);
  player1 = true;
});

player2 = document.getElementById("player-2");
player2.addEventListener("click", function () {
  player2 = document.getElementById("playerName2").innerText;
  playerCall(player2);
});

player3 = document.getElementById("player-3");
player3.addEventListener("click", function () {
  player3 = document.getElementById("playerName3").innerText;
  playerCall(player3);
});

player4 = document.getElementById("player-4");
player4.addEventListener("click", function () {
  player4 = document.getElementById("playerName4").innerText;
  playerCall(player4);
});

player5 = document.getElementById("player-5");
player5.addEventListener("click", function () {
  player5 = document.getElementById("playerName5").innerText;
  playerCall(player5);
});

player6 = document.getElementById("player-6");
player6.addEventListener("click", function () {
  player6 = document.getElementById("playerName6").innerText;
  playerCall(player6);
});

let count = 0;
function playerCall(player) {
  if (count < 5) {
    console.log(player);
    const node = document.createElement("li");
    const textnode = document.createTextNode(player);
    node.appendChild(textnode);
    document.getElementById("player-list").appendChild(node);
    player.disabled = true;
    count++;
  } else {
    alert("You can't select more then five");
  }
}

//per player work
let playerExpense = 0;
document
  .getElementById("calculate-player")
  .addEventListener("click", function () {
    const playerField = document.getElementById("per-player");
    const player = playerField.value;
    playerExpense = parseInt(player * count);

    playerField.value = "";

    document.getElementById("expenses").innerText = playerExpense;
  });

//total calculation
document.getElementById("total-calc").addEventListener("click", function () {
  const managerField = document.getElementById("manager");
  const manager = parseInt(managerField.value);
  const coachField = document.getElementById("coach");
  const coach = parseInt(coachField.value);

  const total = parseInt(playerExpense + manager + coach);

  managerField.value = "";
  coachField.value = "";

  document.getElementById("show-total").innerText = total;
});
