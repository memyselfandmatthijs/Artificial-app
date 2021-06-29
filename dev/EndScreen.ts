import { Game } from "./game.js";
import { ScreenBase } from "./ScreenBase.js";


export class EndScreen extends ScreenBase{
    private game : Game;
    private scoreCounter: HTMLElement;

    constructor(game : Game, score : number) {
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

    private goToGameScreen(){
        console.log(this);
        this.remove();
        this.game.showGameScreen();
    }
}