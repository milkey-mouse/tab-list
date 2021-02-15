chrome.tabs.query({},function(tabs) {
  let btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.textContent = "Copy";
  btn.addEventListener("click", function() {
    navigator.clipboard.writeText(
      tabs.map(function (tab) {
        return tab.title ? (tab.url + " (" + tab.title + ")") : tab.url;
      }).join("\n")
    );
  });
  document.body.appendChild(btn);

  let ul = document.createElement("ul");
  tabs.forEach(function(tab) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("target", "_blank");
    a.setAttribute("href", tab.url);
    let img = document.createElement("img");
    img.setAttribute("src", tab.favIconUrl || "placeholder.png");
    a.appendChild(img);
    let span = document.createElement("span");
    span.textContent = tab.title;
    a.appendChild(span);
    li.appendChild(a);
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
});
