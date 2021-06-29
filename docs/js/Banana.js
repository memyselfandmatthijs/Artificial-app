import { ItemBase } from "./Itembase.js";
export class Banana extends ItemBase {
    constructor() {
        super();
        this.create();
    }
    update() {
        super.update();
    }
    create() {
        const gamescreen = document.getElementsByTagName("gamescreen")[0];
        this.div = document.createElement('banana');
        gamescreen.appendChild(this.div);
    }
}
//# sourceMappingURL=Banana.js.map