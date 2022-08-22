let playerNameString = '';
function getInputPlayerName(playerId) {
    const playerName = document.getElementById(playerId);
    playerNameString = playerName.innerText;
    return playerNameString;
}
function setPlayerNameInDashboard(boardId) {
    const playerDashboard = document.getElementById(boardId);
    playerDashboard.innerText = playerNameString;
    
}