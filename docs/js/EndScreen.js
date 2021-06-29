import { ScreenBase } from "./ScreenBase.js";
export class EndScreen extends ScreenBase {
    constructor(game, score) {
        super("endscreen");
        this.game = game;
        const restartBtn = document.createElement("a");
        restartBtn.classList.add('restartbtn');
        restartBtn.style.transform = `translate(830px, 670px)`;
        this.element.appendChild(restartBtn);
        this.scoreCounter = document.createElement('h1');
        this.scoreCounter.classList.add('finalScore');
        this.scoreCounter.innerText = `${score}`;
        this.element.appendChild(this.scoreCounter);
        restartBtn.addEventListener("click", () => this.goToGameScreen());
    }
    goToGameScreen() {
        console.log(this);
        this.remove();
        this.game.showGameScreen();
    }
}
//# sourceMappingURL=EndScreen.js.map