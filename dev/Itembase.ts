export class ItemBase{
    //Fields
    protected x : number = 0;
    protected y : number = 0;
    protected div : HTMLElement;
    private speed : number = 10;
    public set setSpeed(speed : number){
        this.speed = speed;
    }


    constructor() {
        this.positionObstacle();
    }

    public update() : void {
        this.y += this.speed;

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;

        if(this.y > (window.innerHeight + this.div.clientHeight)){
            this.positionObstacle();
        }
    }

    public getBoundingRect() : DOMRect {
        return this.div.getBoundingClientRect();
    }

    public positionObstacle(){
        this.x = Math.floor(Math.random() * (window.innerWidth - 300));
        this.y = Math.floor(Math.random() * 1000);
        if(this.y >= -300){
            this.y *= -1;
            this.y -= 300;
        }
    }

}