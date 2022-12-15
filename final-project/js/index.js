// import QuakesController from './QuakesController.js';
import buildNavigation from './routing.js';
// import LocalityStorageModel from './LocalStorage.js';

const navElement = document.getElementById('mainNav');
buildNavigation(navElement);

const localElement = document.getElementById('history');
// LocalityStorageModel(localElement);
// const myQuakesController = new QuakesController('#quakeList');
// myQuakesController.getQuakesByRadius();
// myQuakesController.position.lat
// myQuakesController.position.lon
