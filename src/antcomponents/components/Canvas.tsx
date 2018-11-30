import * as React from 'react';
import * as PIXI from 'pixi.js';
import spritepng from './test/test.png';
export interface Props {
   width: number;
   height: number;
   left: number;
   top: number;
}

interface State {

}

class Canvas extends React.Component<Props, State>  {
   public app: PIXI.Application;
   constructor(props: Props) {
      super(props);
   }
   public resize(width: number, height: number) {

   }

   public componentDidMount() {
      this.initStage();
   }
   public initStage() {
      const { width } = this.props;
      const { height } = this.props;
      const { left } = this.props;
      const { top } = this.props;
      let canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
      canvas.style.position = 'absolute';
      canvas.style.left = left + 'px';
      canvas.style.top = top + 'px';
      this.app = new PIXI.Application(width, height, { view: canvas, backgroundColor: 0x1099bb });
      let root = document.getElementById('root') as HTMLElement;
      root.appendChild(this.app.view);

      var texture = PIXI.Texture.fromImage(spritepng);
      var container = new PIXI.Container();
      var test = new PIXI.Sprite(texture);
      container.addChild(test);
      this.app.stage.addChild(container);
   }
   public onAssetsLoaded() {

   }
   public render() {
      return (
         <canvas id='myCanvas'>
         </canvas>
      );
   }
}
export default Canvas;