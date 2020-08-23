fetch("https://www.reddit.com/r/worldnews/hot/.json")
  .then((response) => response.json())
  .then((data) => {
    let list = data.data.children;
    list.forEach((story) => {
      const div = document.createElement("div");
      div.className = "new";
      const a = document.createElement("a");
      a.href = story.data.url_overridden_by_dest;
      const p = document.createElement("p");
      p.innerHTML = story.data.title;

      div.appendChild(a);
      a.appendChild(p);

      document.querySelector(".news").appendChild(div);
    });
  });
