getDataFromLocalStorage();// onload page

let input = document.querySelector('#tasks input');
let listOfTasks =  document.querySelector('#list');
let btn = document.querySelector("#add");

//create array to store tasks
let arrayOfTasks = []

//check if there is data in local storage
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i < arrayOfTasks.length; i++) {
           createTask(arrayOfTasks[i]);
    }
}

function createTask(value){
    listOfTasks.innerHTML += `
            <div class="toDo">
                    ${value}
                    <button class="check">
                    <i class='bx bx-check-circle'></i>
                    </button>
                    <button class="remove">
                    <i class='bx bx-x-circle'></i>
                    </button>
            </div`;

        //check item
        var current_checkItem = document.querySelectorAll(".check");
        for (var i = 0; i < current_checkItem.length; i++) {
            current_checkItem[i].onclick = function() {
                this.parentNode.style.textDecoration = "line-through";
                this.parentNode.style.textDecorationColor = "#e46db6";
                this.parentNode.style.color = "#7FB5FF";
            }
        }
        //remove item 
        var current_item = document.querySelectorAll(".remove");
        console.log(current_item)

        let storedData = window.localStorage.getItem("tasks");
        var arr = JSON.parse(storedData);
        for (var i = 0; i < current_item.length; i++) {
            console.log(i)
            current_item[i].onclick = function() {
                
                arr.splice(i)
                localStorage.setItem('tasks', JSON.stringify(arr));
                //this.parentNode.remove();  
                window.location.reload()
            }
        }
     }

//add task onclick button 
btn.onclick = function(){
    if(input.value === 0){// if input is empty
        alert("Task Empty!, Please Write SomeThing"); 
    }else{
        createTask(input.value);// create new task
        arrayOfTasks.push(input.value); // add task to array
        addDataToLocalStorage(arrayOfTasks) // add array to local storage
        input.value = ''; // reset input value to empty
    }
}

  // create function to add data to local storage
function addDataToLocalStorage(array) {
    window.localStorage.setItem("tasks", JSON.stringify(array))
 }

 // create function to load data from local storage
function getDataFromLocalStorage() {
     let data = window.localStorage.getItem("tasks");
     if (data) {
        let tasks = JSON.parse(data);
         //console.log(tasks)
    }
}

/* let array = ["v", "l", "cool"]
let sparr = array.splice(1,3)
console.log(sparr) */