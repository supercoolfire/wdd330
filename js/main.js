const main = {
  init: () => {
    let myDate = new Date();
    let myYear = myDate.getFullYear();

    if (document.getElementsByName("title").textContent == "Portfolio") {
      main.fourthPolio();
    }
    
    if (document.getElementsByName("footer")) {
      main.footer(myYear);
    }

    document.getElementById("rickRoll").onclick = () => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank").focus();

  },
  fourthPolio: () => {
    const links = [{
        label: "Week 1 notes",
        url: "week1/index.html",
      },
      {
        label: "Week 2 notes",
        url: "week2/index.html",
      },
      {
        label: "Week 3 notes",
        url: "week3/index.html",
      },
      {
        label: "Week 4 notes",
        url: "week4/index.html",
      },
    ];
    
    readLinks(links);
        
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
  },
  footer: (myYear) => {
    if (document.getElementById("theYear")) {
      document.getElementById("theYear").textContent = myYear;
    }
  }

}
main.init();