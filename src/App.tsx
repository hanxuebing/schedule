import * as React from 'react';
import './App.css';

import logo from './logo.svg';

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
         <div className="App">
            <button onClick={this.trigger}>asdasdasd</button>
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
               To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
         </div>
      );
   }
}

export default App;
