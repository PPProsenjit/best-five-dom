
document.getElementById('btn-messi').addEventListener('click', function () {
    checkPlayerListById('selective-player');
    const getTitleName = getTextPlayerTitleById('player-title-messi');
    setPlayerNameInListById('selective-player', getTitleName);
    document.getElementById('btn-messi').disabled = true;
    document.getElementById("btn-messi").style.backgroundColor = "lightblue";
})

document.getElementById('btn-neymar').addEventListener('click', function () {
    checkPlayerListById('selective-player');
    const getTitleName = getTextPlayerTitleById('player-title-neymar');
    setPlayerNameInListById('selective-player', getTitleName);
    document.getElementById('btn-neymar').disabled = true;
    document.getElementById("btn-neymar").style.backgroundColor = "lightblue";
})

document.getElementById('btn-kylian').addEventListener('click', function () {
    checkPlayerListById('selective-player');

    const getTitleName = getTextPlayerTitleById('player-title-kylian');
    setPlayerNameInListById('selective-player', getTitleName);
    document.getElementById('btn-kylian').disabled = true;
    document.getElementById("btn-kylian").style.backgroundColor = "lightblue";
})

document.getElementById('btn-vitor').addEventListener('click', function () {
     checkPlayerListById('selective-player');
    const getTitleName = getTextPlayerTitleById('player-title-vitor');
    setPlayerNameInListById('selective-player', getTitleName);
    document.getElementById('btn-vitor').disabled = true;
    document.getElementById("btn-vitor").style.backgroundColor = "lightblue";
})

document.getElementById('btn-renato').addEventListener('click', function () {
    checkPlayerListById('selective-player');

    const getTitleName = getTextPlayerTitleById('player-title-renato');
    setPlayerNameInListById('selective-player', getTitleName);
    document.getElementById('btn-renato').disabled = true;
    document.getElementById("btn-renato").style.backgroundColor = "lightblue";
})

document.getElementById('btn-sergio').addEventListener('click', function () {
    checkPlayerListById('selective-player');
    const getTitleName = getTextPlayerTitleById('player-title-sergio');
    setPlayerNameInListById('selective-player', getTitleName);
    document.getElementById('btn-sergio').disabled = true;
    document.getElementById("btn-sergio").style.backgroundColor = "lightblue";
})
