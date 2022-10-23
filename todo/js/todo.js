/*
private:
read/write localStorage
*/
import { writeToLS, readFromLS, bindTouch, bindEnter } from "./utils.js";

// we need a place to store our list of todos in memory
let liveToDos = null;

// View code here
function renderList(list, element, toDos, hidden) {
  console.log(list);
  element.innerHTML = "";

  list.forEach(toDo => {
    const item = document.createElement("li");
    const formattedDate = new Date(toDo.id).toLocaleDateString("en-US");

    let cb = null;
    let btn = null;

    if (hidden && toDo.completed) {
      item.innerHTML = `<label><input type="checkbox" checked><strike> ${toDo.content}</strike></label><button>💩</button>`;
    } 
    else {
      item.innerHTML = `<label><input type="checkbox"> ${toDo.content}</label><button>💩</button>`;
    }
    if (hidden && toDo.completed) {
      item.innerHTML = `<label><input type="checkbox" checked><strike> ${toDo.content}</strike></label><button>💩</button>`;
    } else if (hidden && !toDo.completed) {
      item.innerHTML = `<label><input type="checkbox"> ${toDo.content}</label><button>💩</button>`;
    } else if (!hidden && !toDo.completed) {
      item.innerHTML = `<label><input type="checkbox"> ${toDo.content}</label><button>💩</button>`;
    } else if (!hidden && toDo.completed) {
      item.innerHTML = `<label><input type="checkbox" checked><strike> ${toDo.content}</strike></label><button>💩</button>`;
    }

    // Wire listener tot other checkbox
    cb = item.childNodes[0].childNodes[0];

    if (cb) {
      cb.addEventListener("change", () => {
        toDos.completeToDo(toDo.id);
      });
    }

    // Wire listener to the button
    btn = item.childNodes[1];
    if (btn) {
      btn.addEventListener("click", () => {
        toDos.removeToDo(toDo.id);
      });
    }

    element.appendChild(item);
  });

  numToDoLeft();
  document.getElementById('todoInput').focus();
  
  console.log("%c list\n", "color: blue; font-weight: bold; font-size: 1rem", list);
  
}

function getToDos(key) {
  if (liveToDos === null) {
    // we need to go read the list from the data store
    liveToDos = readFromLS(key) || [];
  }

  return liveToDos;
}

function addToDo(value, key) {
  // use Date.now() for UTC milisecond string.
  const newToDo = {
    id: new Date(),
    content: value,
    completed: false
  };

  liveToDos.push(newToDo);
  writeToLS(key, liveToDos);
}

function deleteToDo(key, listKey) {
  let newList = liveToDos.filter(item => item.id != key);
  liveToDos = newList;
  writeToLS(listKey, liveToDos);
}


//  this would be done last if you still have time...and if you haven't blown to minds
function filterToDos(key, completed = true) {
  let toDos = getToDos(key);

  // return a list of another completed or not completed toDos based on hte parametyer.
  return toDos.filter(item => item.completed === hidden);
}

// public
export default class ToDos {

  constructor(listElement, key) {
    // opted to store the listElement indside the class.
    console.log(this.listElement);
    this.listElement = listElement;
    console.log(this.listElement);

    // key for localStorage Saving and lookup
    this.key = key;
    // why bind here?
    bindTouch("#addToDo", this.newToDo.bind(this));
    bindEnter("#todoInput", this.newToDo.bind(this));
    bindTouch("#all", this.listToDos.bind(this));
    bindTouch("#active", this.showActive.bind(this, false));
    bindTouch("#completed", this.showCompleted.bind(this, false));
    this.listToDos();
  }

  newToDo() {
    const task = document.getElementById("todoInput");
    addToDo(task.value, this.key);
    task.value = "";
    this.listToDos();
  }

  findToDo(id) {
    let toDo = liveToDos.find(element => {
      return element.id === id
    });

    return toDo;
  }
  completeToDo(id) {
    console.log(id + "checked");
    let toDo = this.findToDo(id);

    if (toDo) {
      toDo.completed = !toDo.completed;
      writeToLS(this.key, liveToDos);
      renderList(liveToDos, this.listElement, this, true);
    }
  }

  removeToDo(id) {
    console.log(id + "removed");;
    let toDo = this.findToDo(id);

    if (toDo) {
      deleteToDo(id, this.key);
      renderList(liveToDos, this.listElement, this, true);
    }
  }


  listToDos(hidden = true) {
    renderList(getToDos(this.key), this.listElement, this, hidden);
  }

  showActive(hidden = false) {
    let newList = [];
    let toDo = getToDos(this.key);
    newList = toDo.filter((li) => li.completed === false);
    renderList(newList, this.listElement, this, hidden);
  }
  showCompleted(hidden = false) {
    let newList = [];
    let toDo = getToDos(this.key);
    newList = toDo.filter((li) => li.completed === true);
    renderList(newList, this.listElement, this, hidden);
  }
}

// additiona functions
function numToDoLeft() {
  const tasksLeft = document.querySelector("#numTasksLeft");
  let counter = 0;
  if (liveToDos) {
    for (let i = 0; i < liveToDos.length; i++) {
      if (liveToDos[i].completed === false) {
        counter++;
      }
    }
    if (counter !== 1) {
      tasksLeft.innerHTML = `${counter} Tasks LeftTodos<span class="tooltiptext">Created by Jayser Pilapil</span>`;
    } else {
      tasksLeft.innerHTML = `${counter} Task LeftTodos<span class="tooltiptext">Created by Jayser Pilapil</span>`;
    }
  }
}
document.getElementById("rickRoll").onclick = () => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank").focus();
// This could also be done as a somple object literal as well
// const Todos = {
//     _key: null,
//     _listElement: null,
//     newToDo: function(value) {
//         addToDo(value);
//         this.listToDos();
//     },
//     listToDos: function(hidden = true) {
//         renderList(getToDos(), this.listElement, hidden);
//     }
// };

// export default toDos;