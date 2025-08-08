const fs = require("fs");

class Cuisines {
  constructor() {
    this.cuisines = JSON.parse(fs.readFileSync("./app/data/cuisines.json", "utf-8"));
  }

getAllCuisines() {
  return this.cuisines;
}

getCuisinesById(id) {
  const cuisines = this.cuisines.find((cuisines) => cuisines.id == id);
  return cuisines;
}

getCuisinesByName(name) {
  const cuisines = this.cuisines.find((cuisines) => cuisines.name == name);
  return cuisines;
}
}

module.exports = Cuisines;