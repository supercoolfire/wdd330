const main = {
  init: () => {
    let myDate = new Date();
    let myYear = myDate.getFullYear();
    if (document.title == "Portfolio") {
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
        reference: {
          books: [
            {
              title: "",
              chapters: [
                {
                  chapter: "",
                  url: "",
                },
              ]
            },
          ],
        sites: [
          {
            title: "",
            url: "",
          },
        ]
        },
        description: "",
      },
      {
        label: "Week 2 notes",
        url: "week2/index.html",
        reference: {
          books: [
            {
              title: "Javascript: Novice to Ninja",
              chapters: [
                {
                  chapter: "Ch2: Programming basics",
                  url: "https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition/read",
                },
                {
                  chapter: "Ch3: Arrays, Logic, and Loops",
                  url: "Ch3: Arrays, Logic, and Loops",
                },
                {
                  chapter: "Ch4: Functions",
                  url: "https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition/read",
                },
              ]
            },
            {
              title: "Eloquent JavaScript (EJS)",
              chapters: [
                {
                  chapter: "Ch2: Program Structure",
                  url: "https://eloquentjavascript.net/02_program_structure.html",
                },
                {
                  chapter: "Ch4: Data Structures: Objects and Arrays",
                  url: "Data Structures: Objects and Arrays",
                },
              ]
            },
          ],
        sites: [
          {
            title: "",
            url: "",
          },
        ]
        },
        description: "",
      },
      {
        label: "Week 3 notes",
        url: "week3/index.html",
        reference: {
          books: [
            {
              title: "Javascript: Novice to Ninja ",
              chapters: [
                {
                  chapter: "Ch5: Objects",
                  url: "https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition/read/5",
                },
                {
                  chapter: "Ch6: Document Object Model",
                  url: "https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition/read/7",
                },
                {
                  chapter: "Ch7: Events",
                  url: "https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition/read/7",
                },
              ]
            },
          ],
        sites: [
          {
            title: "This in JavaScript",
            url: "https://zellwk.com/blog/this/",
          },
          {
            title: "Object Methods: this",
            url: "https://javascript.info/object-methods",
          },
        ]
        },
        description: "",
      },
      {
        label: "Week 4 notes",
        url: "week4/index.html",
        reference: {
          books: [
            {
              title: "Javascript: Novice to Ninja",
              chapters: [
                {
                  chapter: "Ch8: Forms",
                  url: "Ch8: Forms",
                },
                {
                  chapter: "Ch12: Object Oriented Programming",
                  url: "",
                },
                {
                  chapter: "Ch15: Modern Javascript",
                  url: "Ch15: Modern Javascript",
                },
              ]
            },
          ],
        sites: [
          {
            title: "",
            url: "",
          },
        ]
        },
        description: "",
      },
      {
        label: "Week 5 notes",
        url: "week5/index.html",
        reference: {
          books: [
            {
              title: "Javascript: Novice to Ninja",
              chapters: [
                {
                  chapter: "Ch10: Testing and Debugging",
                  url: "Ch10: Testing and Debugging",
                },
              ]
            },
          ],
        sites: [
          {
            title: "",
            url: "",
          },
        ]
        },
        description: "",
      },
      {
        label: "Week 6 To Do App",
        url: "todo/index.html",
        reference: {
          books: [
            {
              title: "",
              chapters: [
                {
                  chapter: "",
                  url: "",
                },
              ]
            },
          ],
        sites: [
          {
            title: "",
            url: "",
          },
        ]
        },
        description: "",
      },
      {
        label: "Week 7 notes",
        url: "week7/index.html",
        reference: {
          books: [
            {
              title: "avascript: Novice to Ninja",
              chapters: [
                {
                  chapter: "Ch11: Further Functions",
                  url: "https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition/read",
                },
                {
                  chapter: "Ch13: AJAX",
                  url: "Ch13: AJAX",
                },
              ]
            },
          ],
        sites: [
          {
            title: "",
            url: "",
          },
        ]
        },
        description: "",
      },
      {
        label: "Week 8 notes",
        url: "week8/index.html",
        reference: {
          books: [
            {
              title: "HTML5 and CSS3 for the Real world",
              chapters: [
                {
                  chapter: "Ch8: Transforms and Transitions",
                  url: "https://www.sitepoint.com/premium/books/html5-css3-for-the-real-world-2nd-edition",
                },
                {
                  chapter: "Ch12: Canvas, SVG, and Drag and Drop",
                  url: "Ch12: Canvas, SVG, and Drag and Drop",
                },
              ]
            },
          ],
        sites: [
          {
            title: "",
            url: "",
          },
        ]
        },
        description: "",
      },
      {
        label: "Week 9 notes",
        url: "week9/index.html",
        reference: {
          books: [
            {
              title: "Javascript: Novice to ninja",
              chapters: [
                {
                  chapter: "Ch9: The Window Object",
                  url: "https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition/read/",
                },
                {
                  chapter: "Ch14: HTML5 APIs",
                  url: "https://www.sitepoint.com/premium/books/javascript-novice-to-ninja-2nd-edition/read",
                },
              ]
            },
          ],
        sites: [
          {
            title: "Managing the modern Front-end workflow",
            url: "https://byui-cit.github.io/cit261/resources/workflow.html",
          },
        ]
        },
        description: "",
      },{
        label: "Week 10 notes",
        url: "week1/index.html",
        reference: {
          books: [
            {
              title: "",
              chapters: [
                {
                  chapter: "",
                  url: "",
                },
              ]
            },
          ],
        sites: [
          {
            title: "",
            url: "",
          },
        ]
        },
        description: "",
      },{
        label: "Week 11 notes",
        url: "week1/index.html",
        reference: {
          books: [
            {
              title: "",
              chapters: [
                {
                  chapter: "",
                  url: "",
                },
              ]
            },
          ],
        sites: [
          {
            title: "",
            url: "",
          },
        ]
        },
        description: "",
      },{
        label: "Week 12 notes",
        url: "week1/index.html",
        reference: {
          books: [
            {
              title: "",
              chapters: [
                {
                  chapter: "",
                  url: "",
                },
              ]
            },
          ],
        sites: [
          {
            title: "",
            url: "",
          },
        ]
        },
        description: "",
      },{
        label: "Week 13 notes",
        url: "week1/index.html",
        reference: {
          books: [
            {
              title: "",
              chapters: [
                {
                  chapter: "",
                  url: "",
                },
              ]
            },
          ],
        sites: [
          {
            title: "",
            url: "",
          },
        ]
        },
        description: "",
      },
    ];
    
    readLinks(links);
        
    function readLinks(links) {
      let parent = document.getElementById("oList");
      
      
      
      links.forEach(e => {
        if (e.reference.books[0].title != "" || e.reference.sites[0].title != "") {
          


        let a = document.createElement('a');
        a.innerHTML = e.label;
        a.href = e.url;
        a.target = '_blank';
        a.className = "weak";
        
        let li = document.createElement('li');
        li.appendChild(a);
        
        let div = document.createElement('div');
        div.className = "references";
        li.appendChild(div);
        
        if (e.reference.books[0].title != "") {
          
          let p = document.createElement('p');
          p.textContent = "References:";
          div.appendChild(p);

          let ol = document.createElement('ol');
          div.appendChild(ol);

          e.reference.books.forEach(book => {
            let li = document.createElement('li');
            li.innerHTML = `Book: ${book.title}`;
            ol.appendChild(li)

            if (book.chapters[0].chapter != "") {
              let ol = document.createElement('ol');
              li.appendChild(ol);
              book.chapters.forEach(chapter => {
                let li = document.createElement('li');
                ol.appendChild(li);

                let a = document.createElement('a');
                a.textContent = `${chapter.chapter}`;
                a.href = chapter.url;
                a.target = '_blank';
                li.appendChild(a);

              });
            }
          });

          if (e.reference.sites[0].title != "") {
            e.reference.sites.forEach(site => {
              let li = document.createElement('li');
              li.innerHTML = "Site: ";
              ol.appendChild(li)
              let a = document.createElement('a');
              a.innerHTML = site.title;
              a.href = site.url;
              a.target = '_blank';
              li.appendChild(a)
            });
          }
        }
    

        parent.appendChild(li);
    
      }
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