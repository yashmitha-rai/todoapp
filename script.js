console.log("Helloo")
const add=()=>{
    const taskInput=document.getElementById("taskInput")
    const task=taskInput.value
    taskInput.value=""
    if(task!="") display(task)
    console.log(task)
}

var counter = 1

const display=(task)=>{
    const taskCont=document.getElementById("taskContainer")
   
    let taskId=`task${counter}`
    console.log(taskId)

    //creating elements
    let taskBody=document.createElement("div")
    let taskName = document.createElement('p')
    let deleteIcon = document.createElement('i')
    taskBody.id=taskId

    //assigning tasks
    taskName.textContent= task


    //Adding class names
    taskBody.classList="w-full h-14 flex justify-between items-center px-3"

    deleteIcon.classList="bg-red ri-delete-bin-5-line"


    //Adding event Listners
    deleteIcon.addEventListener("click", ()=>{
        deleteTask(taskId)
    })


    taskName.addEventListener("click",()=> {
        taskDone(taskId)
    })

    taskBody.appendChild(taskName)
    taskBody.appendChild(deleteIcon)
    taskCont.appendChild(taskBody)
    counter++
}
const deleteTask=(taskId)=>{
    document.getElementById(taskId).remove()
}

const taskDone =(taskId)=>{
    const task  = document.getElementById(taskId)
    const task_ptag = task.querySelector('p')
    task_ptag.classList.toggle("text-green-500")
    task_ptag.classList.toggle("line-through")
}
