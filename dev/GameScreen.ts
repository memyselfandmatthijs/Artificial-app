import { Ape } from "./Ape.js";
import { Banana } from "./Banana.js";
import { Obstacle } from "./Obstacle.js";
import { ScreenBase } from "./ScreenBase.js";
import { Game } from "./game.js";


export class GameScreen extends ScreenBase{
    private ape : Ape;
    private obstacles : Obstacle[] = [];    
    private bananas : Banana[] = [];
    private score : number = 0;
    private scoreCounter: HTMLElement;
    private game : Game;

    

    constructor(game:Game) {
        super('Gamescreen');
        this.game = game;

        //create obstacles
        for(let i : number = 0; i < 15; i++){            
            this.obstacles.push(new Obstacle());
            if(i % 2 === 0){
                this.bananas.push(new Banana());
            }
        }

        //create scoreCounter
        const gamescreen = document.getElementsByTagName("gamescreen")[0];

        const overlay = document.createElement('overlay');

        this.scoreCounter = document.createElement('h1');
        this.scoreCounter.classList.add('scoreCounter');
        this.scoreCounter.innerText = `${this.score}`;
       overlay.appendChild(this.scoreCounter);
       gamescreen.appendChild(overlay);


        //create the ape
        this.ape = new Ape();
    }

    public update() : void {
    
        //update score
        this.scoreCounter.innerText = `${this.score}`;

        this.ape.update();

        for(const obstacle of this.obstacles){
        obstacle.update();

        if(this.checkCollision(obstacle.getBoundingRect(), this.ape.getBoundingRect())){
          
                if(obstacle.type === "treeTrunk" && this.ape.state !== "down"){
                    this.gameOver();
                    break;
                }
                if(obstacle.type === "rock" && this.ape.state !== "up"){
                    this.gameOver();
                    break;
                }
                if(obstacle.type === "bush"){
                    this.gameOver();
                    break;
                }
            }
        }

        for(const banana of this.bananas){
            banana.update();

            if(this.checkCollision(banana.getBoundingRect(), this.ape.getBoundingRect())){
                banana.positionObstacle();
                this.score += 5;
        }
        }
        
    }

    private checkCollision(a: ClientRect, b: ClientRect) : boolean {
        return (
            a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom
            )
     }

     private gameOver(){
         for(const obstacle of this.obstacles){
             obstacle.setSpeed = 0;
         }
         for(const banana of this.bananas){
             banana.setSpeed = 0;
         }
         this.remove();
         this.game.showEndScreen(this.score);
     }

    }
