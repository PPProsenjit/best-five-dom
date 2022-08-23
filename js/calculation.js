document.getElementById('btn-calculation').addEventListener('click', function () {
    const currentPlayerExpense = getInputFieldValueById('player-cost');
    const listOfPlayer = checkPlayerListById('selective-player');

    const newPlayerrExpenses = currentPlayerExpense * listOfPlayer;

    setTextElementValueById('total-player-cost', newPlayerrExpenses);
})
