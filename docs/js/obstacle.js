import { ItemBase } from "./Itembase.js";
export class Obstacle extends ItemBase {
    constructor() {
        super();
        this.type = "";
        this.create();
    }
    update() {
        super.update();
    }
    create() {
        let rand = Math.floor(Math.random() * 3);
        switch (rand) {
            case 0:
                this.type = "bush";
                break;
            case 1:
                this.type = "rock";
                break;
            case 2:
                this.type = "treeTrunk";
                break;
        }
        const gamescreen = document.getElementsByTagName("gamescreen")[0];
        this.div = document.createElement(this.type);
        gamescreen.appendChild(this.div);
    }
}
//# sourceMappingURL=Obstacle.js.map