export default class Section {
    constructor(containerSelector) {
        this._container = document.querySelector(containerSelector);//селектор контейнера
    }
    // метод, который отвечает за отрисовку всех элементов
    rendererItems({items, renderer}) {
        items.forEach(item => renderer(item));
    }

    addItem(item) {
        this._container.prepend(item);
    }

}