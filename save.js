const Save = {
  load(key, def) {
    return JSON.parse(localStorage.getItem(key)) ?? def;
  },
  save(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }
};
