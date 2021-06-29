import { EndScreen } from "./EndScreen.js";
import { GameScreen } from "./GameScreen.js";
import { StartScreen } from "./StartScreen.js";
export class Game {
    constructor() {
        this.showStartScreen();
        this.gameLoop();
    }
    get GetScreen() {
        return this.screen;
    }
    showStartScreen() {
        this.screen = new StartScreen(this);
    }
    showGameScreen() {
        this.screen = new GameScreen(this);
    }
    showEndScreen(score) {
        this.screen = new EndScreen(this, score);
        console.log("new endscreen");
    }
    gameLoop() {
        this.screen.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map