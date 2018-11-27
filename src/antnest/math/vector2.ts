export class Vector2 {
   public x: number;
   public y: number;
   constructor(x: number, y: number) {
      if (this.x) {
         this.x = x;
      } else {
         this.x = 0;
      }
      if (this.y) {
         this.y = y;
      } else {
         this.y = 0;
      }
   }
} 