//function to check length of selected player 
function checkPlayerListById(elementId) {
    let playerList = document.getElementById(elementId);
    let list = playerList.children;
    return list.length;
}
///function to set selected player to set selested player in dashboard
function setPlayerNameInListById(elementId, newValue) {
    const getPlayer = document.getElementById(elementId);
    const li = document.createElement('li');
    li.innerText = newValue;
    getPlayer.appendChild(li);

    return getPlayer;
}
//functon to get the player name
function getTextPlayerTitleById(elementId) {
    const playerTitleText = document.getElementById(elementId);
    const playerTitleTextString = playerTitleText.innerText;

    return playerTitleTextString;
}

//function to convart input string value in number by using parseDloat function 
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldValue;
   
}
 // display the calculate value
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

