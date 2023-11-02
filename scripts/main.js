function changeName() {
    nameElement = document.querySelector('.js-name');
    if(nameElement.innerText === 'Iftu Bin Misbah') {
        nameElement.innerHTML = "<p class='actual-name'><span class='small-prefix-name'>call me</span><span class='big-post-name'>Samio</span></p>";
    } else {
        nameElement.innerHTML = "<p class='actual-name'><span class='big-post-name'>Iftu Bin Misbah</span></p>";
    }
}

// take the current url form the browser
const currentURL = window.location.href;

document.getElementById('rock-paper-scissors').href = currentURL + "/JavaScript/Projects/Todo-List/index.html";
document.getElementById('todo-list').href = currentURL + "/JavaScript/Projects/Todo-List/index.html";