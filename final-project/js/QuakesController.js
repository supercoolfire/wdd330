import { getLocation,  writeToLS, readFromLS, bindTouch, bindEnter } from './utilities.js';
import Quake from './Quake.js';
import {QuakesView, DisplayMatches} from './QuakesView.js';
import { LocalityStorageModel } from './LocalStorage.js';

// Quake controller
// export default class QuakesController {
export class QuakesController {
  constructor(parent, position = null) {
    this.parent = parent;
    this.parentElement = null;
    this.position = position || {
      lat: 0,
      lon: 0
    };
    this.quakes = new Quake();
    this.quakesView = new QuakesView();
    this.quakeList = null;
  }
  async init() {
    this.parentElement = document.querySelector(this.parent);
    await this.initPos();
    this.getQuakesByRadius(100);
  }
  async initPos() {
    if (this.position.lat === 0) {
      try {
        const posFull = await getLocation();
        this.position.lat = posFull.coords.latitude;
        this.position.lon = posFull.coords.longitude;
        // console.log(posFull);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async getQuakesByRadius(radius = 100) {
    //set loading message
    try {
      this.parentElement.innerHTML = `<li>
      <div class="loader loader--style1" title="0">
    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
    <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
      s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
      c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
    <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
      C22.32,8.481,24.301,9.057,26.013,10.047z">
      <animateTransform attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 20 20"
        to="360 20 20"
        dur="0.5s"
        repeatCount="indefinite"/>
      </path>
    </svg>
  </div>
      </li>`;

    } catch (error) {
      console.log(error)
    }
    // get the list of quakes in the specified radius of the location
    const quakeList = await this.quakes.getEarthQuakesByRadius(
      this.position,
      100
    );
    // render the list to html
    this.quakeList = quakeList;
    this.quakesView.renderQuakeList(this.quakeList, this.parentElement);
    // add a listener to the new list of quakes to allow drill down in to the details
    // console.log(this.parentElement);
    this.parentElement.addEventListener('touchend', e => {
      this.getQuakeDetails(e.target.dataset.id);
    });
    this.parentElement.addEventListener('click', e => {
      this.getQuakeDetails(e.target.dataset.id);
    });
  }
  async getQuakeDetails(quakeId) {
    const quake = this.quakes.getQuakeById(quakeId);
    this.quakesView.renderQuake(quake, this.parentElement);
    writeToLS(quakeId, quake);
    this.buildBackButton();
  }
  buildBackButton() {
    const backButton = document.createElement('button');
    backButton.innerHTML = '&lt;- All Quakes';
    backButton.addEventListener('touchend', async () => {
      // this.showHikeList();
      this.quakesView.renderQuakeList(this.quakeList, this.parentElement);
      backButton.classList.add('hidden');
    });
    backButton.addEventListener('click', async () => {
      // this.showHikeList();
      this.quakesView.renderQuakeList(this.quakeList, this.parentElement);
      backButton.classList.add('hidden');
    });
    this.parentElement.before(backButton);
    return backButton;
  }
}

export class Home {
  constructor(parent) {
    this.parent = parent;
    this.LS = new LocalityStorageModel();
    
  }
  init() {
    this.parentElement = document.querySelector(this.parent);
    // alert("tae")
    console.log("Home")
    console.log(this.parentElement)

    this.parentElement.innerHTML = this.LS.readFromLS;
  }
}
export class Portfolio {
  constructor(parent) {
    this.parent = parent;
  }
  init() {
    // this.parentElement = document.querySelector(this.parent);
    // alert("tae")
    console.log("Portfolio")
    window.location.replace("../../wdd330/index.html");
  }
    
}
export class Search {
  constructor(parent, position = null) {    
    this.parent = parent;
    this.parentElement = null;
    this.position = position || {
      lat: 0,
      lon: 0
    }
    this.searchView = new DisplayMatches();
    this.endpoint =
      'https://gist.githubusercontent.com/joshgeller/c391770a616a6aecfefa2c07c5071562/raw/c03ad4b988d1cd876b8c28aadcaeacb000d39cc8/cities.json';
    this.parentElement = document.querySelector(this.parent);
    }
    async init() {
      this.parentElement = document.querySelector(this.parent);
      // alert("tae")
    console.log("Search")

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    
    const cities = [];
    fetch(this.endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));
    console.log(cities)
    
    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);

    function findMatches(wordToMatch, cities) {
      // console.log(cities);
      return cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
      });
    }

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function displayMatches() {
      const matchArray = findMatches(searchInput.value, cities);
      const html = matchArray.map(place => {
        const regex = new RegExp(searchInput.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${searchInput.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${searchInput.value}</span>`);
        return `
      <li data-id="${place.latitude+','+place.longitude}">
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.latitude+','+place.longitude}</span>
      </li>
    `;
      }).join('');
      suggestions.innerHTML = html;
    }
    function selected(id){
      console.log(id)
    }
    console.log(this.parentElement);
    this.parentElement.addEventListener('touchend', e => {
      selected(e.target.dataset.id);
    });
    this.parentElement.addEventListener('click', e => {
      selected(e.target.dataset.id);
    });
  }

}