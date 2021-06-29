export class Ape{
    private x : number = 0;
    private y : number = 0;
    private div : HTMLElement;
    public state : string = "normal";

    private horizontalSpeed : number = 0;

    public getBoundingRect() : DOMRect{
        return this.div.getBoundingClientRect();
    }

    constructor() {
        // adding event listeners for keyboard events
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));

        this.create();
    }

    private create() : void {
        const gamescreen = document.getElementsByTagName("gamescreen")[0];

        this.div = document.createElement("ape");
        gamescreen.appendChild(this.div);
        //determine location
        this.x = (window.innerWidth / 2) - (this.div.clientWidth / 2);
        this.y = window.innerHeight - 300; 
    }

    public update(){
        this.x += this.horizontalSpeed;

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    } 

    private onKeyDown(e: KeyboardEvent): void {

        // Check if the key in the event (e.key) matches the desired input
        switch (e.key) {
            // When the "ArrowLeft" key is pressed
            case "ArrowLeft":
                // Give the vertical speed a negative value
                this.horizontalSpeed = -7;
                break;
            // When the "ArrowRight" key is pressed
            case "ArrowRight":
                // Give the vertical speed a positive value
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

    private onKeyUp(e : KeyboardEvent): void{
        switch(e.key) {
            case "ArrowLeft":
                //Stop moving
                this.horizontalSpeed = 0;
                break;
            case "ArrowRight":
                //also stop moving
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