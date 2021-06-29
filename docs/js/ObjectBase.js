export class ItemBase {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 10;
        this.positionObstacle();
    }
    update() {
        this.y += this.speed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        if (this.y > (window.innerHeight + this.div.clientHeight)) {
            this.positionObstacle();
        }
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    positionObstacle() {
        this.x = Math.floor(Math.random() * (window.innerWidth - 300));
        this.y = Math.floor(Math.random() * 1000);
        if (this.y >= -300) {
            this.y *= -1;
            this.y -= 300;
        }
    }
}
//# sourceMappingURL=ObjectBase.js.map