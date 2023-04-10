export class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this._renderer = renderer;
    this._container = container;
  }

  generateCard() {
    for (let i = 0; i < this._items.length; i++) {
      this._renderer(i);
    }
  }

  addItem(element) {
    this._container.append(element);
  }
}
