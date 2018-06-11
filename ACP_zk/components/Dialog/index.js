import React, { Component } from 'react';
import './css/index.css';

class Dialog extends Component {
  constructor() {
    super();
    this.state = {
      _alert: {
        name: 'alert',
        tit: '提示',
        info: '操作成功',
        btn: ['确认']
      },
      _prompt: {
        name: 'prompt',
        tit: '请输入姓名',
        btn: ['取消', '确认']
      },
      _confirm: {
        name: 'confirm',
        tit: '提示',
        info: '确认执行此操作',
        btn: ['取消', '确认']
      },
    }
  }
  render() {
    const { type, close } = this.props;
    const { _prompt, _confirm, _alert } = this.state;
    return (
      <div>
        {
          _alert.name === type ?
            <div className='_alert'>
              <h4>{_alert.tit}</h4>
              <p>{_alert.info}!</p>
              <div className='info'>
                {
                  _alert.btn.map((v, k) => {
                    return (
                      <span key={k} onClick={() => close()}>{v}</span>
                    )
                  })
                }
              </div>
            </div>
            : ''
        }
        {
          _confirm.name === type ?
            <div className='_confirm'>
              <h4>{_confirm.tit}</h4>
              <p>{_confirm.info}</p>
              <div className='info'>
                {
                  _confirm.btn.map((v, k) => {
                    return (
                      <span key={k} onClick={() => close()}>{v}</span>
                    )
                  })
                }
              </div>
            </div>
            : ''
        }
        {
          _prompt.name === type ?
            <div className='_prompt'>
              <h4>{_prompt.tit}</h4>
              <input type='text' />
              <div className='info'>
                {
                  _prompt.btn.map((v, k) => {
                    return (
                      <span key={k} onClick={() => close()}>{v}</span>
                    )
                  })
                }
              </div>
            </div>
            : ''
        }
      </div>
    )
  }
}

export default Dialog;
