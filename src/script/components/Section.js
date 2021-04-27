export default class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items; //массив данных
        this._renderer = renderer; //ф-ция создания и отрисовки данных на странице
        this._container = document.querySelector(containerSelector);//селектор контейнера
    }
    // метод, который отвечает за отрисовку всех элементов
    rendererItems() {
        this._items.forEach(item => this._renderer(item));
    }

    addItem(item) {
        this._container.prepend(item);
    }

}