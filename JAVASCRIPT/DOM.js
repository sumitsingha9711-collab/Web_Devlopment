let div = document.createElement("div");
div.innerHTML = "hello this is created by DOM manipulation";
div.setAttribute("class", "box");
document.querySelector(".container").append(div);