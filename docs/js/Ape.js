export class Ape {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.state = "normal";
        this.horizontalSpeed = 0;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.create();
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    create() {
        const gamescreen = document.getElementsByTagName("gamescreen")[0];
        this.div = document.createElement("ape");
        gamescreen.appendChild(this.div);
        this.x = (window.innerWidth / 2) - (this.div.clientWidth / 2);
        this.y = window.innerHeight - 300;
    }
    update() {
        this.x += this.horizontalSpeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    onKeyDown(e) {
        switch (e.key) {
            case "ArrowLeft":
                this.horizontalSpeed = -7;
                break;
            case "ArrowRight":
                this.horizontalSpeed = 7;
                break;
            case "ArrowUp":
                this.state = "up";
                break;
            case "ArrowDown":
                this.state = "down";
                break;
        }
    }
    onKeyUp(e) {
        switch (e.key) {
            case "ArrowLeft":
                this.horizontalSpeed = 0;
                break;
            case "ArrowRight":
                this.horizontalSpeed = 0;
                break;
            case "ArrowUp":
                this.state = "normal";
                break;
            case "ArrowDown":
                this.state = "normal";
                break;
        }
    }
}
//# sourceMappingURL=Ape.js.map