//player cost calculation by using addEventListener
document.getElementById('btn-calculation').addEventListener('click', function () {
    const currentPlayerExpense = getInputFieldValueById('player-cost');
    const listOfPlayer = checkPlayerListById('selective-player');

    const newPlayerrExpenses = currentPlayerExpense * listOfPlayer;

    setTextElementValueById('total-player-cost', newPlayerrExpenses);
    
})
//total cost Calculation by using addEventListener 
document.getElementById('btn-total').addEventListener('click', function () {

    const playerCostTotal = getTextElementValueById('total-player-cost');
    const managerCost = getInputFieldValueById('manager-cost');
    const coachCost = getInputFieldValueById('coach-cost');

    const costTotal = playerCostTotal + managerCost + coachCost;

    setTextElementValueById('total-cost-calculation', costTotal);
})
