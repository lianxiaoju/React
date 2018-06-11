import React, { Component } from 'react'


import Popuproot from "./popupRoot/popupRoot"

class App extends Component{
    constructor(props){
        super(props)
    }
    render(){


        return <ul>
            <li>
                <Popuproot />
            </li>
        </ul>
    }
}

export default App