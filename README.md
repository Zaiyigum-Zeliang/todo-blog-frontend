**Frontend Assignment Hosting Manual – AIGyan Assignment**

---

### 🔍 Objective:

Build and host a **Todo Application** and **Blog Posting Webpage** using HTML, CSS, JavaScript, LocalStorage, and GitHub Pages.

---

## 🔄 TOTAL FLOW:

1. Set up local project folder
2. Add HTML, CSS, JS code
3. Initialize Git & push to GitHub
4. Host using GitHub Pages
5. Submit your live link

---

## ✅ 1. SETUP LOCAL FOLDER STRUCTURE (Windows CMD Friendly)

**Terminal Commands (CMD / Windows Terminal):**

```cmd
mkdir todo-blog-frontend
cd todo-blog-frontend
mkdir css
mkdir js
mkdir assets
mkdir assets\images
echo. > index.html
echo. > blog.html
echo. > css\styles.css
echo. > js\todo.js
echo. > js\blog.js
```

**Folder Structure:**

```
todo-blog-frontend/
├── index.html
├── blog.html
├── css/
│   └── styles.css
├── js/
│   ├── todo.js
│   └── blog.js
└── assets/
    └── images/
```

---

## ✅ 2. ADD THE CODE

### 📄 index.html (Todo App)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Todo App</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <main class="container">
    <h1>Todo Manager</h1>
    <div class="todo-input">
      <input type="text" id="taskInput" placeholder="Add a new task..." />
      <button onclick="addTask()">Add</button>
    </div>
    <ul id="taskList"></ul>
  </main>
  <script src="js/todo.js"></script>
</body>
</html>
```

### 📄 js/todo.js

```javascript
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleComplete(${index})">
      <span class="${task.completed ? "completed" : ""}">${task.text}</span>
      <button onclick="deleteTask(${index})">❌</button>
    `;
    taskList.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim()) {
    tasks.push({ text: input.value.trim(), completed: false });
    input.value = "";
    renderTasks();
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();
```

### 📄 blog.html (Blog App)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blog Page</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <main class="container">
    <h1>Blog Posting Page</h1>
    <div class="blog-input">
      <input type="text" id="title" placeholder="Blog Title" />
      <textarea id="content" placeholder="Blog Content"></textarea>
      <button onclick="addPost()">Post</button>
    </div>
    <div id="posts"></div>
  </main>
  <script src="js/blog.js"></script>
</body>
</html>
```

### 📄 js/blog.js

```javascript
let posts = JSON.parse(localStorage.getItem("posts")) || [];

function renderPosts() {
  const container = document.getElementById("posts");
  container.innerHTML = "";
  posts.slice().reverse().forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post";
    postDiv.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <button onclick="editPost(${posts.length - 1 - index})">Edit</button>
      <button onclick="deletePost(${posts.length - 1 - index})">Delete</button>
    `;
    container.appendChild(postDiv);
  });
  localStorage.setItem("posts", JSON.stringify(posts));
}

function addPost() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  if (title && content) {
    posts.push({ title, content });
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    renderPosts();
  }
}

function editPost(index) {
  const updatedTitle = prompt("Edit Title", posts[index].title);
  const updatedContent = prompt("Edit Content", posts[index].content);
  if (updatedTitle && updatedContent) {
    posts[index] = { title: updatedTitle, content: updatedContent };
    renderPosts();
  }
}

function deletePost(index) {
  posts.splice(index, 1);
  renderPosts();
}

renderPosts();
```

### 📄 css/styles.css

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 2rem;
  background-color: #f0f4f8;
}
.container {
  max-width: 600px;
  margin: auto;
}
.todo-input, .blog-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}
input[type="text"], textarea {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #fff;
  padding: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.completed {
  text-decoration: line-through;
  color: gray;
}
```

---

## ✅ 3. INITIALIZE GIT & PUSH TO GITHUB

### A. Git Init

```bash
git init
git add .
git commit -m "Initial commit"
```

### B. Create Repo on GitHub

1. Go to [https://github.com](https://github.com)
2. Click ➕ > New Repository
3. Name it: `todo-blog-frontend`
4. Visibility: Public
5. Do NOT check "Add README"
6. Click "Create Repository"

### C. Connect & Push

```bash
git remote add origin https://github.com/Zaiyigum-Zeliang/todo-blog-frontend.git
git branch -M main
git push -u origin main
```

---

## ✅ 4. HOST ON GITHUB PAGES

1. Go to your GitHub repo
2. Click **Settings** > **Pages** (left menu)
3. Under **Source**, choose:

   * Branch: `main`
   * Folder: `/ (root)`
4. Click **Save**

You’ll get a live URL:

```
https://Zaiyigum-Zeliang.github.io/todo-blog-frontend/
```

To open Blog Page:

```
https://Zaiyigum-Zeliang.github.io/todo-blog-frontend/blog.html
```

---

## ✅ 5. SUBMIT

Submit your GitHub Pages link to AIGyan:

```
https://Zaiyigum-Zeliang.github.io/todo-blog-frontend/
```

### Suggested Message:

**💻 Submission: AIGyan Frontend Assignment**

**Project Link:**
🔗 [https://Zaiyigum-Zeliang.github.io/todo-blog-frontend/](https://Zaiyigum-Zeliang.github.io/todo-blog-frontend/)

**Details:**
This project includes:

* A Todo Manager with Add, Complete, Delete, and Persistent Tasks using LocalStorage
* A Blog Posting Page that allows creating, editing, deleting blog posts with LocalStorage
* Fully responsive layout using semantic HTML, CSS, and Vanilla JS
* Hosted on GitHub Pages

Made with 💙 by Zaiyigum Zeliang

---

## ✅ FINAL CHECKLIST

| Task                       | Done |
| -------------------------- | ---- |
| Folder structured properly | ☑    |
| Code copied correctly      | ☑    |
| Git initialized            | ☑    |
| Repo created & connected   | ☑    |
| GitHub Pages hosted        | ☑    |
| Link submitted             | ☑    |

---

## ⚡ PRO TIPS

* Want to update after edits?

```bash
git add .
git commit -m "Updated content"
git push
```

* To make blog the homepage, rename `blog.html` → `index.html`

---

You did it! Now go get that submission in like a frontend pro 👊🚀
 
