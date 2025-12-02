let tasks = [
    {description: 'pack spikes for track meet', status: 'todo'}, 
    {description: 'make my bed', status: 'todo'}, 
    {description: 'walk the dog', status: 'todo'},
    {description: 'write draft english paper', status: 'doing'},
    {description: 'sanding art project', status: 'doing'}];
            
function drawCard(index, task){
    return `
        <div id="task-${index}" class="card">
            <div class="menu-bar ${task.status}">...</div>
                <div class="menu-bar ${task.status}">...</div>
                <ul class="task-menu-items">
                    <li><a href="/edit/${index}">Edit</a></li>
                    <li><a href="/delete/${index}">Delete</a></li>
                </ul>
            </div>
            ${task.description}
        </div>
    `;
}

function drawTodoCards(){
    let output = '';
    tasks.forEach((task, index) => {
        if (task.status === 'todo') {
            output += drawCard(index, task);
        }
    });

    return output;
}

function drawDoingCards(){
    let output = '';
    tasks.forEach((task, index) => {
        if (task.status === 'doing') {
            output += drawCard(index, task);
        }
    });

    return output;
}

const todoCardsElem = document.getElementById('todo-cards');
if (todoCardsElem) {
    todoCardsElem.innerHTML = drawTodoCards();
}

const doingCardsElem = document.getElementById('doing-cards');
if (doingCardsElem) {
    doingCardsElem.innerHTML = drawDoingCards();
}
