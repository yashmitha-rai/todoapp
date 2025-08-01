console.log("hello world")
const add = () => {
    const taskInput = document.getElementById("taskInput");
    const taskValue=taskInput.value;
    console.log(taskValue);
}
const display = (task) => {
    const taskCount = document.getElementById("taskContainer");

    console.log(taskCount)
}
display("hii");
