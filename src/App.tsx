import * as React from 'react';
import './App.css';

// import logo from './logo.svg';
import Canvas from './antcomponents/components/Canvas';

class App extends React.Component {

   public render() {
      return (
         <Canvas left={100} top={100} height={600} width={800} />
      );
   }
}

export default App;
