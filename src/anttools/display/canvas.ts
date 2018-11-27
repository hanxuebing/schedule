import { Vector2 } from 'src/antnest/math/vector2';
import { IDisplay } from 'src/antnest/display/IDisplay';
class Canvas implements IDisplay {
   public width: number;
   public height: number;
   public position: Vector2;
   constructor() {
      this.width = 0;
      this.height = 0;
      this.position = new Vector2(0, 0);
   }

   public setSize(width: number, height: number) {
      this.width = width;
      this.height = height;
   }

   public update() {

   }

   private reSize() {

   }
}

export default Canvas;