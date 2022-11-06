const main = {
  init: () => {
    let myDate = new Date();
    let myYear = myDate.getFullYear();
    if (document.title == "Portfolio") {
      console.log("yey")
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
      {
        label: "Week 5 notes",
        url: "week5/index.html",
      },
      {
        label: "Week 6 To Do App",
        url: "todo/index.html",
      },
      {
        label: "Week 7 notes",
        url: "week7/index.html",
      },
      {
        label: "Week 8 notes",
        url: "week8/index.html",
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