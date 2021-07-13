import { Ape } from "./Ape.js";
import { Banana } from "./Banana.js";
import { Obstacle } from "./obstacle.js";
import { ScreenBase } from "./ScreenBase.js";
export class GameScreen extends ScreenBase {
    constructor(game) {
        super('Gamescreen');
        this.obstacles = [];
        this.bananas = [];
        this.score = 0;
        this.game = game;
        for (let i = 0; i < 10; i++) {
            this.obstacles.push(new Obstacle());
            if (i % 2 === 0) {
                this.bananas.push(new Banana());
            }
        }
        const gamescreen = document.getElementsByTagName("gamescreen")[0];
        const overlay = document.createElement('overlay');
        this.scoreCounter = document.createElement('h1');
        this.scoreCounter.classList.add('scoreCounter');
        this.scoreCounter.innerText = `${this.score}`;
        overlay.appendChild(this.scoreCounter);
        gamescreen.appendChild(overlay);
        this.ape = new Ape();
    }
    update() {
        this.scoreCounter.innerText = `${this.score}`;
        this.ape.update();
        for (const obstacle of this.obstacles) {
            obstacle.update();
            if (this.checkCollision(obstacle.getBoundingRect(), this.ape.getBoundingRect())) {
                if (obstacle.type === "treeTrunk" && this.ape.state !== "down") {
                    this.gameOver();
                    break;
                }
                if (obstacle.type === "rock" && this.ape.state !== "up") {
                    this.gameOver();
                    break;
                }
                if (obstacle.type === "bush") {
                    this.gameOver();
                    break;
                }
            }
        }
        for (const banana of this.bananas) {
            banana.update();
            if (this.checkCollision(banana.getBoundingRect(), this.ape.getBoundingRect())) {
                banana.positionObstacle();
                this.score += 5;
            }
        }
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
    gameOver() {
        for (const obstacle of this.obstacles) {
            obstacle.setSpeed = 0;
        }
        for (const banana of this.bananas) {
            banana.setSpeed = 0;
        }
        this.remove();
        this.game.showEndScreen(this.score);
    }
}
//# sourceMappingURL=GameScreen.js.map
