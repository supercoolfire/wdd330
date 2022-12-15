import { getJSON } from './utilities.js';
// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
    // store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 100) {
    let today = new Date();
    let month = today.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    let days = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    today = today.getFullYear() + "-" + month + "-" + days;

    this._quakes = await getJSON(
      this.baseUrl +
        `&starttime=2019-01-01&endtime=${today}&latitude=${
          position.lat
        }&longitude=${position.lon}&maxradiuskm=${radius}`
    );
    return this._quakes;
  }
  async getEarthQuakesByCity(position, radius = 100) {
    let today = new Date();
    let month = today.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    let days = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    today = today.getFullYear() + "-" + month + "-" + days;

    this._quakes = await getJSON(
      this.baseUrl +
        `&starttime=2019-01-01&endtime=${today}&latitude=${
          position.lat
        }&longitude=${position.lon}&maxradiuskm=${radius}`
    );
    return this._quakes;
  }
  getQuakeById(id) {
    return this._quakes.features.filter(item => item.id === id)[0];
  }

}
