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
   public render() {
      const { width } = this.props;
      const { height } = this.props;
      const { left } = this.props;
      const { top } = this.props;
      return (
         <canvas width={width} height={height} style={{ position: "absolute", left: left + 'px', top: top + 'px' }} >

         </canvas>
      );
   }
}
export default Canvas;