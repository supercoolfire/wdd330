const main = {
  init: () => {
    main.fourthPolio();
  },
  fourthPolio: () => {
    const links = [{
        label: "Week1 notes",
        url: "week1/index.html",
      },
      {
        label: "Week2",
        url: "week2/index.html",
      },
      {
        label: "Week2",
        url: "week3/index.html",
      }
    ];
    
    readLinks(links);
    document.getElementById("rickRoll").onclick = () => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank").focus();
    
    function readLinks(links) {
      let ol = document.getElementById("oList");
      links.forEach(e => {
        let a = document.createElement('a');
        a.innerHTML = e.label;
        a.href = e.url;
        a.target = '_blank';
        a.id = e.id;
    
        let li = document.createElement('li');
        li.appendChild(a);
    
        ol.appendChild(li);
    
      });
    }
  }

}
main.init();