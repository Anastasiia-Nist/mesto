export class Section {
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }

  generateCard(data) {
    data.forEach((item) => {
      this._renderer(item);
  });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
