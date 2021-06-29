import { ScreenBase } from "./ScreenBase.js";
export class StartScreen extends ScreenBase {
    constructor(game) {
        super("startscreen");
        this.game = game;
        const startBtn = document.createElement("a");
        startBtn.classList.add('startbtn');
        startBtn.style.transform = `translate(830px, 670px)`;
        this.element.appendChild(startBtn);
        startBtn.addEventListener("click", () => this.goToGameScreen());
    }
    goToGameScreen() {
        this.remove();
        this.game.showGameScreen();
    }
}
//# sourceMappingURL=StartScreen.js.map