

function initMainPage() {
   
    displayQueuingList();
}

function initOwnerPage() {
    
    displayQueuingList();
}

function initMonitorPage() {
    displayQueuingListForMonitor();
}

function enqueueStudent() {
    const gradeSection = document.getElementById('gradeSection').value;
    const browserInput = document.getElementById('browserInput').value;

    const student = {
        browserInput,
        gradeSection,
        sin
    };

    const queuingList = JSON.parse(localStorage.getItem('queuingList')) || [];
    const queuingNumber = queuingList.length + 1;
    student.queuingNumber = queuingNumber;
    queuingList.push(student);

    localStorage.setItem('queuingList', JSON.stringify(queuingList));

    displayQueuedStudent(student);
    displayQueuingList();
}

function displayQueuedStudent(student) {
    const resultElement = document.getElementById('result');
    const queueList = document.getElementById('queue-list');

    resultElement.innerHTML = `Your Queuing Number: ${student.queuingNumber}`;

    const listItem = document.createElement('li');
    listItem.textContent = `Queuing Number: ${student.queuingNumber}, File ${student.gradeSection}, Student ID Number: ${student.strand}`;
    queueList.appendChild(listItem);
}

function displayQueuingList() {
    const queueListElement = document.getElementById('queue-list');
    queueListElement.innerHTML = ''; 

    
    const queuingList = JSON.parse(localStorage.getItem('queuingList')) || [];

    queuingList.forEach(student => {
        const listItem = document.createElement('li');
        listItem.textContent = `Queuing Number: ${student.queuingNumber}, File: ${student.gradeSection}, Student ID Number: ${student.browserInput}`;
        queueListElement.appendChild(listItem);
    });
}

function displayQueuingListForMonitor() {
    const monitorQueueElement = document.getElementById('monitor-queue');
    monitorQueueElement.innerHTML = ''; 

   
    const queuingList = JSON.parse(localStorage.getItem('queuingList')) || [];

    queuingList.forEach(student => {
        const displayItem = document.createElement('div');
        displayItem.textContent = `Queuing Number: ${student.queuingNumber}, File: ${student.gradeSection}, Student ID Number:: ${student.browserInput}`;
        monitorQueueElement.appendChild(displayItem);
    });
}
