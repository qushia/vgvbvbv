function addTask() {
    const send = {}
    send.name = document.forms['task']['name'].value
    send.lname = document.forms['task']['lname'].value
    send.email = document.forms['task']['email'].value
    send.location = document.forms['task']['location'].value
   
    send.selector = document.forms['task']['selector'].value
    console.log(send)
    addData(send)
}

function addData(task) {
fetch('http://localhost:3000/tasks', {

    method:'POST',
    headers:{'Content-Type': 'application/json',},
    body: JSON.stringify(task)

}).then(() => getData())

}

async function getData() {
    let sending = await fetch('http://localhost:3000/tasks')
    let getting = await sending.json()
    console.log(getting)


    document.getElementById('inpo').innerHTML = '';
    document.getElementById('inpo2').innerHTML = '';
    document.getElementById('inpo3').innerHTML = '';
    document.getElementById('inpo4').innerHTML = '';
    document.getElementById('inpo5').innerHTML = '';
    
    for(i = 0; i < getting.length; i++) {
   
        let item =document.createElement('div')
        item.classList = "items";
    
        let TaskName = document.createElement('div')
        TaskName.innerHTML = getting[i].name
        let Tasklname = document.createElement('div')
        Tasklname.innerHTML = getting[i].lname
        let Taskemail = document.createElement('div')
        Taskemail.innerHTML = getting[i].email
        let Tasklocation = document.createElement('div')
        Tasklocation.innerHTML = getting[i].location
        let Taskselector = document.createElement('div')
        Taskselector.innerHTML = getting[i].selector
        item.append(TaskName, Tasklname, Taskemail, Tasklocation)
       if (getting[i].selector === 'react') {
        document.getElementById('inpo').appendChild(item)
       } else if(getting[i].selector === 'angular') {
        document.getElementById('inpo2').appendChild(item)
       }else if(getting[i].selector === 'java') {
        document.getElementById('inpo3').appendChild(item)
       }else if(getting[i].selector === 'piyton') {
        document.getElementById('inpo4').appendChild(item)
       }else if(getting[i].selector === 'php') {
        document.getElementById('inpo5').appendChild(item)
       }


    }
}
