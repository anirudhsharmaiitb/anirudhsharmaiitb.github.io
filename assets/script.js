// Example: Simple search/filter function for blogs
function filterBlogs() {
    let input = document.getElementById("blogSearch").value.toLowerCase();
    let items = document.querySelectorAll(".list-group-item");
    items.forEach(item => {
      let text = item.innerText.toLowerCase();
      item.style.display = text.includes(input) ? "" : "none";
    });
  }
  