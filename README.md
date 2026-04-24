To-Do List App

A simple and interactive To-Do List Web Application built using HTML, CSS, and JavaScript.This app allows users to add, mark, delete tasks, and store them using localStorage so data persists even after refreshing the page.

🚀 Features
1. ✅ Add new tasks
2. ✏️ Mark tasks as completed
3. ❌ Delete tasks
4. 💾 Data stored in browser using localStorage
5. ⌨️ Add tasks using Enter key
6. 🎨 Clean and responsive UI

🛠️ Technologies Used
1. HTML5 – Structure
2. CSS3 – Styling & layout
3. JavaScript (Vanilla JS) – Functionality & logic

📂 Project Structure
📁 Todo-App
│── index.html
│── todo.css
│── todo.js
│── 📁 images
│     ├── checked.png
│     └── unchecked.png

⚙️ How It Works
1. Add Task
User enters text in input box
Clicks Add button or presses Enter
Task is added to the list
2. Mark Complete
Click on a task
It toggles a selected class
Shows strike-through effect
3. Delete Task
Click on ❌ (cross icon)
Task gets removed instantly
4. Save Data
Tasks are stored using:
localStorage.setItem("data", list1.innerHTML);
5. Load Data
On page reload:
list1.innerHTML = localStorage.getItem("data");

📸 UI Preview (Description)
Gradient background
Centered card layout
Rounded input field
Stylish task list with check icons

💡 Key Concepts Used
DOM Manipulation
Event Handling
Local Storage
Dynamic Element Creation
CSS Pseudo-elements (::before)

▶️ How to Run
1. Download or clone the project
2. Open index.html in browser
3. Start adding your tasks 🎯 


Dilpreet Kaur
B.Tech CSE Student