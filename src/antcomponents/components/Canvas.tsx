import * as React from 'react';

export interface Props {
   width: number;
   height: number;
   left: number;
   top: number;
}

interface State {

}

class Canvas extends React.Component<Props, State>  {
   constructor(props: Props) {
      super(props);
   }
   public resize(width: number, height: number) {

   }

   public componentDidMount() {
      this.test();
   }
   public test() {
      let c = document.getElementById("myCanvas");
      let ctx = (c as any).getContext("2d");
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(0, 0, 150, 75);
   }
   public render() {
      const { width } = this.props;
      const { height } = this.props;
      const { left } = this.props;
      const { top } = this.props;
      return (
         <canvas id='myCanvas' width={width} height={height} style={{ position: "absolute", left: left + 'px', top: top + 'px' }} >

         </canvas>
      );
   }
}
export default Canvas;