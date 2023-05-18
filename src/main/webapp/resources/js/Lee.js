// 전역 변수
let taskId = 0;
const kanbanColumns = document.querySelectorAll(".kanban-tasks");

// 이벤트 리스너 등록
document.getElementById("taskForm").addEventListener("submit", addTask);
document.body.addEventListener("dragover", handleBodyDragOver);
document.body.addEventListener("drop", handleBodyDrop);
kanbanColumns.forEach((column) => {
    column.addEventListener("dragover", handleDragOver);
    column.addEventListener("drop", handleDrop);
});

// 로컬 저장소에서 작업 불러오기
loadTasksFromLocalStorage();

// 작업 추가 함수
function addTask(event) {
    event.preventDefault();
    const taskDate = document.getElementById("taskDate").value;
    const taskContent = document.getElementById("taskContent").value;

    if (taskDate !== "" && taskContent !== "") {
        const task = createTaskElement(taskDate, taskContent);
        insertTaskByDate(document.getElementById("todo"), task);
        // 작업 배경색 업데이트
        updateTaskBackgroundColor(task);

        saveTasksToLocalStorage();



        document.getElementById("taskDate").value = "";
        document.getElementById("taskContent").value = "";
    }
}

// 작업 요소 생성 함수
function createTaskElement(taskDate, taskContent) {
    const task = document.createElement("div");
    task.classList.add("kanban-task");
    task.draggable = true;
    task.id = `task-${taskId++}`;
    task.innerHTML = `<strong>${taskDate}</strong> - ${taskContent}`;
    task.addEventListener("dragstart", handleDragStart);
    task.addEventListener("dragend", handleDragEnd);

    return task;
}

// 날짜별로 작업 삽입 함수
function insertTaskByDate(column, newTask) {
    const tasks = Array.from(column.getElementsByClassName("kanban-task"));
    const newTaskDate = new Date(newTask.querySelector("strong").innerText);

    const index = tasks.findIndex((task) => {
        const taskDate = new Date(task.querySelector("strong").innerText);
        return taskDate > newTaskDate;
    });

    if (index === -1) {
        column.appendChild(newTask);
    } else {
        column.insertBefore(newTask, tasks[index]);
    }
}

// 드래그 시작 이벤트 처리 함수
function handleDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.target.classList.add("dragging");
}

// 드래그 종료 이벤트 처리 함수
function handleDragEnd(event) {
    event.target.classList.remove("dragging");
}

// 드래그 오버 이벤트 처리 함수
function handleDragOver(event) {
    event.preventDefault();
}

// 드롭 이벤트 처리 함수
function handleDrop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");
    const task = document.getElementById(taskId);
    insertTaskByDate(event.currentTarget, task);
    // 작업 배경색 업데이트
    updateTaskBackgroundColor(task);
    saveTasksToLocalStorage();

}
// 바디 드래그 오버 이벤트 처리 함수
function handleBodyDragOver(event) {
    event.preventDefault();
}

// 바디 드롭 이벤트 처리 함수
function handleBodyDrop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");
    const task = document.getElementById(taskId);
    const kanbanBoard = document.querySelector('.kanban');
    const kanbanBoardRect = kanbanBoard.getBoundingClientRect();

    if (
        event.clientX < kanbanBoardRect.left ||
        event.clientX > kanbanBoardRect.right ||
        event.clientY < kanbanBoardRect.top ||
        event.clientY > kanbanBoardRect.bottom
    ) {
        task.remove();
        saveTasksToLocalStorage();
    }
}

// 로컬 스토리지에 작업 저장 함수
function saveTasksToLocalStorage() {
    const columns = {
        todo: [],
        doing: [],
        done: [],
    };

    for (const columnId in columns) {
        const tasks = document.querySelectorAll(`#${columnId} .kanban-task`);
        tasks.forEach((task) => {
            const taskDate = task.querySelector("strong").innerText;
            const taskContent = task.innerText.replace(`${taskDate} - `, '');
            columns[columnId].push({
                taskDate,
                taskContent
            });
        });
    }

    localStorage.setItem('kanbanTasks', JSON.stringify(columns));
}

// 로컬 스토리지에서 작업 불러오기 함수
function loadTasksFromLocalStorage() {
    const savedTasks = localStorage.getItem('kanbanTasks');
    if (!savedTasks) return;

    const columns = JSON.parse(savedTasks);
    for (const columnId in columns) {
        columns[columnId].forEach(({
            taskDate,
            taskContent
        }) => {
            const task = createTaskElement(taskDate, taskContent);
            insertTaskByDate(document.getElementById(columnId), task);
            updateTaskBackgroundColor(task);
        });
    }
}

// 작업 배경색 업데이트 함수 (단일 작업에 대해)
function updateTaskBackgroundColor(task) {
    const taskDateText = task.querySelector("strong").innerText;
    const taskDate = new Date(taskDateText);
    const currentDate = new Date();

    taskDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    const diffDays = (taskDate - currentDate) / (1000 * 60 * 60 * 24);

    if (task.parentElement.id === "todo" || task.parentElement.id === "doing") {
        if (diffDays < 0) {
            task.style.backgroundColor = "#FF0000"; // 빨강
        } else if (diffDays === 0) {
            task.style.backgroundColor = "#FFB74D"; // 노랑
        } else if (diffDays >= 1) {
            task.style.backgroundColor = "#FFFF8D"; // 초록
        }
    } else if (task.parentElement.id === "done") {
        task.style.backgroundColor = "#86E57F";
    } else {
        task.style.backgroundColor = "";
    }
}

// 미니메뉴 생성
const miniNavBtn = document.getElementById('mini-nav-btn');
const miniNavMenu = document.getElementById('mini-nav-menu');

miniNavBtn.addEventListener('click', (event) => {
    event.preventDefault();
    miniNavMenu.classList.toggle('show');
});

const ageText = "30세";
const nameText = "이재훈";
const locationText = "서울시 은평구";

const ageSpan = document.getElementById("age");
const nameSpan = document.getElementById("name");
const locationSpan = document.getElementById("location");

let ageIndex = 0;
let nameIndex = 0;
let locationIndex = 0;

const texts = [
  "나이 : 30세",
  "이름 : 이재훈",
  "사는곳 : 서울시 은평구"
];

const spans = [
  document.getElementById("age"),
  document.getElementById("name"),
  document.getElementById("location")
];

let index = 0;
let charIndex = 0;

function showText() {
  if (index >= texts.length) return;

  const text = texts[index];
  const span = spans[index];

  if (charIndex < text.length) {
    span.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(showText, 100);
  } else {
    index++;
    charIndex = 0;
    setTimeout(showText, 1000);
  }
}

showText();


