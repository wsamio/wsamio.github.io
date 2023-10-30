function changeName() {
    nameElement = document.querySelector('.js-name');
    if(nameElement.innerText === 'Iftu Bin Misbah') {
        nameElement.innerHTML = 'Samio';
    } else {
        nameElement.innerHTML = 'Iftu Bin Misbah';
    }
}