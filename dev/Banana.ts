import { ItemBase } from "./Itembase.js";

export class Banana extends ItemBase {
    constructor(){
        super();
        this.create();
    }

    public update() {
        super.update();
    }

    private create() : void {

        const gamescreen = document.getElementsByTagName("gamescreen")[0];

        this.div = document.createElement('banana');
        gamescreen.appendChild(this.div);
     }
}