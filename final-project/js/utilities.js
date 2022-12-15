export function getJSON(url) {
    return fetch(url)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          //console.log(response.json());
          return response.json();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
export const getLocation = function(options) {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};
  
function qs(selectorName) {
  return document.querySelector(selectorName);
}

export function readFromLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function writeToLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function bindTouch(selector, callback) {
  const element = qs(selector);
  element.addEventListener("touchend", e => {
    e.preventDefault();
    callback();
  });
  element.addEventListener("click", callback);
  element.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        callback();
      }
    });
}
export function bindEnter(selector, callback) {
  const element = qs(selector);
  element.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        callback();
      }
    });
}