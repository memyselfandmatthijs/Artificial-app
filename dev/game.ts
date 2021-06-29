import { EndScreen } from "./EndScreen.js";
import { GameScreen } from "./GameScreen.js";
import { ScreenBase } from "./ScreenBase.js";
import { StartScreen } from "./StartScreen.js";


export class  Game {

    private screen: ScreenBase;

    public get GetScreen(): ScreenBase{
        return this.screen;
    }

    constructor() {
        this.showStartScreen();
        this.gameLoop();
    }

    public showStartScreen(){
        this.screen = new StartScreen(this);
    }

    public showGameScreen(){
        this.screen = new GameScreen(this);
    }

    public showEndScreen(score: number){
        this.screen = new EndScreen(this, score);
        console.log("new endscreen");
    }

    private gameLoop(){
        this.screen.update();
        requestAnimationFrame(()=>this.gameLoop());
    }
}

new Game();

