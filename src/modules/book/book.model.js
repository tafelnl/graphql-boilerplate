module.exports = class Book {
  constructor(data) {
    this.data = data;
  }

  set data(val) {
    this._data = val;
  }

  get data() {
    return this._data;
  }

  async id(parent) {
    console.log(parent);
    return 2;
  }

  async bar(parent) {
    console.log(parent);
    return this.data?.bar;
  }
};
