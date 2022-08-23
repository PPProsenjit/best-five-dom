let list = list.length;
function checkPlayerListById(elementId) {
    let playerList = document.getElementById(elementId);
    let list = playerList.children;
     return list.length;
}

function setPlayerNameInListById(elementId, newValue) {
    const getPlayer = document.getElementById(elementId);
    const li = document.createElement('li');
    li.innerText = newValue;
    getPlayer.appendChild(li);

    return getPlayer;
}

function getTextPlayerTitleById(elementId) {
    const playerTitleText = document.getElementById(elementId);
    const playerTitleTextString = playerTitleText.innerText;

    return playerTitleTextString;
}


function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);

    return inputFieldValue;

}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textValue = parseFloat(textElementValueString);

    return textValue;

}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}

