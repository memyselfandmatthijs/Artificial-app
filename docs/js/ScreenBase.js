export class ScreenBase {
    constructor(name) {
        const gameElement = document.querySelector('game');
        this.element = document.createElement(name);
        gameElement.appendChild(this.element);
    }
    remove() {
        this.element.remove();
    }
    update() {
    }
}
//# sourceMappingURL=ScreenBase.js.map