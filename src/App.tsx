import * as React from 'react';
import './App.css';

// import logo from './logo.svg';
import Canvas from './antcomponents/components/Canvas';

class App extends React.Component {
   public trigger() {
      let formData = new FormData();
      formData.append("username", "hello");
      formData.append("password", "1111aaaa");
      var opts = {
         method: "GET",   //请求方法
         // body: formData,   //请求体
         mode: 'cors',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
         },
      };
      fetch('http://127.0.0.1:3002', opts as any).then((e: any) => {
         console.log(e);
      });
   }
   public render() {
      return (
         <Canvas left={100} top={100} height={100} width={100} />
      );
   }
}

export default App;
