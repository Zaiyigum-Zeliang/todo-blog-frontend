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
