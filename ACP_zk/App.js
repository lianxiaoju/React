import React, { Component } from 'react';
import Dialog from './components/Dialog'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [{
        name: '打开 alert 提示框',
        type: 'alert'
      }, {
        name: '打开 confirm 提示框',
        type: 'confirm'
      }, {
        name: '打开 prompt 提示框',
        type: 'prompt'
      }],
      types: null,
      falg: false,
      close: this.close.bind(this),
    }
  }
  close() {
    this.setState({
      falg: !this.state.falg,
      types: null,
    })
  }
  render() {
    const { list, types, falg, close } = this.state;
    return (
      <div className="App">
        <ul className='center'>
          {
            list ? list.map((v, k) => {
              return (
                <li key={k} onClick={() => {
                  this.setState({
                    types: v.type,
                    falg: !falg,
                  })
                }}>{v.name}</li>
              )
            })
              : ''
          }
        </ul>
        <Dialog type={types} close={close} />
        {
          falg ? 
            <div className='mark'></div> 
            : ''
        }
      </div>
    );
  }
}

export default App;
