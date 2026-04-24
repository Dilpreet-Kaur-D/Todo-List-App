const inp1 = document.querySelector('#inp');
const btn = document.querySelector('#addbtn');
const list1 = document.querySelector('#list-box');

function addTask() {
    if (inp1.value === '') {
        alert("You must write something!");

    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inp1.value;
        list1.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inp1.value = "";
    saveData()
}

btn.addEventListener("click", addTask);
list1.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("selected");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)

inp1.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});


function saveData(){
    localStorage.setItem("data",list1.innerHTML);
    
}

function showlist(){
    list1.innerHTML=localStorage.getItem("data");
}
showlist()